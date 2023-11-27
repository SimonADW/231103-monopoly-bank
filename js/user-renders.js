const recipientsContainer = document.querySelector(".recipients-container");
const senderContainer = document.querySelector(".sender-container");

 function Player(imageUrl, className, dataPlayer, balanceClassName) {
	this.imageUrl = imageUrl;
	this.className = className;
	this.dataPlayer = dataPlayer;
	this.balanceClassName = balanceClassName;

	this.renderReceivers = function() {
		const currentPlayerDiv = document.createElement("div");
		currentPlayerDiv.className = (this.className);
		recipientsContainer.appendChild(currentPlayerDiv);
		
		const currentPlayerImage = document.createElement("img");
		currentPlayerImage.src = this.imageUrl;
		currentPlayerDiv.appendChild(currentPlayerImage);
	
		const currentBalanceDisplay = document.createElement("div");
		currentBalanceDisplay.className = (this.balanceClassName);	
		currentBalanceDisplay.textContent = "000";
		currentPlayerDiv.appendChild(currentBalanceDisplay);
		}	

	this.renderSender = function() {
		const currentPlayerDiv = document.createElement("div");
		currentPlayerDiv.className = (this.className);
		senderContainer.appendChild(currentPlayerDiv);
		
		const currentPlayerImage = document.createElement("img");
		currentPlayerImage.src = this.imageUrl;
		currentPlayerDiv.appendChild(currentPlayerImage);
	
		const currentBalanceDisplay = document.createElement("div");
		currentBalanceDisplay.className = (this.balanceClassName);	
		currentBalanceDisplay.textContent = "000";
		currentPlayerDiv.appendChild(currentBalanceDisplay);
		}	
 };

 const car = new Player("assets/images/car.png","player car","car","balance car-balance");
 const director = new Player("assets/images/director.svg","player director","director","balance director-balance");
 const iron = new Player("assets/images/iron.png","player iron","iron","balance iron-balance");
 const hat = new Player("assets/images/tophat.png","player hat","hat","balance hat-balance");
 const shoe = new Player("assets/images/shoe.png","player shoe","shoe","balance shoe-balance");

 const players = [car, director, iron, hat, shoe];

 
// Render current sender on top

const playerIcons = document.querySelectorAll(".player");
let currentSenderIcon = "";
let currentReceivers = [];

playerIcons.forEach((player)=> {
	if (window.location.pathname.includes("index.html")) {
		player.addEventListener("click", (event)=>{
			currentSenderIcon = event.currentTarget.className.slice(7);
			window.sessionStorage.setItem("currentSenderIcon", currentSenderIcon);
		});
	};	
});

const updateReceiversArray = ()=> {
	currentSenderIcon = window.sessionStorage.getItem("currentSenderIcon");
		currentReceivers = players.filter((player)=> {
		return player.dataPlayer !== currentSenderIcon;
	});
}

if (!window.location.pathname.includes("index.html")) {
	updateReceiversArray();
};

players.forEach((player)=>{
	if (player.dataPlayer === currentSenderIcon) {
		player.renderSender()
	};
}
)
currentReceivers.forEach((player)=>{
	player.renderReceivers();
	});


