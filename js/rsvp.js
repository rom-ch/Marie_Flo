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
	}
}

const radioButtons = document.querySelectorAll('input[type=radio]');
radioButtons.forEach(radio => {
	radio.addEventListener('click', handleRadioClick);
});

// Change Brunch value

function handleBrunch() {
	const attendBrunch = document.querySelectorAll('.attend-brunch');
	attendBrunch.forEach(brunch => {
		if (brunch.checked) {
			brunch.value = 'Présent';
		}
	});
}

const addMoreFields = function (i, genre) {
	const html = `
	<div class="second-part">
							<h3>${genre} + ${i}</h3>
							<div class="name">
								<div class="form__group">
									<input
										type="text"
										name="Nom${i}"
										id="lname${i}"
										class="form__field"
										placeholder="Nom"
										required
									/>
									<label for="lname${i}" class="form__label">Nom</label>
								</div>
								<div class="form__group">
									<input
										type="text"
										name="Prénom${i}"
										id="fname${i}"
										class="form__field"
										placeholder="Prénom"
										required
									/>
									<label for="fname${i}" class="form__label">Prénom</label>
								</div>
							</div>
							<div class="attend">
								<div class="checkbox-container">
									<input
										type="checkbox"
										id="attend-brunch${i}"
										class="attend-brunch"
										name="Brunch${i}"
										value=""
									/>
									<label for="attend-brunch${i}" class="brunch"
										>Sera présent pour le brunch du lendemin</label
									>
								</div>

							</div>
							<div class="checkbox-container food-wrapper">
							<input type="checkbox" id="food${i}" name="Food${i}" data-food />
							<label for="food${i}">Allergies & régimes alimentaires </label>
						</div>
						<div class="add-food form__group">
							<input
								type="text"
								name="add"
								id="food-input"
								class="form__field"
								placeholder="Ajouter ici"
								data-food-input
							/>
							<button class="btn-form btn-add">Ajouter</button>
						</div>
					</div>

					<ul class="food-list"></ul>
					</div>
	`;

	document.querySelector('.btn-submit').insertAdjacentHTML('beforebegin', html);
};

// Show others adults and children fields
const adultNumber = document.querySelector('#nb-adult');
const childNumber = document.querySelector('#nb-children');

// Adults +1 Add fields
adultNumber.addEventListener('blur', () => {
	const numberAdultNumber = Number(adultNumber.value);

	for (let i = 1; i <= numberAdultNumber; i++) {
		addMoreFields(i, 'Adulte');
		showAllergies();
		createListAllergies();
		handleBrunch();
	}
});

// Child +1 Add fields
document.querySelector('#nb-children').addEventListener('blur', () => {
	const numberChildrenNumber = Number(childNumber.value);

	for (let i = 1; i <= numberChildrenNumber; i++) {
		addMoreFields(i, 'Enfant');
		showAllergies();
		createListAllergies();
		handleBrunch();
	}
});

// Show/Hide food input
function showAllergies() {
	const checkboxFood = document.querySelectorAll('[data-food]');

	checkboxFood.forEach(checkFood => {
		checkFood.addEventListener('click', () => {
			if (checkFood.checked) {
				checkFood.parentElement.nextElementSibling.style.display = 'flex';
			} else {
				checkFood.parentElement.nextElementSibling.style.display = 'none';
			}
		});
	});
}

showAllergies();

// Create list when food is added
function createListAllergies() {
	const btnAdd = document.querySelectorAll('.btn-add');
	// const deleteItem = document.querySelector('.list-item i');

	let foodValue = [];

	btnAdd.forEach(btn => {
		const foodInput = btn.previousElementSibling;
		const foodList = btn.parentElement.parentElement.nextElementSibling;

		btn.addEventListener('click', e => {
			e.preventDefault();

			if (foodInput.value != '') {
				const li = document.createElement('li');
				li.className = 'list-item';
				li.innerHTML = `
				${foodInput.value}
				<i class="fa-solid fa-xmark"></i>
				`;
				foodList.appendChild(li);
				foodValue.push(foodInput.value);
				foodInput.value = '';

				li.firstElementChild.addEventListener('click', e => {
					li.remove();
				});
			}
			btn.parentElement.previousElementSibling.firstElementChild.value =
				foodValue;
		});
	});
}

createListAllergies();

// Submit Form

const form = document.querySelector('.form');
const submitButton = document.querySelector('.btn-submit');
const scriptURL =
	'https://script.google.com/macros/s/AKfycbzqNKBERaYkEorMT6pcPrR6R59sXlK45wzGuNFOxyGcsade1PXeyQ727aR2dOXafCtZfw/exec';

form.addEventListener('submit', e => {
	submitButton.disabled = true;
	e.preventDefault();
	handleBrunch();
	let requestBody = new FormData(form);
	fetch(scriptURL, { method: 'POST', body: requestBody })
		.then(response => {
			alert('RSVP envoyé, RSVP sent', response);
			submitButton.disabled = false;
		})
		.catch(error => {
			alert('Error!', error.message);
			submitButton.disabled = false;
		});
});
