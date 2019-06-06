var favCount = 0;
$(".add-to-fav").click(function(){
    if($(this).hasClass("fabed")){
        $(this).removeClass("fabed");
        favCount = parseInt($(this).next(".fav-count").html());
        $(this).next(".fav-count").html(favCount-1);
    }else{
        $(this).addClass("fabed");
        favCount = parseInt($(this).next(".fav-count").html());        
        $(this).next(".fav-count").html(favCount+1);
    }
});
var eventoveClick = false;
$(".event-move").click(function(){
    if(eventoveClick === false){
        $("body").addClass("overflow-hidden");
        $(".event-wrapper").animate({
            "left": "-40px"
        });
        eventoveClick = true;
    }else{
        $("body").removeClass("overflow-hidden");
        $(".event-wrapper").animate({
            "left": "-100vw"
        });
        eventoveClick = false;
    }
})
$(window).resize(function(){
    var winWidth = $(window).width();
    if(winWidth > 991) {
        $(".event-wrapper").css("left","0");
    }else{
        if(eventoveClick == false){
           $(".event-wrapper").css("left","-100vw"); 
        }else{
            $(".event-wrapper").css("left","-40px"); 
            eventoveClick = true;
        }
        
    }
});
$(".more-action").click(function(){
    $(".more-dp").toggle();
});