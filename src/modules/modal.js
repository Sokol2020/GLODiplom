import { animate } from "./animate";

const modals = () => {
  const modalContent = document.querySelectorAll(".fancybox-skin");
  const headerModal = document.querySelector(".header-modal");
  const serviceModal = document.querySelector(".services-modal");
  const sertModal = document.querySelector(".sert-modal");
  const overlay = document.querySelector(".overlay");
  const callBack = document.querySelector(".button");
  const serviceButtons = document.querySelectorAll(".service-button");
  const allSert = document.querySelectorAll(".sertificate-document");

  let length = allSert.length;
  let docInner;

  try {
    for (let i = 0; i < length; i++) {
      docInner = document.createElement("div");
      docInner.setAttribute("class", "document-inner");
      allSert[i].parentNode.insertBefore(docInner, allSert[i]);
      docInner.append(allSert[i]);
    }

    allSert.forEach((sert) => {
      sert.addEventListener("click", (e) => {
        e.preventDefault();

        sertModal.style.display = "block";
        overlay.style.display = "block";
        animate({
          duration: 300,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            sertModal.style.opacity = progress;
          },
        });
      });
    });

    callBack.addEventListener("click", () => {
      headerModal.style.display = "block";
      overlay.style.display = "block";
      animate({
        duration: 300,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          headerModal.style.opacity = progress;
          overlay.style.opacity = progress;
        },
      });
    });

    serviceButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        serviceModal.style.display = "block";
        overlay.style.display = "block";
        animate({
          duration: 300,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            serviceModal.style.opacity = progress;
          },
        });
      });
    });

    modalContent.forEach((obj) => {
      obj.addEventListener("click", (e) => {
        if (e.target.classList.contains("header-modal__close")) {
          headerModal.style.display = "none";
          overlay.style.display = "none";
        } else if (e.target.classList.contains("services-modal__close")) {
          serviceModal.style.display = "none";
          overlay.style.display = "none";
        } else if (
          e.target.classList.contains("sert-modal__close") ||
          e.target.classList.contains("fancybox-outer")
        ) {
          sertModal.style.display = "none";
          overlay.style.display = "none";
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default modals;
