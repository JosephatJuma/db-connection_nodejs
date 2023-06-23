const express = require("express");
const app = express();
const route = require("./routes/routes");
const port = process.env.PORT || 3000;

app.use(express.json()); //parse data in a json format

app.use("/api", route);

app.listen(port, process.env.HOST, () => {
  console.log("server is running at port 3000");
});
