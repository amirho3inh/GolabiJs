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
