const express = require('express');

const router = express.Router();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

router.get('/:episode/:screenshot_key', (req, res) => {
  const { episode, screenshot_key } = req.params;
  console.log(req)
  let caption;


  async function setCaption(rows) {
    caption = rows[0].text;
    console.log(caption);
  }

  client.connect()
  .then(
    client.query(`SELECT * FROM screenshots
    JOIN subtitles ON screenshots.timestamp
    BETWEEN subtitles.time_start
    AND subtitles.time_end
    WHERE screenshots.episode = $1
    AND subtitles.episode = screenshots.episode
    AND screenshots.screenshot_key = $2`,
    [episode, screenshot_key],
    (error, results) => {
      if (error) {
        throw error;
      }
      setCaption(results.rows)
      .then(
          client.query(`SELECT * FROM screenshots
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
            // client.end();
          }),
        );
    })
  )
});

module.exports = router;
