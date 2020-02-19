const container = document.querySelector('.recpie-data');

const cleardate = (myNode) => {
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
};
const displayData = (data) => {
  cleardate(container);
  const food = document.createElement('div');
  container.appendChild(food);
  const title = document.createElement('h1');
  title.textContent = `food name : ${data.q}`;
  console.log(data);
  food.appendChild(title);
  for (let i = 0; i < data.hits.length; i++) {
    const url = document.createElement('a');
    url.target = '_blank';
    url.href = data.hits[i].recipe.url;
    url.textContent = 'see recipe here';
    container.appendChild(url);
  }
  const img = document.createElement('img');
  img.src = data.hits[0].recipe.image;
  container.appendChild(img);
};
