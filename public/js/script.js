
const search = document.querySelector('.input-recpie');
const searchbtn = document.querySelector('.search');

searchbtn.addEventListener('click', () => {
  const body = { search: search.value };
  getSearchValue(body, '/foo').then((data) => {
    displayData(data);
  }).catch((err) => console.log(err));
});

window.onload = () => fetch('/food').then((res) => res.json()).then(console.log).catch(console.error);
