const Database = require("./config")

const initDb = {
  async init() {
    const db = await Database()
    //async e await sempre juntos
    //await esperar e trazer o resultado 
    //para poder ir para a próxima linha
    await db.exec(`CREATE TABLE rooms(
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`);

    await db.exec(`CREATE TABLE questions(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT, 
      read INT,
      room INT
    )`);

    await db.close()
  }
}

//npm run init-db

initDb.init();

