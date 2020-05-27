const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./Database');
const PostgreRepository = require('./repositories/PostgreRepository');
const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || 'localhost';

// Setup app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Setup routes
//====================continents=======================
app.get('/continents', async (req, res) => {
  const repo = new PostgreRepository(db, 'Continent');
  return await repo.findAll().then((continents) => {
    res.json(continents);
  });
});
//====================countries==============================
app.get('/countries/:continentCode', async (req, res) => {
  let continentCode = req.params.continentCode;
  const repoCountries = new PostgreRepository(db, 'Country');
  return await repoCountries
    .findAll({
      where: {
        continentCode: continentCode
      }
    })
    .then((results) => {
      if (!results) {
        res.status(404).json({ message: 'countries not found with continentCode: ' + continentCode });
      } else {
        res.json(results);
      }
    });
});

app.get('/countries/:continentCode/:pageNumber/:pageSize/:orderBy/:orderDesc', async (req, res) => {
  const { continentCode } = req.params;
  const { pageNumber } = req.params;
  const { pageSize } = req.params;
  const { orderBy } = req.params;
  const { orderDesc } = req.params;

  const repoCountries = new PostgreRepository(db, 'Country');
  return await repoCountries
    .findWherePagedSorted({ continentCode: continentCode }, pageNumber, pageSize, orderBy, orderDesc)
    .then((results) => {
      if (!results) {
        res.status(404).json({ message: 'countries not found with continentCode: ' + continentCode });
      } else {
        res.json(results);
      }
    });
});

app.get('/country/:countryCode', async (req, res) => {
  let countryCode = req.params.countryCode;
  const repoCountry = new PostgreRepository(db, 'Country');
  return await repoCountry.findOneWhere({ countryCode: countryCode }).then((results) => {
    if (!results) {
      res.status(404).json({ message: 'country not found with countryCode: ' + countryCode });
    } else {
      res.json(results);
    }
  });
});

//====================app start==============================

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT} `);
});
