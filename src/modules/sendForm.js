const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const button = form.querySelector("button");
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с Вами свяжется";




  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (!input.classList.contains("success")) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    statusBlock.style.color = "black";
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (window.location.toString().indexOf("balkony.html") > 0) {
      someElem.forEach((elem) => {
        const element = document.getElementById(elem.id);

        if (elem.type === "block") {
          formBody[elem.id] = element.textContent;
        } else if (elem.type === "input") {
          formBody[elem.id] = element.value;
        }
      });
    }

    if (validate(formElements)) {
      sendData(formBody)
        .then(() => {
          statusBlock.textContent = successText;
          statusBlock.style.color = "black";
          form.querySelector("input").classList.remove("success");
          setTimeout(() => {
            document.querySelector(".overlay").style.display = "none";
            document.querySelector(".header-modal").style.display = "none";
            document.querySelector(".services-modal").style.display = "none";
          }, 2000);

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          statusBlock.style.color = "red";
        });
    } else {
      statusBlock.textContent = errorText;
      statusBlock.style.color = "red";
      alert(
        "Заполните все поля и проверьте правильность введенных данных"
      );
    }
  };

  try {
    if (!form) {
      throw new Error("Форма была изменена или отсутствует!");
    }

    button.addEventListener("click", (e) => {
      e.preventDefault();

      if (statusBlock.style.display !== "none") {
        setTimeout(() => {
          statusBlock.style.display = "none";
        }, 5000);
      } else {
        statusBlock.style.display = "block";
        setTimeout(() => {
          statusBlock.style.display = "none";
        }, 5000);
      }

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
