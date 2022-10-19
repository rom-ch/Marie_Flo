// Contact show number

const phoneButtons = document.querySelectorAll('.contact');

phoneButtons.forEach(phoneButton => {
	phoneButton.addEventListener('click', () => {
		phoneButton.classList.toggle('show-number');
	});
});

const phoneNumbers = document.querySelectorAll('.contact-number');

phoneNumbers.forEach(phoneNumber => {
	phoneNumber.addEventListener('click', () => {
		navigator.clipboard.writeText(phoneNumber.innerHTML);
		console.log(phoneNumber);
	});
});
