const account = {
    name: "William",
    expenses: [],
    income: [],
  
    addExpense: function (amount, description) {
      this.expenses.push({ amount, description });
    },
  
    addIncome: function (amount, description) {
      this.income.push({ amount, description });
    },
  
    listAllExpenses: function () {
      let expensesList = "";
      for (let i = 0; i < this.expenses.length; i++) {
        expensesList += `Expense ${i + 1}: ${this.expenses[i].description} - $${this.expenses[i].amount}\n`;
      }
      return expensesList;
    },
  
    getSummary: function () {
      let totalExpenses = 0;
      for (let i = 0; i < this.expenses.length; i++) {
        totalExpenses += parseFloat(this.expenses[i].amount);
      }
  
      let totalIncome = 0;
      for (let i = 0; i < this.income.length; i++) {
        totalIncome += parseFloat(this.income[i].amount);
      }
  
      let balance = totalIncome - totalExpenses;
      return `Total Income: $${totalIncome}\nTotal Expenses: $${totalExpenses}\nCurrent Balance: $${balance}`;
    },
  };
  
  function menu() {
    let choice = +prompt("1. Add Expense\n2. Add Income\n3. List Expenses\n4. Get Summary\n5. Exit");
  
    if (choice === 1) {
      let expenseAmount = prompt("Enter the expense amount:");
      let expenseDescription = prompt("Enter the expense description:");
      account.addExpense(expenseAmount, expenseDescription);
    } else if (choice === 2) {
      let incomeAmount = prompt("Enter the income amount:");
      let incomeDescription = prompt("Enter the income description:");
      account.addIncome(incomeAmount, incomeDescription);
    } else if (choice === 3) {
      alert(account.listAllExpenses());
    } else if (choice === 4) {
      alert(account.getSummary());
    } else if (choice === 5) {
      return;
    } else {
      alert("Invalid choice. Please try again.");
    }
  
    menu();
  }
  
  menu();
  
  //I used if/else because thats what I understood the best