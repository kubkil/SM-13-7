const fs = require('fs');
const colors = require('colors');
const StatMode = require('stat-mode');

fs.readFile('./text.txt', 'utf-8', function (err, data) {
  console.log('Dane przed zapisem!'.blue);
  console.log(data);
  fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie!', function (err) {
    if (err) throw err;
    console.log('Zapisano!'.blue);
    fs.readFile('./text.txt', 'utf-8', function (err, data) {
      console.log('Dane po zapisie'.blue)
      console.log(data);
    });
  });
});