const router = require("express").Router();
const {createAvgSensorData} = require("../controllers"); 

router.post("/create", createAvgSensorData);
const { publish } = require("../mqttClient");

router.post("/weather", async (req, res) => {
  await publish({ mode: "WEATHER" });
  res.json({ ok: true });
});

router.post("/soil", async (req, res) => {
  await publish({ mode: "SOIL" });
  res.json({ ok: true });
});

router.post("/manual", async (req, res) => {
  await publish({ mode: "MANUAL" });
  res.json({ ok: true });
});

router.post("/scheduled", async (req, res) => {
  await publish({ mode: "SCHEDULED" });
  res.json({ ok: true });
});

module.exports = router;


module.exports = router;