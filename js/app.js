const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffe3.jpg" },
  { name: "Voluptatem", image: "images/coffe3.jpg" },
  { name: "Explicabo", image: "images/coffe3.jpg" },
  { name: "Rchitecto", image: "images/coffe5.jpg" },
  { name: " Beatae", image: "images/coffe5.jpg" },
  { name: " Vitae", image: "images/coffe3.jpg" },
  { name: "Inventore", image: "images/coffe5.jpg" },
  { name: "Veritatis", image: "images/coffe3.jpg" },
  { name: "Accusantium", image: "images/coffe3.jpg" },
]
const showCoffees = () => {
	let output = ""
	coffees.forEach(
	  ({ name, image }) =>
		(output += `
				<div class="card">
				  <img class="card--avatar" src=${image} />
				  <h1 class="card--title">${name}</h1>
				  <a class="card--link" href="#">Taste</a>
				</div>
				`)
	)
	container.innerHTML = output
  }

  if ("serviceWorker" in navigator) {
	window.addEventListener("load", function() {
	  navigator.serviceWorker
		.register("/serviceWorker.js")
		.then(res => console.log("service worker registered"))
		.catch(err => console.log("service worker not registered", err))
	})
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)