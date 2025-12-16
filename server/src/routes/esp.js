const router = require("express").Router();
const {createAvgSensorData} = require("../controllers"); 

router.post("/create", createAvgSensorData);

module.exports = router;