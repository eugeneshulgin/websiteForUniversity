const goTopBtn = document.querySelector('.goTop');

goTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll(){
	if(window.scrollY > 300){
		goTopBtn.classList.add('goTop__show');
	} else if (window.scrollY < 300){
		goTopBtn.classList.remove('goTop__show');
	}
}
function goTop (){
	if(window.pageYOffset > 0){
		window.scrollBy(0, -75);
		setTimeout(goTop, 0)
	}
}