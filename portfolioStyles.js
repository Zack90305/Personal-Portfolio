$(window).scroll(function () {
  
if ($(window).scrollTop() > 100) 
{ 
  $("#navigation").addClass("fixed");
} else {
  $("#navigation").removeClass("fixed");
}
 });

$(window).scroll(function () {
  
  if ($(window).scrollTop() > 1837)
  {
    $("#portfolioLink").removeClass("active");
    $("#aboutLink").removeClass("active"); 
    $("#contactLink").addClass("active");
   } else if ($(window).scrollTop() > 250){
    $("#contactLink").removeClass("active");
    $("#aboutLink").removeClass("active"); 
    $("#portfolioLink").addClass("active");
   } else {
    $("#aboutLink").addClass("active");
    $("#portfolioLink").removeClass("active");
    $("#contactLink").removeClass("active"); 
   }
});