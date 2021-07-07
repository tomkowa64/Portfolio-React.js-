import $ from 'jquery';

$(function() {
    $('#project1').trigger("hover");
    $('.project-group').find(">:first-child").trigger("hover");
});