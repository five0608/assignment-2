$(function(){
    console.log("load");
    $(".notice ul li:first-child").click(function(){
        $(".modal-wrap").show();
    })
    $(".modal-close").click(function(){
        $(".modal-wrap").hide();
    })
})