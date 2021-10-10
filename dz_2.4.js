'use strict';
/*4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/
let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));

function sum(num1, num2) {
    return "Сумма равна: " + (a + b);
}

function sub(num1, num2) {
    return "Разность равна: " + (a - b);
}

function div(num1, num2) {
    return "Частное равно: " + (a / b);
}

function mul(num1, num2) {
    return "Произведение равно: " + (a * b);
}

alert(sum(a, b));
alert(sub(a, b));
alert(div(a, b));
alert(mul(a, b));