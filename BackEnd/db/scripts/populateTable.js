const { query } = require("../index");

const mockTable = [
  {
    uuid: 123456789,
    week: 1,
    q1: "lorem ipum",
    q2: "more data",
    q3: "even more data",
    q4: "too much data",
    q5: "so much data",
  },
  {
    week: 2,
    uuid: 123456789,
    q1: "lorem ipum",
    q2: "more data",
    q3: "even more data",
    q4: "too much data",
    q5: "so much data",
  },
];

const text = `INSERT INTO weeklyQuestions(uuid,week,q1,q2,q3,q4,q5) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

async function populateTable() {
  for (let i = 0; i < mockTable.length; i++) {
    let item = mockTable[i];
    let res = await query(text, [
      item.uuid,
      item.week,
      item.q1,
      item.q2,
      item.q3,
      item.q4,
      item.q5,
    ]);
    console.log(res);
  }
}
populateTable();
