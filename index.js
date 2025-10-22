const express = require('express');
let mysql = require('mysql2');
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: '3309',
    password: 'irfanfauzi',
    database: 'mahasiswa'
});

db.connect((err) => {
  if (err) throw err;{
    console.error('error Connected to database!' + err.stack);
    return;
    }
    console.log('Connected Successfully!');

});
