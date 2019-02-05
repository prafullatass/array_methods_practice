//report for him that list only the companies that have placed an order 
//for more than nine thousand dollars."

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => business.orders
        .find(order => order >= 9000))

console.log(bigSpenders)