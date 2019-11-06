// let message = "Hello!";
//alert(message);
//message = "World!";
//alert(message);

// const year = 2019;
// const nextYear=year + 1;

// const age =  parseInt(prompt("How old are you?"));
// const nextAge = age + 1;
// alert("You will be " + nextAge + " y.o in " + nextYear + "!");

// if (age<18){
//     alert("You are not adult!");
// } else {
//     alert("You are adult!");
// }

const userAge = parseInt(prompt("Your age:"));
alert("In next year you will be: " + addOne(userAge)+ "!");

function addOne (num){
    const result = num + 1;
    return result;
}
