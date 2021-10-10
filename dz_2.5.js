'use strict';
/*5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
let c = prompt("Введите одну из операций: +, -, /, * ")

function mathOperation(arg1, arg2, operation) {
    let result = null;
    switch (operation) {
        case "+":
            result = arg1 + arg2;
            return result;
        case "-":
            result = arg1 - arg2;
            return result;
        case "/":
            result = arg1 / arg2;
            return result;
        case "*":
            result = arg1 * arg2;
            return result;
    }

}

alert(mathOperation(a, b, c));