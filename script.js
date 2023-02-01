//////////////////////////////
// BACK TO TOP

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
// const nav = document.querySelector("nav");

// menu.addEventListener("click", () => {
// 	nav.classList.add("open-nav");
// });

close.addEventListener("click", () => {
	nav.classList.remove("open-nav");
});

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

document.onclick = function (e) {
	if (e.target.id !== "nav" && e.target.id !== "menu") {
		menu.classList.remove("open-nav");
		nav.classList.remove("open-nav");
	}
};

menu.onclick = function () {
	menu.classList.toggle("open-nav");
	nav.classList.toggle("open-nav");
};

document.addEventListener("DOMContentLoaded", function () {
	const selector = "nav a";
	const elems = Array.from(document.querySelectorAll(selector));
	const navigation = document.querySelector("nav");

	function makeActive(evt) {
		const target = evt.target;

		if (!target || !target.matches(selector)) {
			return;
		}

		elems.forEach((elem) => elem.classList.remove("active-link"));

		evt.target.classList.add("active-link");
	}

	navigation.addEventListener("mousedown", makeActive);
});

//MENU-TEST
function openCity(evt, cityName) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the link that opened the tab
	document.getElementById(cityName).style.display = "flex	";
	evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
