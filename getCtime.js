const fsp = require('fs').promises;

function getCtime(inputFile){
  return fsp.lstat(inputFile);
}

module.exports = getCtime;
