const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const db = require('./DB/mysqlDB');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3500;

const app = express();

app.use(cors());
app.use(bodyParser.json({extended: true}));

app.get("/", (req, res) => { res.send("Welcome to the routes")});

app.get("/getHelpCard", (req, res) => {
    const getSql = "SELECT * FROM helpCard";
    db.query(getSql, (err,result) => {
        if (err) console.log(err);
        res.send(result);
    });
});
app.get("/getHelpCardByTitle/:title", (req, res) => {
    const { title } = req.params;
    const getSqlById = "SELECT * FROM helpCard WHERE title = ?";
    db.query(getSqlById, [title] ,(err,result) => {
        if (err) console.log(err);
        res.send(result);
    });
});
app.post("/postHelpCard", (req, res) => {
    const { ID, title, description } = req.body;
    
    const postSqlById = "INSERT INTO helpCard (id, title, description) VALUES(?, ?, ?)";
    db.query(postSqlById, [ID, title, description] ,(err,result) => {
        console.log(ID, title, description ,postSqlById);
        if (err) console.log(err);
        res.send(result);
    });
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log("Connection established with MySQL");

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});
