const fsp = require('fs').promises;

const inputFile = "H:/nmDemo/package.json";

//get file birthtime
fsp.lstat(inputFile).then(function(response) {
  console.log('birthTime = ', response.birthtime);
}, function(error) {
  console.error("Failed!", error);
})

//const cDate = cTimeDT.toLocaleDateString();
//const cTime = cTimeDT.toLocaleTimeString();

//console.log(cDate, cTime);

//const owaDate = dt.toLocaleDateString();
//const owaTime = dt.toLocaleTimeString();

//console.log(owaDate, owaTime);
