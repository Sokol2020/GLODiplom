import { animate } from "./animate";

const slider = ({
  sliderBlockId,
  slidesClass,
  slideActiveClass,
  slideArrowLeft,
  slideArrowRight,
}) => {
  const sliderBlock = document.getElementById(`${sliderBlockId}`);
  const slides = document.querySelectorAll(`.${slidesClass}`);

  let currentSlide = 0;
  let documentSize = true;

  const sliderSizing = () => {
      if (document.documentElement.clientWidth < 576) {
        slides[0].classList.add(`${slideActiveClass}`);
        documentSize = false;
      } 
      else if (document.documentElement.clientWidth >= 576) {
        if (slides.length >= 6) {
          slides[0].classList.add(`${slideActiveClass}`);
          slides[1].classList.add(`${slideActiveClass}`);
          slides[2].classList.add(`${slideActiveClass}`);
          documentSize = true;
        } else if (slides.length < 6) {
          slides[0].classList.add(`${slideActiveClass}`);
          slides[1].classList.add(`${slideActiveClass}`);
          documentSize = true;
        }
      }   
  };

  sliderSizing();
  window.addEventListener('resize', function(event) {
    for(let i = 0; i < slides.length; i++) {
      slides[i].classList.remove(`${slideActiveClass}`);
    }
    sliderSizing();
  }, true);

  const nextSlide = (elems, index, strClass) => {
    if (documentSize) {
      slides.forEach((elem) => {
        if (elem.classList.contains(`${slideActiveClass}`)) {
          elem.classList.remove(`${slideActiveClass}`);
        } else {
          elem.classList.add(`${slideActiveClass}`);
        }
      });
    } else {
      elems[index].classList.add(strClass);
    }
  };

  const prevSlide = (elems, index, strClass) => {
    if (documentSize) {
      slides.forEach((elem) => {
        if (elem.classList.contains(`${slideActiveClass}`)) {
          elem.classList.remove(`${slideActiveClass}`);
        } else {
          elem.classList.add(`${slideActiveClass}`);
        }
      });
    } else {
      elems[index].classList.remove(strClass);
    }
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    prevSlide(slides, currentSlide, `${slideActiveClass}`);

    if (e.target.closest(`.${slideArrowRight}`)) {
      if (documentSize) {
        nextSlide();
      }
      currentSlide++;
    } else if (e.target.closest(`.${slideArrowLeft}`)) {
      if (documentSize) {
        prevSlide();
      }
      currentSlide--;
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, `${slideActiveClass}`);

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        slides.forEach((item) => {
          if (e.target.closest(`.${slideArrowRight}`) || e.target.closest(`.${slideArrowLeft}`)) {
            item.style.opacity = progress;
            slides[0].style.right = 100 - 100 * progress + "%";
            slides[1].style.left = 100 - 100 * progress + "%";
            slides[2].style.right = 100 - 100 * progress + "%";
            slides[3].style.left = 100 - 100 * progress + "%";
          }
        });
      },
    });
  });
};
export default slider;