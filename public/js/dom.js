const container = document.querySelector('.recpie-data');
const displayData = (data) => {
  const title = document.createElement('h1');
  title.textContent = data;
  console.log(JSON.parse(data));
  container.appendChild(title);
};
