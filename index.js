function atm() {
    const message = parseFloat(
        prompt(
        "Select a choice 1.) See balance 2.) Deposit 3.) Withdraw 4.) Get account name 5.) Exit"
    )
 );

switch (message) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
}
}   


const account = {
    accountName: "John Smith",
    balance: 0,

    getBalance: function() {
        console.log(`The current balance is: $${this.balance}`);
    },
    
    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            this.accountError("Deposit amount must be a positive number.");
        } else {
            this.balance += amount;
            console.log(`$${amount} has been deposited. New balance is: $${this.balance}`);
        }
    },
    
    withdrawal: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            this.accountError("Withdrawal amount must be a positive number.");
        } else if (amount > this.balance) {
            this.accountError("Insufficient funds for this withdrawal.");
        } else {
            this.balance -= amount;
            console.log(`$${amount} has been withdrawn. New balance is: $${this.balance}`);
    }
    },
    
    getAccountName: function() {
        console.log(`Account holder name: ${this.accountName}`);
    },

    accountError: function(message) {
        console.log(`Error: ${message}`);
    }
};

// Examples:

account.getAccountName();

account.deposit(100);

account.deposit(20);

account.withdrawal(50);

account.withdrawal(100);

account.getBalance();
