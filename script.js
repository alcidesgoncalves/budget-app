const budgetBtn = document.getElementById("btn-calc");
const expenseBtn = document.getElementById("expense-btn");
const budgetValue = document.getElementById("budget-metric");
const budgetInput = document.getElementById("budget-value");
const descInput = document.getElementById("expense-desc");
const amountInput = document.getElementById("expense-amount");

budgetBtn.addEventListener("click", function () {
  budgetValue.innerText = `${"$ " + budgetInput.value}`;
});

expenseBtn.addEventListener("click", function () {
  const expenseList = document.getElementById("expense-list");
  const expenseItem = document.createElement("li");
  expenseItem.className = "item";

  expenseItem.innerHTML = `
    <span>Desc: </span> ${descInput.value} 
    <span>Amount: </span> ${"$" + amountInput.value} 
  `;

  expenseList.appendChild(expenseItem);
});
