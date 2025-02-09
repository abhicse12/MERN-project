// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const hostController =require('../controllers/hostController');

hostRouter.get("/add-home",hostController.getAddhome )
hostRouter.post("/add-home",hostController.postAddhome)
hostRouter.get("/host-home-list",hostController.getHostHome )
hostRouter.get("/edit-home/:homeId",hostController.getEditHome )
hostRouter.post("/edit-home",hostController.postEditHome )
hostRouter.post("/delete-home/:homeId",hostController.postDeleteHome )

module.exports = hostRouter;
