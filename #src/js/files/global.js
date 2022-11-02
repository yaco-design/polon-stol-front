// header catalog
$('.header-catalog__btn').click(function () {
	$(this).toggleClass('show');
	$('.header-catalog__content').toggleClass('show');
	$('#catalog-overlay').toggleClass('show');
});

$('#catalog-overlay').click(function () {
	$(this).removeClass('show');
	$('.header-catalog__content').removeClass('show');
	$('.header-catalog__btn').removeClass('show');
});


// main-banner
$('#main-page-banner').slick({
	dots: true,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
});

// cards-slider
$('.cards-section .cards-list').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// category-sliders
$('.category-cards-simple .cards-list').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// partners-sliders
$('.partners-slider-body').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
});


// card-slider

$('.card-thumbnail-slider__big').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.card-thumbnail-slider__nav',
	responsive: [
		{
			breakpoint: 575,
			settings: {
				arrows: true,
				vertical: false,
			}
		}
	]
});
$('.card-thumbnail-slider__nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.card-thumbnail-slider__big',
	dots: false,
	centerMode: false,
	focusOnSelect: true,
	vertical: true,
	infinite: false
});


// card-comlekt
$('.card-complekt .cards-list').slick({
	dots: false,
	arrows: true,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


// foto-reviews
$('#foto-reviews-slider').slick({
	dots: false,
	arrows: true,
	infinite: false,
	speed: 500,
	slidesToShow: 8,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		}
	]
});


// listing-box
$('#listing-box-cat-list').slick({
	dots: false,
	arrows: true,
	infinite: false,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}
	]
});


// news-single
$('.news-single-cards .cards-list').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


/**
* Кнопки плюс минус
*/

// Убавляем кол-во по клику
$('.quantity_inner .bt_minus').click(function () {
	let $input = $(this).parent().find('.quantity');
	let count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
});
// Прибавляем кол-во по клику
$('.quantity_inner .bt_plus').click(function () {
	let $input = $(this).parent().find('.quantity');
	let count = parseInt($input.val()) + 1;
	count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
	$input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function () {
	if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, '');
	}
	if (this.value == "") {
		this.value = 1;
	}
	if (this.value > parseInt($(this).data('max-count'))) {
		this.value = parseInt($(this).data('max-count'));
	}
});


// range slider

function getVals() {
	// Get slider values
	let parent = this.parentNode;
	let slides = parent.getElementsByTagName("input");
	let slide1 = parseFloat(slides[0].value);
	let slide2 = parseFloat(slides[1].value);
	// Neither slider will clip the other, so make sure we determine which is larger
	if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

	let displayElement = parent.getElementsByClassName("rangeValues")[0];
	displayElement.innerHTML = "<span>" + slide1 + "</span> - " + "<span>" + slide2 + "</span>";
}

window.onload = function () {
	// Initialize Sliders
	let sliderSections = document.getElementsByClassName("range-slider");
	for (let x = 0; x < sliderSections.length; x++) {
		let sliders = sliderSections[x].getElementsByTagName("input");
		for (let y = 0; y < sliders.length; y++) {
			if (sliders[y].type === "range") {
				sliders[y].oninput = getVals;
				// Manually trigger event first time to display values
				sliders[y].oninput();
			}
		}
	}
}

// filter-items

$(document).on('click', '.listing-box-filters__item .title-btn', function () {
	$(this).closest('.listing-box-filters__item').toggleClass('show')
});


// page-description-box

$(document).on('click', '.page-description-box__btn', function () {
	$(this).closest('.page-description-box').toggleClass('show');
});

// mobile burger

$(document).on('click', '.header-menu-burger', function () {
	$('.header-menu').toggleClass('show');
});

$(document).on('click', '.header-menu .close-btn', function () {
	$('.header-menu').removeClass('show');
});


// header-search

$(document).on('click', '.header-menu-search-toggler', function () {
	$('.header-search').toggleClass('show');
});

$(document).on('click', '.header-search .close-btn', function () {
	$('.header-search').removeClass('show');
});

// listing-filters

$(document).on('click', '.listing-filters-toggle-btn', function () {
	$('.listing-box-filters').toggleClass('show');
});

$(document).on('click', '.listing-box-filters .close-btn', function () {
	$('.listing-box-filters').removeClass('show');
});

$(document).on('click', '.listing-box-cat-all-link', function () {
	$(this).addClass('hidden')
	$('#listing-box-cat-list').slick('unslick');
});

