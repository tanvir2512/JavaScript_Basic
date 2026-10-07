



function greetUser(user){ //passing string parameter
    console.log("Assalamu Alaikum " + user)
}

greetUser('Tanvir');

console.log("Testing without parameter")
function sum(){ //without passing parameter 
    let a,b,sum;
    a=5;
    b=7;
    sum=a+b;
    return sum;
}
 
let fun=sum();
console.log(fun);

console.log("Testing Multiple parameter")
function addNummber(num1,num2){ //passing multiple parameter
    return num1+num2;

}

let result=addNummber(9,8)
console.log(result);
console.log("Lets Try Another one");
function multply(){
    let one=5;
    let two=8;
    let res=one*two;
    return res; 
}
let multiplyResult=multply();

console.log(multiplyResult);

//////////////////////////////////////////
console.log("Lets see the while loop")
let i=0;
let n=9
while(i<n)
{
    console.log("Tanvir");
    i++;
}

for(let i=0;i<=10;i++)
{
    console.log(i);

}

