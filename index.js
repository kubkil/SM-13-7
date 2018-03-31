const fs = require('fs');

fs.readdir('./', 'utf-8', function (err, files) {
  if (err) throw err;
  console.log('Gotowe');
  fs.writeFile('./folderContent.txt', files, function (err) {
    if (err) throw err;
    fs.readFile('./folderContent.txt', function (err, data) {
      if (err) throw err;
      console.log('Zawartość pliku to: ' + data);
    });
  });
});

// fs.readFile('./text.txt', 'utf-8', function (err, data) {
//   console.log('Dane przed zapisem!'.blue);
//   console.log(data);
//   fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie!', function (err) {
//     if (err) throw err;
//     console.log('Zapisano!'.blue);
//     fs.readFile('./text.txt', 'utf-8', function (err, data) {
//       console.log('Dane po zapisie'.blue)
//       console.log(data);
//     });
//   });
// });