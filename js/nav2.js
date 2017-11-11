$(function () {
    //   鼠标移动 给 nav 添加类名
    var nav_lis = $('.nav ul:first li');
    /* 鼠标移动 给 nav 添加类名 */
    for (var i = 0; i < nav_lis.length;i++){
        $(nav_lis[i]).mouseover (function () {
            // console.log(this);
            for( var j = 0; j<nav_lis.length;j++){
               $(nav_lis[j]).removeClass("active");
            }
            $(this).addClass("active");
        });
        
    }
    // 鼠标移动 给 nav 添加类名 - - 结束
    
})