class ESP
{
  constructor(db) {
    this.db = db;
  }

  async createAvgSensor(name, avg, potId) {
    let query = "INSERT INTO sensors (name, avarage_value, date, pot_id) VALUES (?,?,?,?);"
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    return await this.db.execute(query,[name, avg, now, potId]);
  }

  async readAvgSensor(name) {
    let query = "SELECT * FROM sensors WHERE name = ?";
    let answer = this.db.execute(query,[name]);
    return await answer;
  }

  async deleteAvgSensor(id){
    let query = "DELETE FROM sensors WHERE id = ?";
    return await this.db.execute (query,id)
  }
  
}

module.exports = ESP;
