function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function division(number1, number2){
  return number1 / number2;
}
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

//window.alert("The addition of your numbers equals " + add(number1, number2) + "\n" + "The subtraction of your numbers equals "  + subtract(number1, number2) + "\n" + "The multiplying of your numbers equals " + multiply(number1, number2) + "\n" + "The division of your numbers equals " + division(number1, number2) + ".");
//window.alert("The subtraction of your numbers equals " + subtract(number1, number2));
//window.alert("The multiplying of your numbers equals " + multiply(number1, number2));
//window.alert("The division of your numbers equals " + division(number1, number2));
window.alert(number1.toString() + " + " + number2.toString() + " = " + add(number1, number2) + "\n" + number1.toString() + " - " + number2.toString() + " = " + subtract(number1, number2) + "\n" + number1.toString() + " * " + number2.toString() + " = " + multiply(number1, number2) + "\n" + number1.toString() + " / " + number2.toString() + " = " + division(number1, number2));
