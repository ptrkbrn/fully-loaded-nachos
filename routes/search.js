const express = require('express');

const router = express.Router();
const url = require('url');
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

router.get('/', (req, res) => {
  const search = url.parse(req.url, true).query.q;
  // replace punctuation and whitespace with '%' for broader matching.
  const scrubbedSearch = search.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g, '%');
  // console.log(req);
  client.query(`SELECT * FROM screenshots
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
  client.end()
});

module.exports = router;
