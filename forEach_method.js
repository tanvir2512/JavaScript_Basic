///another way to print each item of an array
let users=["John", "Kavin", "Carter", "Mark"]
users.forEach(printName) ///foreach function will print all items of an array

function printName(Name)
{
    console.log("My name is "+Name)

}

///short syntax to execute the Same thing 


console.log("Another way to do the same thing");

users.forEach((nam)=>{
    console.log("I am " + nam)
})


//putting a simple condition under forEach method

let ject=["Light","Laser","Mobile phone"];
console.log("A new array is");
ject.forEach((item)=>{
    console.log(item)
})
console.log("putting a simple condition under forEach method")
ject.forEach((item)=>{
    
            if(item[0]=="L")
            {
                    console.log(item);
            }
    
    
})

ject.forEach((list,index)=>{
    console.log(`${index}: ${list}`);
})
