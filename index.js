const express = require("express");
const app = express();
const route = require("./routes/routes");


app.use(express.json());  //parse data in a json format



app.use("/api", route);



app.listen(3000, () => {
    console.log("server is running at port 3000")
})