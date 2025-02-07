// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const rootDir = require("./utils/pathUtils");
const errorController=require("./controllers/errors")
const db=require('./utils/databaseUtil');
const {mongoConnect} = require('./utils/databaseUtil');

require('dotenv').config();  
const MONGO_URL = process.env.MONGO_URL;
console.log("MongoDB URL:", MONGO_URL);




const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorController.PageNotFound)

const PORT = 3000;
mongoConnect(client=>{
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });

})
