const checkForms = () => {
  const calcBlock = document.getElementById("calc");
  const calcInput = document.getElementById("calc-input");
  const textForms = document.querySelectorAll("form");

  textForms.forEach((elem) => {
    const yourName = elem.querySelector("input[name=fio]");
    const yourPhone = elem.querySelector("input[name=phone]");
    const inputButton = elem.querySelectorAll("input[type=hidden]");

    yourName.addEventListener("input", (e) => {
      e.preventDefault();

      e.target.value = e.target.value.replace(/[^а-яa-z ]/gi, "");
      if (e.target.value.length >= 2) {
        e.target.classList.add("success");
        inputButton.forEach((item) => {
          item.classList.add("success");
        });
      } else {
        e.target.classList.remove("success");
        inputButton.forEach((item) => {
          item.classList.remove("success");
        });
      }
    });

    yourPhone.addEventListener("input", (e) => {
      e.preventDefault();

      yourPhone.maxLength = "16";

      e.target.value = e.target.value.replace(/[^0-9\+]/g, "");

      if (e.target.value.length >= 11) {
        e.target.classList.add("success");
      } else {
        e.target.classList.remove("success");
      }
    });
  });

  if (window.location.toString().indexOf("balkony.html") > 0) {
    calcBlock.addEventListener("input", (e) => {
      e.preventDefault();

      calcInput.type = "text";

      calcInput.value = calcInput.value.replace(/\D+/, "");
    });
  }
};

export default checkForms;