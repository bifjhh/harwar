$(function () {
    var card_img = $('.card_multi_img');
    var new_l = $('.new_l');
    mouse(card_img);
    mouse(new_l);
    
    // 封装鼠标经过添加类名的方法
    function mouse(element){
        for (var i = 0; i < element.length; i++) {
            element[i].onmouseover = function () {
                $(this).addClass("hover");
            };
            element[i].onmouseout = function () {
                $(this).removeClass("hover");
            };
        };
    }

})