//moves the $file to $dir2
var moveFile = (file, dir2)=>{
    //include the fs, path modules
    var fs = require('fs');
    var path = require('path');
  
    //gets file name and adds it to dir2
    var f = path.basename(file);
    var dest = path.resolve(dir2, f);
  
    fs.rename(file, dest, (err)=>{
      if(err) throw err;
      else console.log('Successfully moved');
    });
  };
  
  //move file1.htm from 'test/' to 'test/dir_1/'
  moveFile('./db/App.css','../');