function calculate() {
    let number = document.querySelector("#number").value;

    let result = (number) / 2;
    document.querySelector("#result").innerHTML = `Your given number is ${result}`;
}