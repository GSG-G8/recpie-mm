const app = require('./app');
require('dotenv').config();

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running at http://localhost:${Port}`);
});
