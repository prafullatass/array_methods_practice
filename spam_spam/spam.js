/*Learning Objective: Practice accessing data within an array of objects

You have been tasked with building a list of email addresses of all of our 
customer's contacts so we can spam them with an email about Miffles the Vampire Weiner Dog.

Create a new project in workspace.
In your JavaScript file, paste the customers array that contains the emails we need to retrieve.
From that array, extract just the customers' contact email addresses and store them 
in a new array. You will need a nested array method - meaning one iteration inside another one - 
since you need to iterate the entire array of customers, and then iterate the array of emails for each one.
*/

const emails = customers.map(cust => cust.contacts.email) 
let new_array = []
emails.forEach(email => {
    new_array = new_array.concat(email)
});
console.log(new_array)

document.getElementById("listOfEmail").innerHTML = "<h2> Emails </h2>"
new_array.forEach(email => {
    document.getElementById("listOfEmail").innerHTML += `<h3>${email}</h3>`
});
