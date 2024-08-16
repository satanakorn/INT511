var accounts = [
    { id: 1, type: 1, balance: 50 },
    { id: 2, type: 2, balance: 100 },
    { id: 3, type: 1, balance: 50 },
    { id: 3, type: 2, balance: 100 },
];
function getTotalBalance(accounts, type) {
    var totalBalance = 0;
    accounts.forEach(function (account) {
        if (account.type === type) {
            totalBalance += account.balance;
        }
    });
    return totalBalance;
}
var total = getTotalBalance(accounts, 1);
console.log("Total balance for type 1: ".concat(total));
