'use strict';


// 拿到git日志
// git --git-dir="XXX/XXX" --no-pager log --reflog --pretty=format:"%ad||%an" > aaa.txt
// let gitDir = "M:\Project\spring-cloud-alibaba\.git";
let gitDir = process.argv[2];
// console.log(gitDir);

let exec = require('child_process').exec;
let options = {};
options.maxBuffer = 20000 * 1024;//默认为200*1024，但是默认值太小，导致有时候输出太多出问题

let cmdStr = "git --git-dir=\"" + gitDir + "\" --no-pager log --reflog --pretty=format:\"['%ad','%an'],\"";

let mProcess = exec(cmdStr, options);

let text = "";

mProcess.stdout.on('data', function (data)
{
    // console.log('log: ' + data, 1);
    text += data;
});
mProcess.stderr.on('data', function (data)
{
    // console.log('error: ' + data, 1);
});
mProcess.on('exit', function(code){
    
   
    if (code == 0)
    {
        text = "var _gitData = [" + text + "];";

        let fs = require('fs');
        let path = require('path');

        fs.writeFileSync(path.join(__dirname, "git_data.js"), text);

        // console.log("done");

        let open = require('open');

        open('file:///' + path.join(__dirname, 'index.html'));
    }
    else
    {
        console.warn("cmd error");    
    }
});

// 解析日期

// 输出js json数据

// 打开网页

