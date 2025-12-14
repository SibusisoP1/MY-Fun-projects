let results = localStorage.getItem("results") || "";
displayCalculations();

function calculate(number) {
  results += number;

  displayCalculations();
  localStorage.setItem("results", results);
}

function displayCalculations() {
  document.querySelector(".display-calculations").innerHTML = results;
}
