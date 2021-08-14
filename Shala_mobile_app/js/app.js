//Preloader
$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
});
//Navbar Shrink
$(window).on("scroll",function(){
    let x = $(this).scrollTop();
    if(x > 30){
        $(".navbar").addClass("navbar-shrink");
    }else{
        $(".navbar").removeClass("navbar-shrink");
    }
});
// vediopop up
let videosrc = $("#player_1").attr("src");
$(".vedio-play-btn, .vedio-popup-close").on("click",function(){
    if($(".vedio-popup").hasClass("open")){
        $(".vedio-popup").removeClass("open");
        $("#player_1").attr("src","");
    }else{
        $(".vedio-popup").addClass("open");
        if($("#player_1").attr("src")==""){
        $("#player_1").attr("src",videosrc);
        }
    }
});
// Feature Carousel
$('.feature-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
// App-Screenshot Carousel
$('.screenshot-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
});
//Testinomial Carousel
$('.testinomial-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
//Testinomial Carousel
$('.team-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});
//Page Scrolling
    $.scrollIt({
        topOffset: -50, 
    });
//Navbar Toggler
$(".navbar-toggler").on("click",function(){
    let x = $(".navbar-icon").hasClass("fa-bars");
    if(x){
        $(".navbar-icon").removeClass("fa-bars");
        $(".navbar-icon").addClass("fa-chevron-down");
    }else{
        $(".navbar-icon").removeClass("fa-chevron-down");
        $(".navbar-icon").addClass("fa-bars");
    }
});
//Navbar Collapse
$(".nav-link").on("click",function(){
    $(".navbar-collapse").collapse("hide");
});
//Toggler Theme Light and Dark Mode
function togglerTheme(){
    if(localStorage.getItem("shala-theme") !== null){
        if(localStorage.getItem("shala-theme") === "dark"){
            $("body").addClass("dark");
        }else{
            $("body").removeClass("dark");
        }
    }
    updateIcon()
};
$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark");
    if($("body").hasClass("dark")){
        localStorage.setItem("shala-theme","dark")
    }else{
        localStorage.setItem("shala-theme","light")
    };
    updateIcon();
});
function updateIcon(){
    if($("body").hasClass("dark")){
        $(".toggle-theme i").removeClass("fa-moon").addClass("fa-sun")
    }else{
        $(".toggle-theme i").removeClass("fa-sun").addClass("fa-moon")
    }
};
togglerTheme();

// counter_up
$('.counter').counterUp({
    time: 1500,
});