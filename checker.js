#!/usr/bin/env node

'use strict';

// let gitDir = "M:\Project\spring-cloud-alibaba\.git";
let dir = process.argv[2];
// console.log(dir);
let extensionName = dir.substr(dir.lastIndexOf('.'));

let getLogFunc;

if (extensionName === ".git")
{
    getLogFunc = require("./get_git_log").getGitLog;
}
else if (extensionName === ".svn")
{
    getLogFunc = require("./get_svn_log").getSvnLog;
    dir = dir.substr(0, dir.length - 4);
}
else
{
    console.error("path error : " + dir);
}

if (getLogFunc)
{
    getLogFunc(dir, (logText)=>{
        let text = "var _logData = [" + logText + "];";

        let fs = require('fs');
        let path = require('path');

        fs.writeFileSync(path.join(__dirname, "log_data.js"), text);

        // console.log("done");

        let open = require('open');

        open('file:///' + path.join(__dirname, 'index.html'));

    });
}

