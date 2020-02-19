const fetch = require('node-fetch');

const { appid, appkey } = process.env;

// function for get one food from input search
const getfood = (search) => fetch(`https://api.edamam.com/search?q=${search}&app_id=${appid}&app_key=${appkey}&from=0&to=3&calories=591-722&health=alcohol-free`).then((response) => response.json());

// using this function on func post
const getBysearch = (req, res) => {
  const { search } = req.body;
  getfood(search).then((result) => {
    res.json(result);
  }).catch(console.error);
};

// fun to get all the json object
const apidata = (req, res) => {
  fetch(`https://api.edamam.com/search?q=chicken&app_id=${appid}&app_key=${appkey}&from=0&to=3&calories=591-722&health=alcohol-free`).then((result) => result.json()).then((result) => res.send(result))
    .catch(console.error);
};

module.exports = {
  getBysearch,
  apidata,
};
