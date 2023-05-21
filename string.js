//methods of string
// const firstname ="    nehakardam";
// const lastname ="kumari";
// console.log(firstname.length);

// console.log(firstname.toUpperCase());

// console.log(firstname.toLowerCase());
// console.log(firstname.trim());
// console.log(firstname[10]);
// const fullname=firstname+lastname;
// console.log(fullname);

let obj=["neha","kumari","payal","rani","ravi","raju","ronit"];

for(let names in obj){
    console.log(obj[names]);
}

console.log(obj.includes("rani",3));
console.log(obj);

obj.push("raman");
console.log(obj);

obj.pop();
console.log(obj);
obj.pop();
console.log(obj);

console.log(obj.sort());
console.log(obj.reverse());
console.log(obj.shift());
console.log(obj);

obj.unshift("deepak","drishti");
console.log(obj);