
var btnText1=$("#talent__myBtn-1");
btnText1.on('click', function(){
		talentFunction(btnText1,1)}
	);


var btnText2=$("#talent__myBtn-2");
btnText2.on('click', function(){
		talentFunction(btnText2,2)}
	);


var btnText3=$("#talent__myBtn-3");
btnText3.on('click', function(){
		talentFunction(btnText3,3)}
	);

var btnText4=$("#talent__myBtn-4");
btnText4.on('click', function(){
		talentFunction(btnText4,4)}
	);


function talentFunction(btnText,num) 
{
  var dots = $("#talent__dots-"+num);
  var moreText = $("#talent__more-"+num);


  if (dots.css("display")==="none") 
  {
    dots.css("display" , "inline");
    btnText.html("<span>Explore more</span>"); 
    moreText.css("display", "none");
  } 
  else
  {
  	dots.css("display" ,"none");
    btnText.html ("<span>Explore less</span>"); 
    moreText.css("display", "inline");
  }
}
