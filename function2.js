//how to excute code in javascript 

// const userOne=()=>{
//     console.log("user one");
// }

// const userTwo=()=>{
//     console.log("user two");
// }

// const userThree=()=>{
//     console.log("user three");
// }

// userOne();
// userTwo();
// userThree();
//output
//userone
//user two
//user three

//when we use settimeout function see how the result

const userOne=()=>{
    console.log("user one");
};

const userTwo=()=>{
    setTimeout(()=>{
    console.log("user two")},3000);
};

const userThree=()=>{
    console.log("user three");
};

userOne();
userTwo(); // this function take some time in excution
userThree();

//output is
//user one
//user three
//user two // see different first result and second result . this differense only excution of the program bcz by default javascript use
//sikcroness excution. in this form if any fuction take some time in excution then compiler go to the next function and excute it and then after it 
// when skip function is ready to excute then compiler go it  and excute.


// if you want do not use bydefault javascrift excution then we use asikcroness type of excution
// in asikcroness type till then first function not excute in proper then compiler dont go next function