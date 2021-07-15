import $ from 'jquery';

$(function() {
    var expandedState = false;

    if(expandedState == false){
        $("#project3").addClass("expanded");
        expandedState = true;
    }
    else{
        $("#project3").removeClass("expanded");
        expandedState = false;
    }

    $(".project-bg").hover(
        function(){

            $("#project3").removeClass("expanded");
            $(this).addClass("expanded");
        },
        function(){
            $(this).removeClass("expanded");
            $("#project3").addClass("expanded");
        }
    );
});