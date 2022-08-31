const add = function(a, b) {
return a + b;
}

const subtract = function(a, b) {
return a - b;
}//not sure this makes sense or should it be total

const multiply = function(a, b) {
return a * b;
}

const divide = function(a, b) {
    return a / b;
}

//or should it be like this
/*
function NameOfFunction(param) {

}*/
console.log('is this a thing?')
console.log(divide(3, 5));

function operate(operator, num1, num2) {
if (operator == 'divide') {
   return divide(num1, num2); 
}else if (operator == 'multiply') {
    return multiply(num1, num2);
}else if (operator == 'subtract') {
    return subtract(num1, num2)
}else if (operator == 'add') {
    return add(num1, num2)
}
}


console.log(operate('multiply', 15, 3));

const container = document.querySelector('#container');

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('buttons');
container.appendChild(buttonDiv);

const upper = document.createElement('div');
buttonDiv.appendChild(upper);
upper.setAttribute('style', 'display: flex; justify-content: space-evenly; margin: 1em 0em');


const clear = document.createElement('button');
clear.textContent = 'Clear';
clear.setAttribute('style', 'height: 3em; font-size: larger; width: 15em');
upper.appendChild(clear);

const row1 = document.createElement('div');
buttonDiv.appendChild(row1);
row1.setAttribute('style', 'display: flex; justify-content: space-evenly; margin: 1em 0em');

const one = document.createElement('button');
one.textContent = '1';
one.classList.add('row1');
one.setAttribute('style', 'height: 3em; width: 5em; font-size: large');
row1.appendChild(one);

const two = document.createElement('button');
two.textContent = '2';
two.classList.add('row1');
two.setAttribute('style', 'height: 3em; width: 5em; font-size: large')
row1.appendChild(two);

const three = document.createElement('button');
three.textContent = '3';
three.classList.add('row1');
three.setAttribute('style', 'height: 3em; width: 5em; font-size: large')
row1.appendChild(three);

const row2 = document.createElement('div');
buttonDiv.appendChild(row2);
row2.setAttribute('style', 'display: flex; justify-content: space-evenly; margin: 1em 0em');


const four = document.createElement('button');
four.textContent = '4';
four.classList.add('row2');
four.setAttribute('style', 'height: 3em; width: 5em; font-size: large')
row2.appendChild(four);

const five = document.createElement('button');
five.textContent = '5';
five.classList.add('row2');
five.setAttribute('style', 'height: 3em; width: 5em; font-size: large')
row2.appendChild(five);

const six = document.createElement('button');
six.textContent = '6';
six.classList.add('row2');
six.setAttribute('style', 'height: 3em; width: 5em; font-size: large')
row2.appendChild(six);

const row3 = document.createElement('div');
buttonDiv.appendChild(row3);
row3.setAttribute('style', 'display: flex; justify-content: space-evenly; margin: 1em 0em');

const seven = document.createElement('button');
seven.textContent = '7';
seven.classList.add('row3');
seven.setAttribute('style', 'height: 3em; width: 5em; font-size: large')
row3.appendChild(seven);

const eight = document.createElement('button');
eight.textContent = '8';
eight.classList.add('row3');
eight.setAttribute('style', 'height: 3em; width: 5em; font-size: large')
row3.appendChild(eight);

const nine = document.createElement('button');
nine.textContent = '9';
nine.classList.add('row3');
nine.setAttribute('style', 'height: 3em; width: 5em; font-size: large')
row3.appendChild(nine);

const bottom = document.createElement('div');
buttonDiv.appendChild(bottom);
bottom.setAttribute('style', 'display: flex; justify-content: space-evenly; margin: 1em 0em');

const equals = document.createElement('button');
equals.textContent = 'Equals (=)'
bottom.appendChild(equals);
equals.setAttribute('style', 'height: 3em; width: 15em; font-size: larger;');
