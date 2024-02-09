

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000,
	speedAsDuration: true
});

var navBar = document.getElementById("navBar");

function togglebtn(){
    navBar.classList.toggle("hidemeun");
}
