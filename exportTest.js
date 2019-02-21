//const message = 'Hello world';
/*
const canadianify = (str) => {
  //console.log(`${str}-eh?`)
  return (`${str}-eh?`);
}
*/

function pTest(str){
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('foo' + str);
    }, 300);
  });
}




module.exports = pTest;
