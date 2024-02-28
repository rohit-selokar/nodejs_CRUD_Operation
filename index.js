const fs = require("fs");

function createFile(filePath) {
  fs.writeFile(filePath, " ", "utf-8", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File created successfully");
    }
  });
}

function appendFile(filePath, content) {
  fs.appendFile(filePath, content, "utf-8", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("text added.....");
    }
  });
}

function readFile(filePath) {
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

function renameFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("updated File name");
    }
  });
}

function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File deleted");
    }
  });
}

// function listFile(dpath){
//     fs.readdir(dpath,(files)=>{
//         console.log(files);
//     })
// }

const [, , operation, ...params] = process.argv;

switch (operation) {
  case "create":
    createFile(params[0], params[1]);
    break;

  case "append":
    appendFile(params[1], params[0]);
    break;

  case "read":
    readFile(params[0]);
    break;

  case "rename":
    renameFile(params[0], params[1]);
    break;

  // case 'list':
  //     listFile(params[0] || '.');
  //     break;

  case "delete":
    deleteFile(params[0]);
    break;

  default:
    console.log("Invalid Operation");
}
