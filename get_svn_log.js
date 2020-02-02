'use strict';

exports.getSvnLog = getSvnLog;

function getSvnLog(svnPath, callback)
{
    const exec = require('child_process').exec;
    let options = {};
    options.maxBuffer = 20000 * 1024;//默认为200*1024，但是默认值太小，导致有时候输出太多出问题

    svnPath = svnPath.replace(/\\/g, "/");

    // svn [Path] --quiet --incremental
    let cmdStr = "svn log \"" + svnPath + "\" --quiet --incremental";

    // console.log("cmd ", cmdStr);

    let mProcess = exec(cmdStr, options);

    let text = "";

    console.log("Loading svn log will cost some time...");

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
        
        let array = text.split(/[\n\r]+/);

        let log = "";

        for (let i = 0; i < array.length; i++)
        {
            if (array[i] && array[i].indexOf("---") !== 0)
            {
                let infos = array[i].split(" | ");
                log += "['" + infos[2].substr(0, infos[2].indexOf(" (")) + "','" + infos[1] + "'],\n";
            }
        }

        if (callback)
        {
            callback(log);
        }
        
    });
}