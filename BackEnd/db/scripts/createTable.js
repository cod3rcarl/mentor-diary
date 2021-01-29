const { query } = require("../index");

const sqlStatement = `
   DROP TABLE IF EXISTS weeklyQuestions;
    CREATE TABLE weeklyQuestions(
 
    id SERIAL PRIMARY KEY,
    uuid VARCHAR,
    week INT,
    q1 TEXT,
    q2 TEXT,
    q3 TEXT,
    q4 TEXT,
    q5 TEXT
 
)`;

async function createTable() {
  const result = await query(sqlStatement);
  console.log(result);
  return result;
}

createTable();
