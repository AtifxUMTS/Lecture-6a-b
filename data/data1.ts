export let a: string = "I am A from data1.ts file";
let b: string = "I am B from data1.ts file";

let c: string = "I am C form data2.ts file"; 


function sum(c:number, d:number) {
    return console.log(c + d);
}

const data1 = {
    "name": "Atif Ali",
    "age": "23",
    "isStudent": false,
"address": {
    "street": "123 Main st", 
    "city": "Kashmore",
    "Country": "Pakistan"
},
"favoriteFruits": ["Apple", "Orange", "Bannana"],
"Contact": {
    "email": "alishahatif77@gmail.com",
    "phon": "03013393810"
} 
}
export default b
export {b, c, sum}