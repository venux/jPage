# jPage
A Simple jQuery Page Plugin

## 1.引用page.js,page.css文件

## 2.代码示例

```javascript
var $ctrl=$("#page");
var totalCount=100;
var pageSize=10;

function getList(pageNum){
    $ctrl.PageCtrl(totalCount, pageNum, pageSize, function (newPageNum) {
        getList(newPageNum);
    });
}
```