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

console.log(slides)

/* les events listener sur les fleches */

let arrowLeft = document.getElementById("arrowLeft")

arrowLeft.addEventListener("click", () => {
	currentSlide--
	if (currentSlide < 0 ) {
		currentSlide = 3
	}
	console.log("arrowLeft " + currentSlide);
	changeSlide(currentSlide);
	
})

let arrowRight = document.getElementById("arrowRight")

arrowRight.addEventListener("click", () => {
	currentSlide++
	if (currentSlide > 3) {
		currentSlide = 0
	}
	console.log("arrowRight " + currentSlide);
	changeSlide(currentSlide);
})

/* afficher les bullet points */

const dots = document.querySelector(".dots")
let currentSlide = 0
console.log("currentSlide " + currentSlide);


function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		// if (i == currentSlide ) {
		// 	dot.classList.add("dot_selected")
		// }
	}
}
displayDots();

/* chagements des images et textes au click */

let image = document.querySelector(".banner-img")
let texte = document.querySelector(".banner-text")

/*image.setAttribute("src" , "./assets/images/slideshow/" + slides[currentSlide].image )*/

function changeSlide(index) {
	image.setAttribute("src" , "./assets/images/slideshow/" + slides[index].image );
	texte.innerHTML = slides[index].tagLine;

	const toutLesPoints = document.querySelectorAll(".dot");
	for (let i = 0; i < toutLesPoints.length; i++) {
		
		if (i == index) {
			toutLesPoints[i].classList.add("dot_selected")
		} else {
			toutLesPoints[i].classList.remove("dot_selected")
		}		
	}

}
changeSlide(currentSlide);







