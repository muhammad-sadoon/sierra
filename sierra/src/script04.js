$(document).ready(function () {
    $(".temp_icon-1").click(function () {
            $(".fourImage-2").show();
            $(".fourImage-1").show();
            $(".largeImage-1").show();
            $(".largeImage-2").show();
            $(".largeImage").show();
        
    })
    $(".temp_icon-2").click(function () {
            $(".fourImage-2").hide();
    })
    $(".temp_icon-3").click(function () {
            $(".fourImage-1").hide();
            $(".fourImage-2").show();

    })
    $(".temp_icon-4").click(function () {
            $(".fourImage-2").hide();
            $(".fourImage-1").show();

    })
    $(".temp_icon-5").click(function () {
            $(".largeImage").hide();
            $(".fourImage-2").show();
            $(".temp_icon-5").style.fontWeight(700)
    })
})