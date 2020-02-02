'use strict';

exports.getGitLog = getGitLog;

function getGitLog(gitPath, callback)
{
    const exec = require('child_process').exec;
    let options = {};
    options.maxBuffer = 20000 * 1024;//默认为200*1024，但是默认值太小，导致有时候输出太多出问题

    // git --git-dir="XXX/XXX" --no-pager log --reflog --pretty=format:"%ad||%an" > aaa.txt
    let cmdStr = "git --git-dir=\"" + gitPath + "\" --no-pager log --reflog --pretty=format:\"['%ad','%an'],\"";

    let mProcess = exec(cmdStr, options);

    let text = "";

    mProcess.stdout.on('data', function (data)
    {
        // console.log('log: ' + data, 1);
        text += data;
    });
    mProcess.stderr.on('data', function (data)
    {
        console.log('error: ' + data, 1);
    });
    mProcess.on('exit', function(code){
        
        if (callback)
        {
            callback(text);
        }
        
    });
}