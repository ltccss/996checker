# usage
你可以直接下载此项目，在项目根目录下打开命令行，然后
```
node checker "the git repository path you want to check"
```

e.g. 
```
node checker "M:\Project\spring-cloud-alibaba\.git"
```

或者

你可以使用npm全局安装
```
npm i check_996 -g
```
然后
```
996checker "the git repository path you want to check"
```
e.g. 
```
996checker "M:\Project\spring-cloud-alibaba\.git"
```

成功后将会在新打开的浏览器窗口中显示这样的一个页面：

![img](/doc/example.png?raw=true)



# configuration
目前你可以在`config.js`文件中配置工作时间和休息时间，以及不同程度的额外工作时间对应的颜色
