// SpendWise Budget Tracker
// JavaScript Foundation Assignment


// ========================================
// 1. APPLICATION VARIABLES
// ========================================

let budget = 0;
let expenses = 0;
let remainingBalance = 0;


// ========================================
// 2. BUDGET CALCULATION FUNCTION
// ========================================

function calculateRemainingBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}


// ========================================
// 3. DISPLAY RESULTS FUNCTION
// ========================================

function displayResults(budgetAmount, expenseAmount, balance) {
    document.getElementById("budgetDisplay").textContent =
        "KES " + budgetAmount.toFixed(2);

    document.getElementById("expenseDisplay").textContent =
        "KES " + expenseAmount.toFixed(2);

    document.getElementById("balanceDisplay").textContent =
        "KES " + balance.toFixed(2);
}


// ========================================
// 4. USER INPUT FUNCTION
// ========================================

function getBudgetInformation() {

    let budgetInput = prompt(
        "Enter your total monthly budget in KES:\nExample: 50000"
    );

    if (budgetInput === null) {
        console.log("SpendWise: Input cancelled.");
        return;
    }

    let expenseInput = prompt(
        "Enter your total monthly expenses in KES:\nExample: 32000"
    );

    if (expenseInput === null) {
        console.log("SpendWise: Input cancelled.");
        return;
    }


    // Convert input from text to numbers
    budget = Number(budgetInput);
    expenses = Number(expenseInput);


    // ========================================
    // 5. INPUT VALIDATION
    // ========================================

    if (
        budgetInput.trim() === "" ||
        expenseInput.trim() === "" ||
        isNaN(budget) ||
        isNaN(expenses) ||
        budget < 0 ||
        expenses < 0
    ) {
        alert("Please enter valid positive numbers.");

        console.log(
            "SpendWise: Please enter valid positive numbers."
        );

        return;
    }


    // ========================================
    // 6. CALCULATE REMAINING BALANCE
    // ========================================

    remainingBalance = calculateRemainingBalance(
        budget,
        expenses
    );


    // ========================================
    // 7. DISPLAY RESULTS ON WEBPAGE
    // ========================================

    displayResults(
        budget,
        expenses,
        remainingBalance
    );


    // ========================================
    // 8. DISPLAY RESULTS IN CONSOLE
    // ========================================

    console.log("======================================");
    console.log("       SPENDWISE BUDGET REPORT");
    console.log("======================================");

    console.log(
        "Total Budget: KES " +
        budget.toFixed(2)
    );

    console.log(
        "Total Expenses: KES " +
        expenses.toFixed(2)
    );

    console.log(
        "Remaining Balance: KES " +
        remainingBalance.toFixed(2)
    );


    // ========================================
    // 9. BUDGET STATUS
    // ========================================

    if (remainingBalance > 0) {

        console.log(
            "Status: You are within your budget."
        );

        console.log(
            "You have KES " +
            remainingBalance.toFixed(2) +
            " remaining."
        );

    } else if (remainingBalance === 0) {

        console.log(
            "Status: You have used your entire budget."
        );

        console.log(
            "Remaining Balance: KES 0.00"
        );

    } else {

        console.log(
            "Status: You have exceeded your budget."
        );

        console.log(
            "Amount Over Budget: KES " +
            Math.abs(remainingBalance).toFixed(2)
        );
    }

    console.log("======================================");
}


// ========================================
// 10. CONNECT BUTTON TO JAVASCRIPT
// ========================================

document
    .getElementById("budgetButton")
    .addEventListener("click", getBudgetInformation);


// ========================================
// 11. BUDGET EXAMPLES
// ========================================

console.log(" ");
console.log("======================================");
console.log("       SPENDWISE BUDGET EXAMPLES");
console.log("======================================");


// ----------------------------------------
// Example 1: Student Monthly Budget
// ----------------------------------------

let studentBudget = 30000;
let studentExpenses = 22500;

