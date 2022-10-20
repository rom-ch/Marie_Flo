// Contact show number

const phoneButtons = document.querySelectorAll('.contact');

phoneButtons.forEach(phoneButton => {
	phoneButton.addEventListener('click', () => {
		phoneButton.classList.toggle('show-number');
	});
});

const phoneNumbers = document.querySelectorAll('.contact-number');

phoneNumbers.forEach(phoneNumber => {
	if (window.innerWidth >= 768) {
		phoneNumber.attributes.href.value = '#';
	}
});

// function copyText() {
// 	phoneNumbers.forEach(phoneNumber => {
// 		phoneNumber.addEventListener('click', () => {
// 			navigator.clipboard.writeText('hello');
// 		});
// 	});
// }
