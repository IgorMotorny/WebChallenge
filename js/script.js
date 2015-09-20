var carusel1 = 0,
    carusel2 = 1,
    carusel3 = 2;
var bg = ["images/carusel1.jpg",
          "images/carusel2.jpg",
          "images/carusel3.jpg"]
function slide(id, slideCheked, side) {
    var slide = "#" + id + " .slide";
    slide += Math.abs(slideCheked) % 3 + 1;
    $(slide).removeClass("active");
    if (side > 0) {
        slideCheked += side;
    } else {
        if (slideCheked === 0) {
            slideCheked = 2;
        } else {
            slideCheked += side;
        }
    }
    slide = "#" + id + " .slide";
    slide += Math.abs(slideCheked) % 3 + 1;
    $(slide).addClass("active");
    var selector = "#"+id;
    $(selector).css("background-image", "url("+bg[slideCheked%3]+")");
    return slideCheked;
}
$(document).ready(function () {
    $(".pointLeft").click(function () {
        var id = $(this).parents('.carusel').attr('id');
        if (id === "carusel1") {
            carusel1 = slide(id, carusel1, -1);
        } else if (id === "carusel2") {
            carusel2 = slide(id, carusel2, -1);
        } else {
            carusel3 = slide(id, carusel3, -1);
        }
    });

    $(".pointRight").click(function () {
        var id = $(this).parents('.carusel').attr('id');
        if (id === "carusel1") {
            carusel1 = slide(id, carusel1, 1);
        } else if (id === "carusel2") {
            carusel2 = slide(id, carusel2, 1);
        } else {
            carusel3 = slide(id, carusel3, 1);
        }
    });
    var initialPoint, finalPoint;
    $(".content").bind("touchstart", function (e) {
        initialPoint = event.changedTouches[0];
    });
    $(".content").bind("touchend", function (e) {
        finalPoint = event.changedTouches[0];
        var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX),
            yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
        if (xAbs > 120 || yAbs > 120) {
            if (xAbs > yAbs) {
                if (finalPoint.pageX < initialPoint.pageX) {
                    /*СВАЙП ВЛЕВО*/
                    var id = $(this).attr("id");
                    if (id === "carusel1") {
                        carusel1 = slide(id, carusel1, -1);
                    } else if (id === "carusel2") {
                        carusel2 = slide(id, carusel2, -1);
                    } else {
                        carusel3 = slide(id, carusel3, -1);
                    }
                } else {
                    /*СВАЙП ВПРАВО*/
                    var id = $(this).attr("id");
                    if (id === "carusel1") {
                        carusel1 = slide(id, carusel1, 1);
                    } else if (id === "carusel2") {
                        carusel2 = slide(id, carusel2, 1);
                    } else {
                        carusel3 = slide(id, carusel3, 1);
                    }
                }
            } else {
                if (finalPoint.pageY < initialPoint.pageY) {
                    /*СВАЙП ВВЕРХ*/
                } else {
                    /*СВАЙП ВНИЗ*/
                }
            }
        }
    });



});