const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const fsp = require("fs").promises;
const fs = require("fs");

//file we're getting birthtime of
//put your own file here
const inputFile = "";

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "myDb";

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // Check if the file exists in the current directory.
  fs.access(inputFile, fs.constants.F_OK, err => {
    if (err) {
      console.log("inputfile not found, closing client");
      client.close();
    }
  });

  insertDocuments(db, function() {
    client.close();
  });

});

// Insert file birthtime into collection
const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("myDb");
  // insert birthtime gotten with node fs promise
  fsp.lstat(inputFile).then(
    function(response) {
      collection.insertOne(
        {
          Date: response.birthtime.toLocaleDateString(),
          Time: response.birthtime.toLocaleTimeString()
        },
        function(err, result) {
          assert.equal(err, null);
          console.log('Inserted document into the collection');
          callback(result);
        }
      );
    },
    function(error) {
      console.error("Failed!", error);
    }
  );
};
