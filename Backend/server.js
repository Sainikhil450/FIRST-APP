const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config(); // Ensure you have dotenv installed and required

// Create an Express application
const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON bodies

// Create a connection to the database using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "signup",
    port: process.env.DB_PORT || 3306 // Default to 3306 if not specified
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Handle POST requests to /signup
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: "Database error" });
        }
        return res.status(201).json({ message: "User registered successfully" });
    });
});

// Handle POST requests to /login
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: "Database error" });
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    });
});

// Start the server
app.listen(8081, () => {
    console.log("listening on port 8081");
});
