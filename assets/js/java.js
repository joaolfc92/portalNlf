$('#banner_1').slick({

	dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight:true,
  autoplay: true,
  autoplaySpeed: 20000


});	



function toggleMenu(){
	var menu = document.getElementById("menu");
	if(menu.style.display == "none"){
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}