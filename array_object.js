console.log("Lets Learn about ARRAY");
console.log("ARRAY is the collection of same type variable");

let fruits=["Banana", "Apple", "Guava"]
console.log(fruits[0]) //Will show the 1st variable 
console.log(fruits.at(-1)) //show the last user
console.log("We can add a new element by using push() function");
fruits.push("Jackfruit");
fruits.push("Watermelon","Grapes"); //we can add one or two at once
console.log("Updated array is given below")
console.log(fruits);
console.log("After deleting the last item")
fruits.pop();//deleted the last item/element
console.log(fruits);
console.log("Lets do the same thing by creating a function to add the item ")
function add(fruitName)
{
    fruits.push(fruitName);

}
add("Blueberries");
console.log(fruits)

///practise 
console.log("Play with differnet array");
let users=["Tanvir","Jawad","Chowdhury"]

function addUsers(newUser)
{
    users.push(newUser);
    console.log("User "+ newUser +" is added")
}
addUsers("SAKIB");
console.log(users);
console.log("New user is " + users.at(-1)); //show the last user 

console.log("Another way to print the full array ")
for (let j=0;j<users.length;j++)
{
    console.log(users[j]);
}


//OBJECT
console.log("Lets Learn about OBject")


let product={

    name:"Board",
    color:"white",
    price:10000,
}

//common way to add new object
product.name="Pencil";
product.color="Black";
product.price=10;

product.name="Watch";
product.color="Blue";
product.price=550;
    console.log(product.name);
    console.log(product.color);
    console.log(product.price);
    
 ////we can add function in an object which is called method 

let product1={

    name:"Wallet",
    color:"Brown",
    price:150,
    ////we can add function in an object which is called method 
    description: function(){console.log("This is a premium export quality waller which is currently one of our top selling product")},
}

product1.description();

