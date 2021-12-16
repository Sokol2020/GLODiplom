import timer from './modules/timer'
import smoothScroll from './modules/smoothScroll'
import modal from './modules/modal'
import calc from './modules/calc'


timer(`23 december 2021`)
smoothScroll()
modal()
checkForms()

if (window.location.toString().indexOf("balkony.html") > 0) {
  calc();
}

