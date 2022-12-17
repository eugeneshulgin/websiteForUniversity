const scrollBtn = document.querySelector('.isShowBtn')
window.onscroll = () => {
	if(window.scrollY > 500){
		scrollBtn.classList.remove('.isShowBtn__hide');
	} else if (window.scrollY < 700){
		scrollBtn.classList.add('.isShowBtn');
	}
}