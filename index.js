const fs = require('fs');

fs.readdir('./', 'utf-8', function (err, files) {
  if (err) throw err;
  console.log('Gotowe');
  fs.writeFile('./folderContent.txt', files, function (err) {
    if (err) throw err;
    fs.readFile('./folderContent.txt', function (err, data) {
      if (err) throw err;
      console.log('Zawartość folderContent.txt to: ' + data);
    });
  });
});