import timer from './modules/timer'
import smoothScroll from './modules/smoothScroll'
import modal from './modules/modal'
import calc from './modules/calc'
import checkForms from './modules/checkForms'
import slider from './modules/slider'

timer(`23 december 2021`);
smoothScroll();
modal();

if (window.location.toString().indexOf("balkony.html") > 0) {
  calc();
}
checkForms();

slider({
  sliderBlockId: "benefits",
  slidesClass: "benefits__item",
  slideActiveClass: "benefits__item-active",
  slideArrowLeft: "benefits__arrow--left",
  slideArrowRight: "benefits__arrow--right",
});
slider({
  sliderBlockId: "services",
  slidesClass: "service-block",
  slideActiveClass: "service-block-active",
  slideArrowLeft: "services__arrow--left",
  slideArrowRight: "services__arrow--right",
});