const calc = () => {
  const calcBlock = document.getElementById("calc");
  const calcInput = document.getElementById("calc-input");
  const calcType = document.getElementById("calc-type");
  const calcMaterial = document.getElementById("calc-type-material");
  const calcTotal = document.getElementById("calc-total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcMaterialValue =
      +calcMaterial.options[calcMaterial.selectedIndex].value;
    const calcInputValue = calcInput.value;

    let calcTotalValue = 0;

    if (calcType.value && calcMaterial.value && calcInput.value) {
      calcTotalValue = calcInputValue * calcTypeValue * calcMaterialValue;
    } else {
      calcTotalValue = 0;
    }

    calcTotal.value = calcTotalValue;
  };

  setInterval(() => {
    if (calcType.selectedIndex === 0 || calcMaterial.selectedIndex === 0) {
      calcInput.disabled = true;
    } else {
      calcInput.disabled = false;
    }
  }, 100);

  calcBlock.addEventListener("input", (e) => {
    if (
      e.target === calcType ||
      e.target === calcMaterial ||
      e.target === calcInput
    ) {
      countCalc();
      if (calcInput.value === "") {
        calcType[0].disabled = false;
        calcMaterial[0].disabled = false;
      } else {
        calcType[0].disabled = true;
        calcMaterial[0].disabled = true;
      }
    }
  });
};

export default calc;
