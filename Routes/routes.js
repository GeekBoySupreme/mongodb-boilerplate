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
        res.status(500).json({ message : err.name });
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
        res.status(201).json(saveLog);
    }
    catch(err) {
        res.status(400).json({ message : err.name });
    }
})
// Edit One Route PUT version
router.put("/put/:id", async (req, res) => {
    try {
        const updatedLog = await res.log.set(req.body);
        res.json(updatedLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Edit One Route PATCH version
router.patch("/patch/:id", async (req, res) => {
    if (req.body.firstname != null) {
        res.log.firstname = req.body.firstname;
    }
    if (req.body.lastname != null) {
        res.log.lastname = req.body.lastname;
    }
    try {
        const updatedLog = await res.log.save();
        res.json(updatedLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
module.exports = router;
