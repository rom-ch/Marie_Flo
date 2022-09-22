// Contact show number

const phoneButtons = document.querySelectorAll('.contact');

phoneButtons.forEach(phoneButton => {
	phoneButton.addEventListener('click', () => {
		phoneButton.classList.toggle('show-number');
		console.log(phoneBtn);
	});
});
