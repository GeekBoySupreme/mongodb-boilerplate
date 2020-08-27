const express = require("express");
const router = express.Router();
const Log = require("../models/astroLogs")


//Read All Click Logs from Server
router.get("/", async (req, res) => {
    try {
        const readLogs = await Log.find();
        res.json(readLogs);
    }
    catch(err) {
        res.json({ message : err.name });
    }
});



//Read Monthly Logs
router.get("/month", async (req, res) => {
    try {
        const readLogs = await Log.find({ "month" : req.query.month });
        res.json(readLogs);
    }
    catch(err) {
        res.json({ message : err.name });
    }
});

//Read Yearly Logs
router.get("/year", async (req, res) => {
    try {
        const readLogs = await Log.find({ "year" : req.query.year });
        res.json(readLogs);
    }
    catch(err) {
        res.json({ message : err.name });
    }
});

//Read Logs by ID
router.get("/id", async (req, res) => {
    try {
        const readLogs = await Log.find({ "id" : req.query.id });
        res.json(readLogs);
    }
    catch(err) {
        res.json({ message : err.name });
    }
});

//Read Logs by Class
router.get("/class", async (req, res) => {
    try {
        const readLogs = await Log.find({ "class" : req.query.id });
        res.json(readLogs);
    }
    catch(err) {
        res.json({ message : err.name });
    }
});



//Send Click Logs to Server
router.post('/', async (req, res) => {
    const log = new Log({
        action: req.body.action,
        id: req.body.id,
        class: req.body.class,
        day: req.body.day,
        date: req.body.date,
        month: req.body.month,
        year: req.body.year,
        hour: req.body.hour,
        minute: req.body.minute,
        second: req.body.second
    });

    try {
        const saveLog = await log.save()
        res.json(saveLog);
    }
    catch(err) {
        res.json({ message : err.name });
    }
})

module.exports = router;