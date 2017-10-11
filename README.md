# jPage
A Simple jQuery Page Plugin

## 1.Import `page.js`,`page.css`

## 2.Example

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