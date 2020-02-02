# usage
你可以直接下载此项目，在项目根目录下打开命令行，然后
```
node checker "the git/svn repository path you want to check"
```

e.g. 
```
node checker "M:\Project\spring-cloud-alibaba\.git"
```
```
node checker "M:\Project\easybuy09\.svn"
```

或者

你可以使用npm全局安装
```
npm i check_996 -g
```
然后
```
996checker "the git/svn repository path you want to check"
```
e.g. 
```
996checker "M:\Project\spring-cloud-alibaba\.git"
```
```
996checker "M:\Project\easybuy09\.svn"
```

成功后将会在新打开的浏览器窗口中显示这样的一个页面：

![img](https://github.com/ltccss/996checker/blob/master/doc/example.png?raw=true)



# configuration
在项目目录下使用
```
node checker --config
```
或者npm全局安装后使用
```
996checker --config
```
可以快速打开`config.js`文件所在目录

目前你可以在`config.js`文件中配置:

- 工作时间和休息时间，以及不同程度的额外工作时间对应的颜色
- 需要排除的作者
