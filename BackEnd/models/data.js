const { query } = require("../db/index");

async function getData() {
  const questions = await query(`SELECT * FROM weeklyQuestions`);
  return questions.rows;
}

async function getDataByDate(week) {
  const questions = await query(
    `SELECT * FROM weeklyQuestions WHERE week = $1`,
    [week]
  );

  return questions.rows[0];
}

async function createData(data) {
  console.log(data);
  const { uuid, week, q1, q2, q3, q4, q5 } = data;

  const res = await query(
    `INSERT INTO weeklyQuestions (
      uuid,
      week,
            q1
            ,q2
            ,q3
            ,q4
            ,q5
        ) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [uuid, week, q1, q2, q3, q4, q5]
  );
  return res.rows[0];
}

async function deleteData(uuid) {
  const res = await query(
    `DELETE FROM weeklyQuestions WHERE uuid = $1 RETURNING uuid`,
    [uuid]
  );
  return res.rows[0];
}

module.exports = {
  getData,
  createData,
  getDataByDate,
  deleteData,
};
