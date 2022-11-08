// Submit Tracks

const form = document.querySelector('.music');
const submitButton = document.querySelector('.btn-music-submit');
const scriptURL =
	'https://script.google.com/macros/s/AKfycbzQRB4J4AIBOoJ5yFk58VFg4A-fgWOKSVBIf15tTOchr0CMQT9DTuoZJJ0VWwSZHqW5Lg/exec';

form.addEventListener('submit', e => {
	submitButton.disabled = true;
	e.preventDefault();
	let requestBody = new FormData(form);
	fetch(scriptURL, { method: 'POST', body: requestBody })
		.then(response => {
			alert('Envoyé, Sent', response);
			submitButton.disabled = false;
		})
		.catch(error => {
			alert('Error!', error.message);
			submitButton.disabled = false;
		});
});
