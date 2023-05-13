var celsiusInput = document.getElementById("celsiusInput");
var fahrenheitInput = document.getElementById("fahrenheitInput");

function convertCelsius() {
  var fahrenheitInputValue = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheitInputValue)) {
    var celsiusOutput = (fahrenheitInputValue - 32) * 5 / 9;
    celsiusInput.value = celsiusOutput.toFixed(2);
  } else {
    celsiusInput.value = "";
  }
}

function convertFahrenheit() {
  var celsiusInputValue = parseFloat(celsiusInput.value);
  if (!isNaN(celsiusInputValue)) {
    var fahrenheitOutput = celsiusInputValue * 9 / 5 + 32;
    fahrenheitInput.value = fahrenheitOutput.toFixed(2);
  } else {
    fahrenheitInput.value = "";
  }
}

