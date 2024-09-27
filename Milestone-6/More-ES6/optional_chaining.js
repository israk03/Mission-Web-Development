const company = {
    name: "Judge House Ltd.",
    employee: {
        name: "Shiven Avik",
        position: "Manager",
        contact: {
            email: "shivenavik@gmail.com",
            mobile: "01613785660"

        }
    }
};

// console.log(company.employee.contact.phone) ==> Error

// with optional chaining
console.log(company.employee?.contact?.phone); 
// output: undefined (No error)

console.log(company.employee?.contact?.email);