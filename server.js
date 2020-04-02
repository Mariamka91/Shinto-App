const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const db = require('./models');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(require('./routes'));

app.get('/ping', (req, res) => {
  res.send({ message: 'pong' });
});

db.sequelize.sync({ force: true });
app.listen(process.env.PORT || 8080, () => {
  console.log(
    `[START] app running on http://localhost:${process.env.PORT || 8080}`
  );
});