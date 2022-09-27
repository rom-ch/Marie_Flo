// Show form if radio button active

const attendWedding = document.querySelector('#attend-wedding');
const guestInfo = document.querySelector('.guest-info');
const notAttending = document.querySelector('#not-attend');

function handleRadioClick() {
	if (attendWedding.checked) {
		guestInfo.style.display = 'flex';
		attendWedding.value = 'Présent';
	} else {
		guestInfo.style.display = 'none';
	}

	if (notAttending.checked) {
		notAttending.value = 'Pas Présent';
		console.log(notAttending.value);
	}
}

const radioButtons = document.querySelectorAll('input[type=radio]');
radioButtons.forEach(radio => {
	radio.addEventListener('click', handleRadioClick);
});

// Create list when food is added

const btnAdd = document.querySelector('.btn-add');
const foodInput = document.querySelector('#food-input');
const foodList = document.querySelector('.food-list');
const deleteItem = document.querySelector('.list-item i');

btnAdd.addEventListener('click', e => {
	if (foodInput.value != '') {
		const li = document.createElement('li');
		li.className = 'list-item';
		li.innerHTML = `
		${foodInput.value}
		<i class="fa-solid fa-xmark"></i>
		`;
		foodList.appendChild(li);
		foodInput.value = '';

		li.firstElementChild.addEventListener('click', e => {
			li.remove();
		});
	}

	e.preventDefault();
});

const checkboxFood = document.querySelector('#food');
const addFood = document.querySelector('.add-food');

checkboxFood.addEventListener('click', () => {
	if (checkboxFood.checked) {
		addFood.style.display = 'flex';
	} else {
		addFood.style.display = 'none';
	}
});

// Submit Form

const form = document.querySelector('.form');
const submitButton = document.querySelector('.btn-submit');
const scriptURL =
	'https://script.google.com/macros/s/AKfycbzqNKBERaYkEorMT6pcPrR6R59sXlK45wzGuNFOxyGcsade1PXeyQ727aR2dOXafCtZfw/exec';

form.addEventListener('submit', e => {
	submitButton.disabled = true;
	e.preventDefault();
	let requestBody = new FormData(form);
	fetch(scriptURL, { method: 'POST', body: requestBody })
		.then(response => {
			alert('Success!', response);
			submitButton.disabled = false;
		})
		.catch(error => {
			alert('Error!', error.message);
			submitButton.disabled = false;
		});
});
