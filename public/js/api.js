
const getSearchValue = (search, endPoint) => fetch((endPoint), {
  method: 'post',
  body: JSON.stringify(search),
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .catch((error) => console.error(error));
