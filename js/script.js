const buttons = document.querySelectorAll(".player");
const input = document.querySelector("input");

let transferAmount = 0;
let currentSender = ""
let currentReciever = ""

let bank = 0;
let car = 0;
let director = 0;
let hat = 0;
let iron = 0;
let shoe = 0;

const getSenderOnPageLoad = ()=> {
	const firstElement = document.querySelector(".player");
	currentSender = firstElement.className.slice(6);
	return currentSender;
};

const getInputAmount = ()=> {
	transferAmount = input.value;
	return transferAmount;
};

const getUserOnClick = () => {
	currentReciever = event.currentTarget.className.slice(6);
	return currentReciever;
};

const transferFunds = (sender, amount, reciever)=> {
	document[sender] -= amount;
	document[reciever] += amount;
};

const handleClick = () =>{
	getUserOnClick(event);
	transferFunds(currentSender, getInputAmount, getUserOnClick);
};

buttons.forEach(button => {
	button.addEventListener("click", (event) => {
		handleClick();
		getInputAmount();
		input.value = "";
	})
});

getSenderOnPageLoad();