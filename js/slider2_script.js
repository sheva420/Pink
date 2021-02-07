var table = document.querySelector(".prices__table");
var slider_button1 = document.querySelector(".prices__toggle--1");
var slider_button2 = document.querySelector(".prices__toggle--2");
var slider_button3 = document.querySelector(".prices__toggle--3");

slider_button1.addEventListener("click", function(evt) {
	evt.preventDefault();
	table.classList.add("prices__table--start");
	table.classList.remove("prices__table--center");
	table.classList.remove("prices__table--end");
	slider_button1.classList.add("slider__toggle--active");
	slider_button2.classList.remove("slider__toggle--active")
	slider_button3.classList.remove("slider__toggle--active");
});

slider_button2.addEventListener("click", function(evt) {
	evt.preventDefault();
	table.classList.remove("prices__table--start");
	table.classList.add("prices__table--center");
	table.classList.remove("prices__table--end");
	slider_button1.classList.remove("slider__toggle--active");
	slider_button2.classList.add("slider__toggle--active")
	slider_button3.classList.remove("slider__toggle--active");
});

slider_button3.addEventListener("click", function(evt) {
	evt.preventDefault();
	table.classList.remove("prices__table--start");
	table.classList.remove("prices__table--center");
	table.classList.add("prices__table--end");
	slider_button1.classList.remove("slider__toggle--active");
	slider_button2.classList.remove("slider__toggle--active")
	slider_button3.classList.add("slider__toggle--active");
});