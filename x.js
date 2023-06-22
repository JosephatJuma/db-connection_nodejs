// const db = require("./config/database");




// db.connect((error) => {
//     if (error) throw error;
//     console.log("connected to db")
// })

// app.get("/", (req, res) => {
//     let sql = "CREATE DATABASE ufarm1";
//     db.query(sql, (error, result) => {
//         if (error) {
//             res.status(500).json({ message: "failed to create database" })
//         }
//         res.status(200).json({ message: "db created" })
//     })
// })

// app.get("/new", (req, res) => {
//     let sql = "CREATE TABLE farmerOne";
//     db.query(sql, (error, result) => {
//         if (error) {
//             res.status(500).json({ message: "failed to create table" })
//         }
//         res.status(200).json({ message: "table created" })
//     })
// })