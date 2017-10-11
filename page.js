/**
 * 分页控件
 * @param {int} totalCount 总数
 * @param {int} pageNum 页码
 * @param {int} pageSize 每页个数
 * @param {function(pageNum)} changePageCallback 切换页面回调函数
 */
$.fn.PageCtrl = function (totalCount, pageNum, pageSize, changePageCallback) {
    var $pageDiv = $(this);

    if (totalCount === 0)
        return;
    if (pageNum === undefined)
        pageNum = 1;

    var pageCount = (totalCount % pageSize) == 0 ? totalCount / pageSize : parseInt(totalCount / pageSize, 10) + 1;
    var html = '<div class="page-ctrl">\
                    <span class="page-pre" pageCtrl="pre">\
                        <i class="icon icon-pre">&lt;</i>\
                    </span>\
                    <span class="page-list">'+ pageNum + '/' + pageCount + '</span>\
                    <span class="page-next" pageCtrl="next">\
                        <i class="icon icon-next" >&gt;</i>\
                    </span>\
                    <span>\
                        <input class="page-input" type="number" min=1 max="'+ pageCount + '" value="' + pageNum + '" pageCtrl="pageNum" />\
                    </span>\
                    <span>\
                        <a href="javascript:;" class="page-btn" pageCtrl="go">Go</a>\
                    </span>\
                </div>';

    $pageDiv.html(html);

    $pageDiv.find("[pageCtrl]").click(function () {
        var pageCtrlType = $(this).attr("pageCtrl");

        if (pageCtrlType === "pageNum") {
            return;
        }

        if (pageCtrlType === "pre") {
            pageNum = (pageNum - 1) <= 0 ? 1 : (pageNum - 1);
        } else if (pageCtrlType === "next") {
            pageNum = (pageNum + 1) > pageCount ? pageCount : (pageNum + 1);
        } else {
            pageNum = parseInt($pageDiv.find("[pageCtrl='pageNum']").val(), 10);

            if (isNaN(pageNum))
                pageNum = 1;

            if (pageNum - 1 <= 0) {
                pageNum = 1;
            } else if (pageNum + 1 > pageCount) {
                pageNum = pageCount;
            } else {
                //
            }
        }

        if (pageCtrlType !== "pageNum")
            changePageCallback(pageNum);
    });
}