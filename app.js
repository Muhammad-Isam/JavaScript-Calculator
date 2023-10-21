function calculator(num1, num2, op) {

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

document.write(calculator('11', 3, '-'));