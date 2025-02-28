const connection = require("../database");

// exports.createTable = (req, res) => {
//   const createFarmerone =
//     "CREATE TABLE farmerOne (id int AUTO_INCREMENT, NAME VARCHAR(50),PRIMARY KEY(id))";
//   connection.query(createFarmerone, (error, result) => {
//     if (error) {
//       console.error("creating table", error);
//       return res.status(500).json({ message: "failed to create table" });
//     }
//     return res.status(200).json({ message: "table created" });
//   });
// };

// exports.createUfTable = (req, res) => {
//   const createUf =
//     "CREATE TABLE urbanFarmer (uFid int AUTO_INCREMENT , NAME VARCHAR(50), id int ,FOREIGN KEY(id) references farmerOne(id), PRIMARY KEY(uFid))";
//   connection.query(createUf, (error, result) => {
//     if (error) {
//       console.error("creating table", error);
//       return res.status(500).json({ message: "failed to create table" });
//     }
//     return res.status(200).json({ message: "table created" });
//   });
// };
exports.registerFarmerOne = (req, res) => {
  const sql = "INSERT INTO farmerOne (NAME) VALUES ('?')";
  connection.query(sql, [req.body.name], (error, result) => {
    if (error) {
      console.error("Error Occured", error);
      return res.status(500).json({ message: "Failed to register farmer one" });
    }
    return res.status(200).json({ message: "Successfully created farmer one" });
  });
};
