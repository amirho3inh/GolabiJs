jQuery.fn.center = function (elm) {
    if(elm){
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(elm).height() - $(this).outerHeight()) / 2) +
            $(elm).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(elm).width() - $(this).outerWidth()) / 2) +
            $(elm).scrollLeft()) + "px");
        return this;
    }else{
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    }
}

function toPersianNum(num) {
    num = num.toString();
    num = num.replace(/1/gi, "۱");
    num = num.replace(/2/gi, "۲");
    num = num.replace(/3/gi, "۳");
    num = num.replace(/4/gi, "۴");
    num = num.replace(/5/gi, "۵");
    num = num.replace(/6/gi, "۶");
    num = num.replace(/7/gi, "۷");
    num = num.replace(/8/gi, "۸");
    num = num.replace(/9/gi, "۹");
    num = num.replace(/0/gi, "۰");
    return num;
}

function toEnglishNum(num) {
    num = num.toString();
    num = num.replace(/۱/gi, "1");
    num = num.replace(/۲/gi, "2");
    num = num.replace(/۳/gi, "3");
    num = num.replace(/۴/gi, "4");
    num = num.replace(/۵/gi, "5");
    num = num.replace(/۶/gi, "6");
    num = num.replace(/۷/gi, "7");
    num = num.replace(/۸/gi, "8");
    num = num.replace(/۹/gi, "9");
    num = num.replace(/۰/gi, "0");
    return num;
}

//a = filesize, b= asshar
function formatBytes(a, b) {
    if (0 == a)return "0‌ byte";
    var c = 1024, d = b || 2,
        e = ["byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
