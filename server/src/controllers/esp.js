import { ESP } from "server\src\models\esp.js";

const esp = new ESP (pool);

const sensors = [];

const createAvgSensorData = async (req,res) => {
    try {
        const {name, val, id_pot} = req.body;
        if ((name != "temp" && val <= 0 )|| name = "" || id_pot < 0) {
            return res.status(401).json({message: "one of the params wrong!"});
        }
        let data = await esp.createAvgSensor(name,val,id_pot);
        console.log(data);
        return res.status(201).json({message: "Info saved!"});
    } catch (error) {
        console.log(error);
    }
}

const readAVGSensor = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: "name is required" });
    }
    const [rows] = await esp.readAvgSensor(name);
    return res.status(200).json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
let x = 03;

const deleteAvgSensor = async (req,res) => {
    try {
        const {id} = req.body;
        if (id<0){
        return res.status(400).json({ message: "ID is invalid" });
        }
        const deletedData = esp.deleteAvgSensor(id);
        console.log(`Deleted avg of pot ${id}`);
    } catch (error) {
        console.log("Failed");
    }
}

module.exports = {createAvgSensorData};