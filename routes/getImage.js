const express = require('express');

const router = express.Router();
const pg = require('pg');

const connection = 'DATABASE_URL';

const client = new pg.Client(connection);

router.get('/:episode/:key', (req, res) => {
  const { episode, key } = req.params;

  let caption;

  async function setCaption(rows) {
    caption = rows[0].text;
    console.log(caption);
  }

  client.query(`SELECT * FROM screenshots
  JOIN subtitles ON screenshots.timestamp
  BETWEEN subtitles.time_start
  AND subtitles.time_end
  WHERE screenshots.episode = $1
  AND subtitles.episode = screenshots.episode
  AND screenshots.screenshot_key = $2`,
  [episode, key],
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
        }),
      );
  });
});

module.exports = router;
