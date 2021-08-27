const express = require("express");

const app = express();

// Serving the static files
app.use(express.static("public"));

// Handilng the get req
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html")
})


// Starting Server;
app.listen(3000, function () {
  console.log("Server Started at 3000");
});
