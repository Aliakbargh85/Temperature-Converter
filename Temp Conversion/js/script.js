let $ = document;

const firstValue = $.querySelector(".C");
const secondValue = $.querySelector(".F");
const converter = $.getElementById("converter");
const result = $.querySelector(".result");

const convertButton = $.querySelector(".convertButton");
const resetButton = $.querySelector(".resetButton");
const changeButton = $.querySelector(".changeButton");

function convert() {
  // console.log(converter.value);

  if (isNaN(converter.value)) {
    alert("لطفا عدد وارد کنید");
    result.innerHTML = ""; // پاک کردن نتیجه قبلی
    converter.value = ""; // پاک کردن ورودی
    return; // جلو ادامه تابع رو بگیر
  }

  if (converter.value === "") {
    result.innerHTML = "insert correct value";
    result.style.color = "#993300";
  } else {
    if (firstValue.innerHTML === "°C") {
      // C  to F
      let resultValue = converter.value * 1.8 + 32;
      result.style.color = "rgb(255, 255, 102)";
      result.innerHTML =
        converter.value + "°C To " + Math.floor(resultValue) + "°F";
    } else {
      // F to C
      let resultValue2 = ((converter.value - 32) * 5) / 9;
      result.style.color = "rgb(255, 255, 102)";
      result.innerHTML =
        converter.value + "°F To " + Math.floor(resultValue2) + "°C";
    }
  }
}

function reset() {
  // console.log('Reset')

  result.innerHTML = "";

  converter.value = "";
}

function swap() {
  // console.log('Change')

  if (firstValue.innerHTML === "°C") {
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    converter.setAttribute("placeholder", "°F");
    document.title = "SalzLearn| Js | °F to °C";
  } else {
    firstValue.innerHTML = "°C";
    secondValue.innerHTML = "°F";
    converter.setAttribute("placeholder", "°C");
    document.title = "SalzLearn| Js | °C to °F";
  }
}

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", swap);
