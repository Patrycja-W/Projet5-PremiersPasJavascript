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


/* les fleches */

let arrowLeft = document.getElementById("arrowLeft")
let arrowRight = document.getElementById("arrowRight")

arrowLeft.addEventListener("click", () => {
	currentSlide--
	if (currentSlide < 0 ) {
		currentSlide = 3
	}

	changeSlide(currentSlide);
	
})

arrowRight.addEventListener("click", () => {
	currentSlide++
	if (currentSlide > 3) {
		currentSlide = 0
	}

	changeSlide(currentSlide);
})

/* les bullet points */

const dots = document.querySelector(".dots")


function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
	}
}
displayDots();

/* chagements des images et textes au click */

let image = document.querySelector(".banner-img")
let texte = document.querySelector(".banner-text")
let currentSlide = 0


function changeSlide(index) {

	image.setAttribute("src" , "./assets/images/slideshow/" + slides[index].image );
	texte.innerHTML = slides[index].tagLine;

	const toutLesPoints = document.querySelectorAll(".dot");
	for (let i = 0; i < toutLesPoints.length; i++) {
		
		if (i === index) {
			toutLesPoints[i].classList.add("dot_selected")
		} else {
			toutLesPoints[i].classList.remove("dot_selected")
		}		
	}
}
changeSlide(currentSlide);







