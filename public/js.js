angular.module("app").controller("mainCtrl", function($scope) {



$(function () {

$('.right-menu a').click(function(){
 $(this).siblings().removeClass('active');
    $(this).addClass('active');


var tab = $(this).attr('href').replace('#','.');
$('.content>div').removeClass('open');
$(tab).addClass('open');

});


});



});
