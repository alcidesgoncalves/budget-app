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

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn btn-delete";

  expenseItem.className = "item";
  expenseItem.innerHTML = `
    <span>Desc: </span> ${descInput.value} 
    <span>Amount: </span> ${"$" + amountInput.value} 
  `;
  expenseItem.appendChild(editBtn);
  expenseItem.appendChild(deleteBtn);

  expenseList.appendChild(expenseItem);
  descInput.value = "";
  amountInput.value = "";
});
