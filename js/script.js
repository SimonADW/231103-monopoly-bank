const buttons = document.querySelectorAll(".player");
const input = document.querySelector("input");

let transferAmount = 0;
let currentSender = "";
let currentReciever = "";

const balances = {
	bank: 100000,
	car: 0,
	director: 0,
	hat: 0,
	iron: 0,
	shoe: 0,
  };

const getSenderOnPageLoad = ()=> {
	const firstElement = document.querySelector(".player");
	currentSender = firstElement.className.slice(7);
	currentSender.trim();
	return currentSender;
};

const getInputAmount = ()=> {
	transferAmount = input.valueAsNumber;
	return transferAmount;
};

const getUserOnClick = () => {
	currentReciever = event.currentTarget.className.slice(7);
	currentReciever.trim();
	return currentReciever;
};

const transferFunds = (sender, amount, reciever)=> {
	balances[sender] -= amount;
	balances[reciever] += amount;
};

const handleClick = () =>{
	getUserOnClick(event);
	transferFunds(currentSender, getInputAmount(), currentReciever);
};

buttons.forEach(button => {
	button.addEventListener("click", (event) => {
		handleClick();
		input.value = "";
		console.log("balances:",balances);
	})
});

getSenderOnPageLoad();