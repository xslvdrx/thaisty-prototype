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
