const buttons = document.querySelectorAll(".player");
const resetButton = document.querySelector(".reset-funds");
const input = document.querySelector("input");
const balanceDisplays = document.querySelectorAll(".balance");

let transferAmount = 0;
let currentSender = "";
let currentReciever = "";


const getBalancesFromLocalStorage = () => {
	balancesString = window.localStorage.getItem("balances");
	return JSON.parse(balancesString);
};

const setBalancesInLocalStorage = ()=> {
	window.localStorage.setItem("balances", JSON.stringify(balances));
	console.log(window.localStorage.balances);
};

let balances = getBalancesFromLocalStorage();

const setInitialBalances = ()=> {
	balances = {
		bank: 1000000,
		car: 0,
		director: 0,
		hat: 0,
	 	iron: 0,
		shoe: 0,
	  };
	  window.localStorage.setItem("balances", JSON.stringify(balances));
};

// Reset balances button on frontpage
if (window.location.pathname.includes("index.html")) {
	resetButton.addEventListener("click", ()=> {
		setInitialBalances();
		renderBalances();
	}) 
};

const getSenderOnPageLoad = ()=> {
	const firstElement = document.querySelector(".player");
	currentSender = firstElement.className.slice(7);
	currentSender.trim();
	return currentSender;
};

const getInputAmount = ()=> {
	transferAmount = input.valueAsNumber;
	if (isNaN(transferAmount)) {
		transferAmount = 0;		
		input.classList.add("input-error");
		setTimeout(()=> {
			input.classList.remove("input-error");
		}, 1000);
	}
	return transferAmount;
};

const getUserOnClick = () => {
	currentReciever = event.currentTarget.className.slice(7).trim();
	currentReciever.trim();
	return currentReciever;
};

const transferFunds = (sender, amount, reciever)=> {
	balances[sender] -= amount;
	balances[reciever] += amount;
};

const renderBalances = () => {
	balanceDisplays.forEach((display)=> {
		const currentPlayer = display.dataset.player;
		display.textContent = balances[currentPlayer];
	})
};



const handleClick = () => {
	getUserOnClick(event);	
	transferFunds(currentSender, getInputAmount(), currentReciever);
	renderBalances();
	setBalancesInLocalStorage();
};

buttons.forEach(button => {
	button.addEventListener("click", (event) => {
		handleClick();
		input.value = "";
		console.log("balances:",balances);
	})
});

getSenderOnPageLoad();
renderBalances();