let studentBalance = calculateRemainingBalance(
    studentBudget,
    studentExpenses
);

console.log("Example 1: Student Monthly Budget");
console.log("Budget: KES " + studentBudget.toFixed(2));
console.log("Expenses: KES " + studentExpenses.toFixed(2));
console.log(
    "Remaining: KES " +
    studentBalance.toFixed(2)
);


// ----------------------------------------
// Example 2: Family Monthly Budget
// ----------------------------------------

let familyBudget = 80000;
let familyExpenses = 65000;

let familyBalance = calculateRemainingBalance(
    familyBudget,
    familyExpenses
);

console.log(" ");
console.log("Example 2: Family Monthly Budget");
console.log("Budget: KES " + familyBudget.toFixed(2));
console.log("Expenses: KES " + familyExpenses.toFixed(2));
console.log(
    "Remaining: KES " +
    familyBalance.toFixed(2)
);


// ----------------------------------------
// Example 3: Personal Monthly Budget
// ----------------------------------------

let personalBudget = 50000;
let personalExpenses = 32000;

let personalBalance = calculateRemainingBalance(
    personalBudget,
    personalExpenses
);

console.log(" ");
console.log("Example 3: Personal Monthly Budget");
console.log("Budget: KES " + personalBudget.toFixed(2));
console.log("Expenses: KES " + personalExpenses.toFixed(2));
console.log(
    "Remaining: KES " +
    personalBalance.toFixed(2)
);


// ----------------------------------------
// Example 4: Small Business Budget
// ----------------------------------------

let businessBudget = 150000;
let businessExpenses = 120000;

let businessBalance = calculateRemainingBalance(
    businessBudget,
    businessExpenses
);

console.log(" ");
console.log("Example 4: Small Business Budget");
console.log("Budget: KES " + businessBudget.toFixed(2));
console.log("Expenses: KES " + businessExpenses.toFixed(2));
console.log(
    "Remaining: KES " +
    businessBalance.toFixed(2)
);


// ----------------------------------------
// Example 5: Budget Used Completely
// ----------------------------------------

let completeBudget = 40000;
let completeExpenses = 40000;

let completeBalance = calculateRemainingBalance(
    completeBudget,
    completeExpenses
);

console.log(" ");
console.log("Example 5: Budget Used Completely");
console.log("Budget: KES " + completeBudget.toFixed(2));
console.log("Expenses: KES " + completeExpenses.toFixed(2));
console.log(
    "Remaining: KES " +
    completeBalance.toFixed(2)
);


// ----------------------------------------
// Example 6: Budget Exceeded
// ----------------------------------------

let exceededBudget = 25000;
let exceededExpenses = 30000;

let exceededBalance = calculateRemainingBalance(
    exceededBudget,
    exceededExpenses
);

console.log(" ");
console.log("Example 6: Budget Exceeded");
console.log("Budget: KES " + exceededBudget.toFixed(2));
console.log("Expenses: KES " + exceededExpenses.toFixed(2));
console.log(
    "Remaining: KES " +
    exceededBalance.toFixed(2)
);

console.log(
    "Amount Over Budget: KES " +
    Math.abs(exceededBalance).toFixed(2)
);


// ========================================
// 12. CALCULATION SUMMARY
// ========================================

console.log(" ");
console.log("======================================");
console.log("       CALCULATION SUMMARY");
console.log("======================================");

console.log(
    "Example 1: 30,000 - 22,500 = 7,500"
);

console.log(
    "Example 2: 80,000 - 65,000 = 15,000"
);

console.log(
    "Example 3: 50,000 - 32,000 = 18,000"
);

console.log(
    "Example 4: 150,000 - 120,000 = 30,000"
);

console.log(
    "Example 5: 40,000 - 40,000 = 0"
);

console.log(
    "Example 6: 25,000 - 30,000 = -5,000"
);

console.log("======================================");