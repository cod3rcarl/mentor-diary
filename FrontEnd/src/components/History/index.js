import React, { useState, useEffect } from "react";

import { Accordion, Card, Button } from "react-bootstrap";
import "../App/App.css";
let url = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";
function History({ week, uuid }) {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    async function getDiary() {
      const res = await fetch(`${url}`);
      const data = await res.json();
      console.log(data);
      setDiary(data.payload);
    }

    getDiary();
  }, [week]);
  console.log(week);
  console.log(diary);
  return diary.map((item) => {
    if (uuid === item.uuid && week === item.week) {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Card.Body style={{ fontWeight: "bold" }}>
                  Week Number {item.week}
                </Card.Body>
              </Card.Header>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  What have you achieved this week?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>{item.q1}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  How would you implement what you have learned day to day?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>{item.q2}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  What could you improve on?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>{item.q3}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Share an example of something that you struggled with?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>{item.q4}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card.Header>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Is there anything else you would like to talk about in this
                  session?
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>{item.q5}</Card.Body>
              </Accordion.Collapse>
            </Card.Header>
          </Accordion>
          <br></br>
          <br></br>
        </>
      );
    } else {
      return (
        <div>
          <p></p>
        </div>
      );
    }
  });
}

export default History;
