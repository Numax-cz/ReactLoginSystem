const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" })
const mysql = require("mysql");
const cors = require("cors");


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DB
});

app.post("/api/register", (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;
    db.query(`INSERT INTO login (username, password) VALUES ('${Username}', '${Password}')`, (err, result) => {
        if (err !== null) {
            console.log("[Server] Database" + err);
            res.json(false);
        }
        res.json(true);
    });
});

app.post("/api/usernamech", (req, res) => {
    const username = req.body.Username;
    db.query(`SELECT * FROM login WHERE username='${username}'`, function (err, result, fl) {
        if (username.length <= 0) {
            res.json({ message: "", error: null });
        } else {
            if (result.length) {
                res.json({ message: "Jméno existuje", error: true});
            } else {
                res.json({ message: "Jméno neexistuje", error: false});
            } 
        }    
    });
});

db.connect(function (e) {
    if (e) throw e;
    console.log("Databáze byla napojena");
});
app.listen(process.env.SERVER_PORT, () => {
    console.log("Server na portu " + process.env.SERVER_PORT);
});
