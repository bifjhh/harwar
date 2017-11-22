$(function () {
    var card_img = $('.card_multi_img');
    console.log(card_img.length);
    for(var i =0;i<card_img.length;i++){
        card_img[i].onmouseover=function(){
            $(this).addClass("hover");
        };
        card_img[i].onmouseout = function () {
            $(this).removeClass("hover");
        }
    }

})