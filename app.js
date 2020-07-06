function start() {

	const logo = document.querySelectorAll("#logo path")
	console.log(logo)

	console.log(logo[0].getTotalLength());

	for (let i = 0; i < logo.length; i++) {
		console.log('Letter', i, 'is', logo[i].getTotalLength());

	}
}

