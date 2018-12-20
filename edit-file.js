'use strict';

const fs = require('fs');

let file = `${__dirname}/files/1.txt`;

let printFile = (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);

};

fs.readFile(file, printFile);

/*

 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 
const readAll = (paths, callback) => {

  let contents = [];
  readOne(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log('Read File 1');
      contents.push(data.toString().trim());
    }
  });

  readOne(paths[1], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log('Read File 2');
      contents.push(data.toString().trim());
    }
  });

  readOne(paths[2], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      console.log('Read File 3');
      contents.push(data.toString().trim());
    }
  });

  callback(undefined, contents);
};


*/
