$(document).ready(function () {

    $(".search-btn").click(function () {
        $(".search-form").show();
        $(this).hide();
    });//点击放大镜出现搜索框


    $(".con-li").click(function () {
        $("#click-show-ser").show();
        return false;
    });
    $("#click-show-ser").click(function () {
        return false;
    });
    $(document).click(function () {
        $("#click-show-ser").hide();
    });
    $('#pop-div-click').click(function () {
        $('#server-pop').show();
        $('#click-show-ser').hide();
    });

    $('#click-close').click(function () {
        $('#server-pop').hide();

    });

});

$(function () {
    $(".header ul li").click(function () {
        $(this).addClass("hover").siblings().removeClass("hover");
    });//导航点击添加下划线变色
});


