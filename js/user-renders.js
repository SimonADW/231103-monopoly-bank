const recipentsContainer = document.querySelector(".recipients-container");

 function Player(imageUrl, className, dataPlayer, balanceClassName) {
	this.imageUrl = imageUrl;
	this.className = className;
	this.dataPlayer = dataPlayer;
	this.balanceClassName = balanceClassName;

	this.renderUser = function() {
		const currentPlayerDiv = document.createElement("div");
		currentPlayerDiv.className = (this.className);
		recipentsContainer.appendChild(currentPlayerDiv);
		
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

const bankElement = {		 
		className: "player bank fa-solid fa-building-columns",
		dataPlayer: "bank",
}

players.forEach((player)=>{
	player.renderUser();
	});