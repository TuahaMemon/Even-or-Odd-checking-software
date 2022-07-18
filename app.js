function calculate() {


    // Answer will be displayed on screen

    let number = +document.querySelector("#number").value;


    if (number % 2 == 0) {

        document.querySelector("#result").innerHTML =
            `Your given number is ${number}, and it is Even`
    }
    else {
        document.querySelector("#result").innerHTML =
            `Your given number is ${number}, and it is Odd`

    }




    // Answer will be displayed on console

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
}