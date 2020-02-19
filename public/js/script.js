const search = document.querySelector('.input-recpie').value;
const body = { search };
const searchbtn = document.querySelector('.search');

searchbtn.addEventListener('click', () => {
  getSearchValue(body, '/foo');
});
