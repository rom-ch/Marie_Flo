// Contact show number

const flipCardInner = document.querySelectorAll('.flip-card-inner');

flipCardInner.forEach(flip => {
	flip.addEventListener('click', () => {
		flip.classList.add('active');
	});
});

const removeActive = function () {
	flipCardInner.forEach(flip => {
		flip.classList.remove('active');
	});
};

setTimeout(removeActive, 8000);

const phoneNumbers = document.querySelectorAll('.contact-number');

phoneNumbers.forEach(phoneNumber => {
	if (window.innerWidth >= 768) {
		phoneNumber.attributes.href.value = '#';
	}
});
clearTimeout;
