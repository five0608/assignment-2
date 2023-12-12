$(function(){
    var slideeCount=$(".slide").length;
    var youjinsideslider=0;
    var slidePosition;
    setInterval(function(){
        if(youjinsideslider<slideeCount-1){
            youjinsideslider++;
        }else{
            youjinsideslider=0;
        }
        slidePosition=youjinsideslider*(-1200)+"px";
        $(".youjinslider").animate({ left: slidePosition},400);
    },3000);
})