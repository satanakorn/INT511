interface Account { 
    id: number , 
    type: number ,
    balance: number
}

let accounts: Array<Account> = [
    {id:1 , type: 1, balance: 50},
    {id:2 , type: 2, balance: 100},
    {id:3 , type: 1, balance: 50},
    {id:3 , type: 2, balance: 100},
]

function getTotalBalance(accounts , type) { 
    let totalBalance = 0;
    
    accounts.forEach((account) => {
        if(account.type === type){
            totalBalance += account.balance;
        }
    })
    
    return totalBalance; 
}

let total = getTotalBalance(accounts, 1)

console.log(`Total balance for type 1: ${total}`)