var display = document.getElementById("calc-display");
//display.value = "0";
var firstNum;
var secondNum;
var operator;
var answer;

var displayVal = display.value;
console.log(displayVal);

var displayArr = [];
console.log(displayArr);

var b7 = document.getElementById("seven");
b7.onclick = function() {
//	display.value = "";
	display.value += "7";
	displayArr.push("7");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var b8 = document.getElementById("eight");
b8.onclick = function() {
//	display.value = "";
	display.value += "8";
	displayArr.push("8");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var b9 = document.getElementById("nine");
b9.onclick = function() {
//	display.value = "";
	display.value += "9";
	displayArr.push("9");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var bDivide = document.getElementById("divide");
bDivide.onclick = function() {
//	display.value = "";
	display.value += "%";
	displayArr.push("%");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
	
	operator = displayArr.pop();
	console.log(operator);
	console.log(displayArr);
	firstNum = displayArr.join("");
	console.log(firstNum);
	firstNum = parseInt(firstNum);
	console.log(firstNum);
	displayArr = [];
};
var b4 = document.getElementById("four");
b4.onclick = function() {
//	display.value = "";
	display.value += "4";
	displayArr.push("4");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var b5 = document.getElementById("five");
b5.onclick = function() {
//	display.value = "";
	display.value += "5";
	displayArr.push("5");
	console.log(displayArr);
	var displayVal = display.value;
	console.log(displayVal);
};
var b6 = document.getElementById("six");
b6.onclick = function() {
//	display.value = "";
	display.value += "6";
	displayArr.push("6");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var bMult = document.getElementById("mult");
bMult.onclick = function() {
//	display.value = "";
	display.value += "X";
	displayArr.push("X");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
	
	operator = displayArr.pop();
	console.log(operator);
	console.log(displayArr);
	firstNum = displayArr.join("");
	console.log(firstNum);
	firstNum = parseInt(firstNum);
	console.log(firstNum);
	displayArr = [];
};
var b1 = document.getElementById("one");
b1.onclick = function() {
//	display.value = "";
	display.value += "1";
	displayArr.push("1");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var b2 = document.getElementById("two");
b2.onclick = function() {
//	display.value = "";
	display.value += "2";
	displayArr.push("2");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var b3 = document.getElementById("three");
b3.onclick = function() {
//	display.value = "";
	display.value += "3";
	displayArr.push("3");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var bMinus = document.getElementById("minus");
bMinus.onclick = function() {
//	display.value = "";
	display.value += "-";
	displayArr.push("-");
	console.log(displayArr);
	var displayVal = display.value;
	console.log(displayVal);

	operator = displayArr.pop();
	console.log(operator);
	console.log(displayArr);
	firstNum = displayArr.join("");
	console.log(firstNum);
	firstNum = parseInt(firstNum);
	console.log(firstNum);
	displayArr = [];
};
var bZero = document.getElementById("zero");
bZero.onclick = function() {
	display.value += "0";
	displayArr.push("0");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
};
var bClear = document.getElementById("clear");
bClear.onclick = function() {
	display.value = "";
	displayArr = [];
	console.log(displayArr);
};
var bAdd = document.getElementById("add");
bAdd.onclick = function() {
//	display.value = "";
	display.value += "+";
	displayArr.push("+");
	console.log(displayArr);
	displayVal = display.value;
	console.log(displayVal);
	
	operator = displayArr.pop();
	console.log(operator);
	console.log(displayArr);
	firstNum = displayArr.join("");
	console.log(firstNum);
	firstNum = parseInt(firstNum);
	console.log(firstNum);
	displayArr = [];
};

var bEquals = document.getElementById("equals");
bEquals.onclick = function() {
	console.log(firstNum);
	console.log(operator);
	displayVal = display.value;
	console.log(displayVal);
	console.log(displayArr);
	secondNum = displayArr.join("");
	secondNum = parseInt(secondNum);
	console.log(secondNum);
	
	switch(operator) {
		case "%":
		answer = firstNum / secondNum;
		break;
		case "X":
		answer = firstNum * secondNum;
		break;
		case "-":
		answer = firstNum - secondNum;
		break;
		case "+":
		answer = firstNum + secondNum;
		break;
		default:
		answer = "";
	}
	display.value = answer;
	console.log(answer);
	
/*	if (operator.value = "%") {
		answer = firstNum / secondNum;
		console.log(answer);
		display.value = answer;
	}
	if (operator.value = "X") {
		answer = firstNum * secondNum;
		console.log(answer);
		display.value = answer;
	}
	if (operator.value = "-") {
		answer = firstNum - secondNum;
		console.log(answer);
		display.value = answer;
	}
	if (operator.value = "+") {
		answer = firstNum + secondNum;
		console.log(answer);
    	display.value = answer;
	}
	*/

/*
for (var i = 0; i < displayArr.length; i++) {
		if (displayArr[i] === "+" || "-" || "X" || "%") {
			return displayArr[i];
		}
	}
	
	for (var i = 0; i < displayArr.length; i++) {
		if (displayArr[i].className = "num") {
			var num1 = [];
			num1.push(parseInt(displayArr[i]));
			console.log(num1);
		} if (displayArr[i] === NaN) {
			var op = [];
			op.push(displayArr[i]);
			console.log(op);
		}
		if (i.nextSibling.className === "operator") {
			var opIndex = displayArr.indexOf(i);
			var first = displayArr.slice(0, i + 1)
			var second = displayArr.slice(i + 1, displayArr.length);
			var sum = 
		}
	}*/
};