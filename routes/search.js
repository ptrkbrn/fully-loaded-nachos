const express = require('express');

const router = express.Router();
const url = require('url');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'patrickbreen',
  host: 'localhost',
  database: 'fully-loaded-nachos',
  password: 'hustlebone$69',
  port: 5432,
});

router.get('/', (req, res) => {
  const search = url.parse(req.url, true).query.q;
  // replace punctuation and whitespace with '%' for broader matching.
  const scrubbedSearch = search.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g, '%');
  // console.log(req);
  pool.query(`SELECT * FROM screenshots
                LEFT JOIN subtitles ON screenshots.timestamp
                BETWEEN subtitles.time_start
                AND subtitles.time_end
                WHERE subtitles.episode = screenshots.episode
                AND subtitles.text ILIKE $1`,
  [`%${scrubbedSearch}%`], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

module.exports = router;
