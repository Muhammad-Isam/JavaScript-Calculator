document.write(calculator())

function calculator() {
var num1, num2, op;
    num1 = +prompt("Enter first num: ");
    num2 = +prompt("Enter first num: ");
    op = prompt("Enter operator to perform: ");
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error! Please enter a valid number!");
    }
    else {
        switch (op) {
            case 'x':
                return "The result of "+num1+"x"+num2+" is "+(num1*num2);
            case '*':
                return "The result of "+num1+"*"+num2+" is "+(num1*num2);
            case '+':
                return "The result of "+num1+"+"+num2+" is "+(num1+num2);
            case '-':
                return "The result of "+num1+"-"+num2+" is "+(num1-num2);
            case '/':
                return "The result of "+num1+"/"+num2+" is "+(num1/num2);;
            default:
                return alert("Error! Invalid operator entered!");
        }
    }
}

document.write(calculator());