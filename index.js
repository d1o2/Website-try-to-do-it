//JS for Toggle Menu 
var navLinks = document.getElementById("navLinks");

function showMenu() {
	navLinks.style.right = "0";
}
	function hideMenu() {
		navLinks.style.right = "-200px";
	}

	//stars and emoji
	/* const starsEL = document.
	querySelectorAll(".fa-star");
	const emojisEl = document.
	querySelectorAll(".fa-regular");
	const colorsArray = ["red", "orange", "lightblue",
	"lightgreen", "green"];
	updateRating(0);

	starsEL.forEach((starsEL, index) => {
		starsEL.addEventListener("click", () => {
			//console.log("clicked", index);
		updateRating(index)
		});
	});

	function updateRating(index) {
		starsEL.forEach((starEl,idx) => {
			if (idx < index + 1) {
				starEl.classList.add("active");
			} else {
				starEl.classList.remove("active");
			}
	});

	emojisEl.forEach((emojiEl) => {
		emojiEl.style.transform = 
		'translateX(-${index * 50}px)';
		emojiEl.style.color = colorsArray[index];
	});
} */

