import $ from 'jquery';

$(function() {
    var expandedState = false;

    if(expandedState == false){
        $("#project3").addClass("expanded");

    }
    else{
        $("#project3").removeClass("expanded");

    }

    $(".project-bg").hover(
        function(){
            expandedState = true;
            $("#project3").removeClass("expanded");
            $(this).addClass("expanded");
        },
        function(){
            expandedState = false;
            $("#project3").addClass("expanded");
            $(this).removeClass("expanded");
        }
    );
});