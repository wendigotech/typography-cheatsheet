(function(){
const setbanner = (msg, x, y) => {
	let banner = document.querySelector('#banner');
	banner.querySelector('span').innerText = msg;
	let textwidth = banner.querySelector('span').offsetWidth;
	if (x + textwidth > screen.width) { x = (screen.width - textwidth) - 50;}
	banner.style.top = y + "px";
	banner.style.left = x + "px";
}
const seteventhandlers = () => {
	let elements = document.querySelector('#elements');
	elements.addEventListener('click', handleselect);
}
const init = () => {
	seteventhandlers();
}
init();
})();
