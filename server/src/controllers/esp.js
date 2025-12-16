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

module.exports = {createAvgSensorData};