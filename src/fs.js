const fs = require('fs');

/**
 * 读取文件
 */
fs.readFile('index.js', function(err, data) {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});