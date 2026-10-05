let num1=5;
num1=10 //let type variable can be replace and reasign
console.log("Update num1 value is = "+ num1);
const num2="Its Constant(will not change with other value";
// num2="its changed"; if we want to replace num2 with another value it will throw an error 
console.log(num2)
console.log("Now lets introduce with the access of let/const within a code block")
console.log("Lets learn it with a function")
function add()
{
    let number1=9;
    return number1;

}
console.log("We can get the value of number1 variable by calling  the add() function "+add());
///console.log(number1) its not accessible from outside the function 
console.log("But we cannot write console.log(number1) Cause number1 is declared into the function codeblock which is not accissible from outside");
//Arithmatic operators
console.log("Lets learn about arithmatic operator")
let a=25;
let b=10;
let sum=a+b;
let sub=a-b;
let div=a/b;
let mul=a*b;
let rem=a%b; ///Performs division and returns the remainder.
console.log("Value of a = " + a );
console.log("Value of b = " + b );
console.log("Sum is = " + sum );
console.log("Subtraction is = " + sub );
console.log("Division is = " + div );
console.log("Multiplication is = " + mul );
console.log("Mod is  = " + rem );
let increaseA=++a;
console.log(`Increased value of a =  ${increaseA}`); // pre-increament Increases the value of the variable by one.
let decreasedA=--a;
console.log(`Decrease value of a =  ${decreasedA}`) ///pre-increament Decreases the value of the variable by one.
let pow=b**2;
console.log(`b(5) to the power 2 is = ${pow}`);
//Comparison or Relational Operators
let les=a<b;
    console.log(les); //since a is greater then b so it will give false output
    let great=a>b;
        console.log(great); //since a is greater then b so it will give true output
let greateql=a>=b; //grate
    console.log(greateql); //since a is greater then  b so it will give true output
let lesseql=a<=b; //less than or equal 
    console.log(lesseql); //since a is greater then  b so it will give false output
let notequal=a!=b; //not equal operator
    console.log(greateql); //since a is not equal to b  so it will give true output
let equalequal=a==b; //Equal Equal Operator
    console.log(equalequal); //since a is not equal to b  so it will give false output
let arr1=[1,2,3];
let arr2=[1,2,3];
let arr3=arr1;
let threeequal= arr1===arr2;
let threeequal1= arr1===arr3; //strictly equal operator
console.log(`Array 1 and Array 2 ${threeequal}`)// === strictly equal - it matches from memory level so the result is false cause arr1 and arr2 share two different memory address
console.log(`Array 1 and Array 3 ${threeequal1}`)
///LOGICAL OPERATORS
if (a>=5 && b>=5 ) //logical and operator (both condition should be satisfy)
{
    console.log("Value a and b Both are greater than 5");
}

if (a>=15 || b>=15 ) //logical or operator
{
    console.log("Between Value a and b one of them is greater than 15");
}
////Bitwise Operators: Bitwise AND(&) Bitwise OR(|) Bitwise XOR(^) Left shift(<<) Right shift(>>) Zero-fill right shift
