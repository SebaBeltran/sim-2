const express = require("express"),
      bodyParser = require("body-parser"),
      massive = require("massive"),
      controller = require("./controller");
require("dotenv").config()

const { CONNECTION_STRING } = process.env

const app = express();
app.use(bodyParser.json())


app.get("/api/houser", controller.getAll)
app.delete("/api/houser/:id", controller.deleteHouse)
app.post("/api/houser", controller.addHouse)

const port = 3005;

massive(CONNECTION_STRING).then(db =>{
  app.set("db", db);
  app.listen(port, ()=>{console.log(`listening to: ${port}`)})
})
