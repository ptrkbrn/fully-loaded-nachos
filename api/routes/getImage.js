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

router.get('/:episode/:timestamp', (req, res) => {
  const { episode, timestamp } = req.params;

  let caption;

  async function setCaption(rows) {
    caption = rows[0].text;
    console.log(caption);
  }

  pool.query(`SELECT * FROM screenshots
  JOIN subtitles ON screenshots.timestamp
  BETWEEN subtitles.time_start
  AND subtitles.time_end
  WHERE screenshots.episode = $1
  AND subtitles.episode = screenshots.episode
  AND screenshots.timestamp = $2`,
  [episode, timestamp],
  (error, results) => {
    if (error) {
      throw error;
    }
    setCaption(results.rows)
      .then(
        pool.query(`SELECT * FROM screenshots
    RIGHT JOIN subtitles ON screenshots.timestamp
    BETWEEN subtitles.time_start
    AND subtitles.time_end
    WHERE subtitles.episode = screenshots.episode
    AND subtitles.text = $1`,
        [caption],
        (error2, results2) => {
          if (error2) {
            throw error;
          }
          res.status(200).json(results2.rows);
        }),
      );
  });
});

module.exports = router;
