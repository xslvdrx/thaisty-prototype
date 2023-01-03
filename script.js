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
