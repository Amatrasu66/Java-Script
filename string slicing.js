//this is a java script code that demonstrates string slicing using the slice method

const fullname = "amatrasu flames";  // in the folling string we can see that that amatrasu is the first name and the flames is the last name 

//so we are going to slice the first name and the last name individully using slice method

let firstname = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") +1);

console.log(firstname);
console.log(lastname);

