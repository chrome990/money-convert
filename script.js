const selectElement = document.getElementById("mtype");
const submitBtn = document.getElementById("submitBtn");
var resultElement = document.getElementById("result");

submitBtn.addEventListener("click", () => {
  const selectedOption = selectElement.value;

  const tnd = document.getElementById('tnd').value;
  const euro = document.getElementById('euro').value;
  const usd = document.getElementById('usd').value;

  if (selectedOption === usd) {
    let utnd = tnd / 3.08;
    result.textContent = " " + utnd.toFixed(2) + "$"
  } else if (selectedOption === euro) {
    let etnd = tnd / 3.40;
    result.textContent = etnd.toFixed(2) + "£"
  }
});
