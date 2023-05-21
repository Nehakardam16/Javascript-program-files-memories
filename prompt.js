// let num1=prompt("enter the value");
// let num2=Number.parseInt(num1);
// console.log(num1);
// console.log(typeof(num2));

// let num1=prompt("Enter your age ");
// let num2=Number.parseInt(num1);
// switch(num2){
//     case 12:
//         alert("you are a kid");
//         break;
//     case 15:
//         alert("now you are also kid");
//         break;
//     case 18:
//         alert:("now you are mitture and you can play foolbol");
//         break;
//     default:
//         alert("you enter wrong age");

// }

let Ravi={
    name:"raju",
    fname:"beersingh",
    mname:"roopan",
    wifename:"neha",
    sonname:"ronit",
    bigbroname:"bodda",


};

for(let num1 in Ravi){
    console.log(num1);
    console.log(Ravi[num1]);
    console.log(`key values is ${num1} and values is ${Ravi[num1]}`);
}