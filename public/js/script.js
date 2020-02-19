
const search = document.querySelector('.input-recpie');
const searchbtn = document.querySelector('.search');
const form = document.querySelector('.form__group');
const errorDiv = document.createElement('div');


// input field validation
const checkInputValue = (inputValue) => inputValue.replace(/ +(?= )/g, '').trim();
const disableBtn = () => {
  if (search.value === '') {
    searchbtn.disabled = true;
    const errText = document.createElement('p');
    errText.textContent = 'Please type your desire food';
    errorDiv.appendChild(errText);
  } else {
    searchbtn.disabled = false;
  }
};

searchbtn.addEventListener('click', () => {
  disableBtn();
  const searchValue = checkInputValue(search.value);
  const body = { search: searchValue };
  getSearchValue(body, '/foo').then((data) => {
    displayData(data);
  }).catch((err) => console.log(err));
});

window.onload = () => fetch('/food').then((res) => res.json())
  .then((data) => displayData(data))
  .catch(console.error);
