let num1=4;
let num2=4;
function sum(n,m)
{
    return n+m;
};
// mostily use syntex for create any funtion is this 
let sumOfAll2=(num1,num2)=>{
 return num1+num2;
}
function multiplication(num,num2)
{
    return num*num2;

};

function sumOfAll()//multipale arguments addition
{
    let sum=0;
    console.log(arguments);
    for(let i=0;i<arguments.length;i++)// arguments is a predefine object when we dont provied multiple argument then this object is atomatically call;
    {
        sum=sum+arguments[i];

    }

    return sum;
}
// object datatype creted here; object is a combination of key and value
let userDetails={

  //key      : value  
    FirstName:"Sneha",
    LastName:"Kardam",
    Role:"Student",
    LoginId:25
};

for(let obj in userDetails)// for in loop use in  only acess object keys and values 
{
    console.log(obj);// in this we are acces keys
    console.log(userDetails[obj]);// in this section we are access values;
    console.log(`The key is ${obj} and the value is ${userDetails[obj]}`);// we are use in this setion interpoletion for muliple values print;

}

 let sum1=sumOfAll2(4,8);
 console.log(sum1);