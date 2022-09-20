// Show form if radio button active

const attendWedding = document.querySelector('#attend-wedding');
const guestInfo = document.querySelector('.guest-info');

function handleRadioClick() {
	if (attendWedding.checked) {
		guestInfo.style.display = 'flex';
	} else {
		guestInfo.style.display = 'none';
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
		addFood.style.display = 'block';
	} else {
		addFood.style.display = 'none';
	}
});
