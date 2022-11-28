// Show form if radio button active

const attendWedding = document.querySelector('#attend-wedding');
const guestInfo = document.querySelector('.guest-info');
const notAttending = document.querySelector('#not-attend');
const foodWrapper = document.querySelector('.food-wrapper');

function handleRadioClick() {
	if (attendWedding.checked) {
		guestInfo.style.display = 'flex';
		attendWedding.value = 'Présent';
		foodWrapper.style.display = 'flex';
	} else {
		guestInfo.style.display = 'none';
		foodWrapper.style.display = 'none';
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
	<div class="second-part-${genre.toLowerCase()}">
						<div class="second-part-inwrapper">
							<h3>${genre} + ${i}</h3>
							<div class="name">
								<div class="form__group">
									<input
										type="text"
										name="${genre[0].toUpperCase()}${i}-Nom"
										id="${genre[0].toUpperCase()}${i}-lname"
										class="form__field"
										placeholder="Nom"
										required
									/>
									<label for="${genre[0].toUpperCase()}${i}-lname" class="form__label">Nom</label>
								</div>
								<div class="form__group">
									<input
										type="text"
										name="${genre[0].toUpperCase()}${i}-Prénom"
										id="${genre[0].toUpperCase()}${i}-fname"
										class="form__field"
										placeholder="Prénom"
										required
									/>
									<label for="${genre[0].toUpperCase()}${i}-fname" class="form__label">Prénom</label>
								</div>
							</div>
							<div class="attend">
								<div class="checkbox-container">
									<input
										type="checkbox"
										id="${genre[0].toUpperCase()}-attend-brunch${i}"
										class="attend-brunch"
										name="${genre[0].toUpperCase()}${i}-Brunch"
										value=""
									/>
									<label for="${genre[0].toUpperCase()}-attend-brunch${i}" class="brunch"
										>Sera présent pour le brunch du lendemin</label
									>
								</div>

							</div>
							<div class="checkbox-container food-wrapper">
							<input type="checkbox" id="${genre[0].toUpperCase()}${i}-food" name="${genre[0].toUpperCase()}${i}-Food" data-food />
							<label for="${genre[0].toUpperCase()}${i}-food">Allergies & régimes alimentaires </label>
						</div>
						<div class="add-food form__group">
							<input
								type="text"
								name="add"
								id="${genre[0].toUpperCase()}${i}-food-input"
								class="form__field"
								placeholder="Ajouter ici"
								data-food-input
							/>
							<button class="btn-form btn-add">Ajouter</button>
						</div>
					</div>

					<ul class="food-list"></ul>
				</div>
</div>
	`;

	document
		.querySelector('.second-part-wrapper')
		.insertAdjacentHTML('beforeend', html);

	showAllergies();
	createListAllergies(i, genre);
	handleBrunch();
};

// Show others adults and children fields
const adultNumber = document.querySelector('#nb-adult');
const childNumber = document.querySelector('#nb-children');
const secondPartWrapper = document.querySelector('.second-part-wrapper');
const secondPartWrapperChildNodes = secondPartWrapper.childNodes;

// Adults +1 Add fields
adultNumber.addEventListener('change', e => {
	e.preventDefault();

	for (let i of secondPartWrapperChildNodes) {
		if (i.className === 'second-part-adulte') {
			i.remove();
		}
	}

	for (let i = 1; i <= adultNumber.value; i++) {
		addMoreFields(i, 'Adulte');
	}
});

// Child +1 Add fields
childNumber.addEventListener('change', e => {
	e.preventDefault();

	for (let i of secondPartWrapperChildNodes) {
		if (i.className === 'second-part-enfant') {
			i.remove();
		}
	}

	for (let i = 1; i <= childNumber.value; i++) {
		addMoreFields(i, 'Enfant');
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

//Create list when MAIN food is added
const createListAllergiesFood = function () {
	const btnAdd = document.querySelector('.btn-add');

	const foodInput = btnAdd.previousElementSibling;
	const foodList = btnAdd.parentElement.parentElement.nextElementSibling;
	let foodValue = [];
	console.log(foodList);

	btnAdd.addEventListener('click', e => {
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
		btnAdd.parentElement.previousElementSibling.firstElementChild.value =
			foodValue;

		// document.querySelector(`#${genre[0].toUpperCase()}${i}-food`).value =
		// 	foodValue;
	});
};

// Create list when food is added
const createListAllergies = function (i, genre) {
	const btnAdd = document.querySelectorAll('.btn-add');
	// const deleteItem = document.querySelector('.list-item i');

	btnAdd.forEach(btn => {
		const foodInput = btn.previousElementSibling;
		const foodList = btn.parentElement.parentElement.nextElementSibling;
		let foodValue = [];

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
			// btn.parentElement.previousElementSibling.firstElementChild.value =
			// 	foodValue;

			document.querySelector(`#${genre[0].toUpperCase()}${i}-food`).value =
				foodValue;
		});
	});
};

createListAllergiesFood();

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
