const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// EVENT LISTENER SUR LES FLECHES //

let arrowLeft = document.querySelector(".arrow_left")

arrowLeft.addEventListener("click", () => {
	console.log("Clique sur la flèche gauche");
})

let arrowRight = document.querySelector(".arrow_right")

arrowRight.addEventListener("click", () => {
	console.log("Clique sur la flèche droite");
})


// Ajout des bullet points //

// const bulletPoints = `
// 	<div class="dot">.</div>
// 	<div class="dot">.</div>
// 	<div class="dot">.</div>
// 	<div class="dot">.</div>
// `

// document.querySelector(".dots").innerHTML = bulletPoints;

function createBulletPoints () {

	for (let i = 0; i < slides.length; i++) {

		let bulletPoints = document.createElement("div");
		bulletPoints.textContent=".";
		bulletPoints.classList.add("dot");
		const dotsDiv = document.querySelector(".dots")
		dotsDiv.appendChild(bulletPoints);
		}
}

createBulletPoints ()

