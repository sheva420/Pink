var review_1 = document.querySelector(".reviews__item--1");
var review_2 = document.querySelector(".reviews__item--2");
var review_3 = document.querySelector(".reviews__item--3");
var review_button1 = document.querySelector(".reviews__toggle--1");
var review_button2 = document.querySelector(".reviews__toggle--2");
var review_button3 = document.querySelector(".reviews__toggle--3");

review_button1.addEventListener("click", function(evt) {
	evt.preventDefault();
	
	review_1.classList.add("reviews__item--show");
	review_2.classList.remove("reviews__item--show");
	review_3.classList.remove("reviews__item--show");
	
	review_button1.classList.add("slider__toggle--active");
	review_button2.classList.remove("slider__toggle--active");
	review_button3.classList.remove("slider__toggle--active");
});

review_button2.addEventListener("click", function(evt) {
	evt.preventDefault();
	
	review_1.classList.remove("reviews__item--show");
	review_2.classList.add("reviews__item--show");
	review_3.classList.remove("reviews__item--show");
	
	review_button1.classList.remove("slider__toggle--active");
	review_button2.classList.add("slider__toggle--active");
	review_button3.classList.remove("slider__toggle--active");
});

review_button3.addEventListener("click", function(evt) {
	evt.preventDefault();
	
	review_1.classList.remove("reviews__item--show");
	review_2.classList.remove("reviews__item--show");
	review_3.classList.add("reviews__item--show");
	review_button1.classList.remove("slider__toggle--active");
	review_button2.classList.remove("slider__toggle--active");
	review_button3.classList.add("slider__toggle--active");
})