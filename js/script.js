function getInput1 () {
	let input1 = Number(document.querySelector("#input-1").value);
	// console.log(input1);
	return input1;
	
}

function getInput2 () {
	let input2 = Number(document.querySelector("#input-2").value);
	// console.log(input2);
	return input2;
}


let btn_add = document.querySelector("#operation-addition");
btn_add.addEventListener("click", add);

let btn_subtract = document.querySelector("#operation-subtraction");
btn_subtract.addEventListener("click", subtract)

let btn_multiply = document.querySelector("#operation-multiplication");
btn_multiply.addEventListener("click", multiply)

let btn_divide = document.querySelector("#operation-division");
btn_divide.addEventListener("click", divide)

let btn_modulo = document.querySelector("#operation-modulo");
btn_modulo.addEventListener("click", modulo)

	

function add () {
	let answer = getInput1() + getInput2();
	document.querySelector("#output-answer").innerHTML = answer;
	document.querySelector("#operation-chosen").innerHTML = "Addition";
	// console.log(answer);
}



function subtract () {
	let answer = getInput1() - getInput2();
	document.querySelector("#output-answer").innerHTML = answer;
	document.querySelector("#operation-chosen").innerHTML = "Subtraction";
	// console.log(answer);
}

function multiply () {
	let answer = getInput1() * getInput2();
	document.querySelector("#output-answer").innerHTML = answer;
	document.querySelector("#operation-chosen").innerHTML = "Multiplication";
	// console.log(answer);
}

function divide () {
	let answer = getInput1() / getInput2();
	document.querySelector("#output-answer").innerHTML = answer;
	document.querySelector("#operation-chosen").innerHTML = "Division";
	// console.log(answer);
}

function modulo () {
	let answer = getInput1() % getInput2();
	document.querySelector("#output-answer").innerHTML = answer;
	document.querySelector("#operation-chosen").innerHTML = "Modulo";
	// console.log(answer);
}