/*$(window).scroll(function () {


if ($(window).scrollTop() > 50) 
{ 
  $("#navigation").addClass("fixed");
} else {
  $("#navigation").removeClass("fixed");
}
 });
*/

$(function (){
	$(document).scroll(function(){
		var $nav = $("#navigation");
		$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
	});
});

/*
$(window).scroll(function () {
  
  if ($(window).scrollTop() > 1837)
  {
    $("#projectsLink").removeClass("active");
    $("#aboutLink").removeClass("active"); 
    $("#contactLink").addClass("active");
   } else if ($(window).scrollTop() > 250){
    $("#contactLink").removeClass("active");
    $("#aboutLink").removeClass("active"); 
    $("#projectsLink").addClass("active");
   } else {
    $("#aboutLink").addClass("active");
    $("#projectsLink").removeClass("active");
    $("#contactLink").removeClass("active"); 
   }
});
*/