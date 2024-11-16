const express = require('express');
require("./src/db/conn");

const app = express();
const port = process.env.PORT || 5000;
app.get("/", async(req, res) => {
    res.send("Hello Everyone");

});

app.listen(port, ()=> {
    console.log(`connection is live at port number: ${port}`);
})