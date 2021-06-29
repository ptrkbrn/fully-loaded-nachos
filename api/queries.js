const url = require('url');
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'patrickbreen',
  host: 'localhost',
  database: 'fully-loaded-nachos',
  password: 'hustlebone$69',
  port: 5432,
})

const search = (request, response) => {
  const search = url.parse(request.url,true).query["q"];
  pool.query(`SELECT * FROM screenshots
              LEFT JOIN subtitles ON screenshots.timestamp
              BETWEEN subtitles.time_start
              AND subtitles.time_end
              WHERE subtitles.episode = screenshots.episode
              AND subtitles.text ILIKE $1
              LIMIT 1;`,
              [`%${search}%`], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// const getUsers = (request, response) => {
//     pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).json(results.rows)
//     })
// }

// const getUserById = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

//   const createUser = (request, response) => {
//     const { name, email } = request.body

//     pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) =>{
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`User added with ID ${result.insertId}.`)
//     })
//   }

//   const updateUser = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { name, email } = request.body

//     pool.query(
//       'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//       [name, email, id],
//       (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`User modified with ID ${id}`)
//       }
//     )
//   }

//   const deleteUser = (request, response) => {
//     const id = parseInt(request.params.id)

//     pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`User deleted with id ${id}.`)
//     })
//   }

  module.exports = {
    search,
    // getUsers,
    // getUserById,
    // createUser,
    // updateUser,
    // deleteUser,
  }