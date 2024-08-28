const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes"); // Import your routes //here .....
const bodyParser = require("body-parser"); //here ......
const db = require("./db");
require('dotenv').config();
// npm install dotenv

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);
const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
  
 

  
