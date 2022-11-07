// Contact show number

const flipCardInner = document.querySelectorAll('.flip-card-inner');

flipCardInner.forEach(flip => {
	flip.addEventListener('click', () => {
		flip.style.transform = 'rotateY(180deg)';
	});
});

const phoneNumbers = document.querySelectorAll('.contact-number');

phoneNumbers.forEach(phoneNumber => {
	if (window.innerWidth >= 768) {
		phoneNumber.attributes.href.value = '#';
	}
});
