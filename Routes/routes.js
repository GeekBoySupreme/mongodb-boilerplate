const express = require("express");
const router = express.Router();
const Log = require("../models/astroLogs")


//Read All Click Logs from Server
router.get("/", async(req, res) => {
    try {
        const readLogs = await Log.find();
        res.json(readLogs);
    } catch (err) {
        res.json({ message: err.name });
    }
});



//Read Monthly Logs
router.get("/month", async(req, res) => {
    try {
        const readLogs = await Log.find({ "month": req.query.month });
        res.json(readLogs);
    } catch (err) {
        res.json({ message: err.name });
    }
});




//Send Click Logs to Server
router.post('/', async(req, res) => {
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
    } catch (err) {
        res.json({ message: err.name });
    }
});

router.get('/delete/:id', async(req, res) => {
    try {
        const LID = req.params.id;
        Log.findOneAndDelete({ id: LID })
            .then(() => {
                res.status(200).json({
                    message: "Log deleted successfully"
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: err.name
                });
            })
    } catch (err) {
        res.status(500).json({
            message: err.name
        });
    }
});
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
    if (req.body.action != null) {
        res.log.action = req.body.firstname;
    }
    if (req.body.id != null) {
        res.log.id = req.body.lastname;
    }
    if (req.body.class != null) {
        res.log.class = req.body.lastname;
    }
    if (req.body.day != null) {
        res.log.day = req.body.lastname;
    }
    if (req.body.date != null) {
        res.log.date = req.body.lastname;
    }
    if (req.body.month != null) {
        res.log.month = req.body.lastname;
    }
    if (req.body.year != null) {
        res.log.year = req.body.lastname;
    }
    if (req.body.hour != null) {
        res.log.hour = req.body.lastname;
    }
    if (req.body.minute != null) {
        res.log.minute = req.body.lastname;
    }
    if (req.body.second != null) {
        res.log.second = req.body.lastname;
    }
    try {
        const updatedLog = await res.log.save();
        res.json(updatedLog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
