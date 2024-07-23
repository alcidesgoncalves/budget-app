const btnCalc = document.getElementById("btn-calc");
const budgetValue = document.getElementById("budget-value");
const budgetMetric = document.getElementById("budget-metric");

btnCalc.addEventListener("click", function () {
  budgetMetric.innerText = `${"$ " + budgetValue.value}`;
});
