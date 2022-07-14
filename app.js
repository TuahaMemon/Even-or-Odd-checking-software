function calculate() {
    let number = document.querySelector("#number").value;

    let result = (number) % 2;
    document.querySelector("#result").innerHTML = `Your answer is ${result}`;
}



// if(number % 2 == 0){
    
//     document.querySelector("#result").innerHTML = `Your given number is Even ${result}`;
// }
// else{
    
//     document.querySelector("#result").innerHTML = `Your given number is Odd ${result}`;
// }




// program to check if the number is even or odd
// take input from the user
// const number = prompt("Enter a number: ");

// //check if the number is even
// if(number / 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }