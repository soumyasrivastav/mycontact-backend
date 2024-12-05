const expess = require("express");
const dotenv = require("dotenv").config();  

const app = expess();

const port = process.env.PORT || 5000;

app.listen (port, () => {
    console.log(`server running on port ${port}`);
});