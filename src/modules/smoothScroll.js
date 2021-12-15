import { animate } from "./animate";

const smoothScroll = () => {
  const btnToTop = document.querySelector(".smooth-scroll");

  try {
    if (!btnToTop) {
      throw new Error("Отсутствует кнопка возврата наверх!");
    }

    const showBtn = () => (btnToTop.style.display = "block");
    const hideBtn = () => (btnToTop.style.display = "none");

    document.addEventListener("scroll", () => {
      if (window.scrollY < 300) {
        hideBtn();
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            btnToTop.style.opacity = progress;
          },
        });
      } else {
        showBtn();
      }
    });

    btnToTop.addEventListener("click", (e) => {
      e.preventDefault();

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default smoothScroll;
