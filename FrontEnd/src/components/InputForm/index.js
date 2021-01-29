import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Jumbotron } from "react-bootstrap";
import { auth } from "../../firebase/firebase";
import stars from "../images/starryNight.jpeg";
let url = process.env.REACT_APP_BACKEND_URL || "http://localhost:3000";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function InputForm() {
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");
  const [q3, setq3] = useState("");
  const [q4, setq4] = useState("");
  const [q5, setq5] = useState("");
  const [week, setWeek] = useState(0);
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUuid(user.uid);
      console.log(uuid);
    });

    return unsubscribe;
  }, [uuid]);

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
  }

  async function handleClick() {
    console.log("clicked");
    const requestOptions = {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: { uuid, week, q1, q2, q3, q4, q5 } }),
    };
    const response = await fetch(`${url}`, requestOptions);
    const data = await response.json();
    setq1({ q1: data.q1 });
  }

  return (
    <>
      <div className="page-intro">
        <Jumbotron
          style={{
            backgroundImage: `url(${stars})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0",
          }}
        >
          <h1 style={{ color: "white" }}>Weekly Form</h1>
          <br></br>
          <p style={{ color: "white" }}>
            This tool will help you to structure your meetings and leave you
            with a diary documenting your conversations as well as your journey
            through the School Of Code.
          </p>
          <p></p>
        </Jumbotron>
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="week">
          <Form.Label style={{ fontSize: "22px", fontWeight: "bold" }}>
            Week Number
          </Form.Label>
          <Form.Control
            autocomplete="off"
            onChange={(e) => setWeek(e.target.value)}
            className="Week"
            type="number"
            min="1"
            max="16"
            placeholder="Which week is it?"
          />
        </Form.Group>
        <br></br>

        <Form.Group controlId="formq1">
          <Form.Label style={{ fontSize: "22px", fontWeight: "bold" }}>
            What have you achieved this week?
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            style={{ maxHeight: "100", overflowY: "scroll" }}
            autocomplete="off"
            onChange={(e) => setq1(e.target.value)}
            className="answer1"
            placeholder="Think about new subjects you have covered, how could you use them in the future? "
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formq2">
          <Form.Label style={{ fontSize: "22px", fontWeight: "bold" }}>
            How would you implement what you have learned day to day?
          </Form.Label>
          <Form.Control
            as="textarea"
            style={{ maxHeight: "100", overflowY: "scroll", overflow: "100" }}
            rows={3}
            autocomplete="off"
            onChange={(e) => setq2(e.target.value)}
            placeholder="What are the technical or personal applications?"
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formq3">
          <Form.Label style={{ fontSize: "22px", fontWeight: "bold" }}>
            What could you improve on?
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            style={{ maxHeight: "100", overflowY: "scroll" }}
            autocomplete="off"
            onChange={(e) => setq3(e.target.value)}
            placeholder="How would you go about improving them and what is holding you back."
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formq4">
          <Form.Label style={{ fontSize: "22px", fontWeight: "bold" }}>
            Share an example of something that you struggled with?
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            style={{ maxHeight: "100", overflowY: "scroll" }}
            autocomplete="off"
            onChange={(e) => setq4(e.target.value)}
            placeholder="Share a tricky piece of code or a problem that you would like some help with."
          />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formq5">
          <Form.Label style={{ fontSize: "22px", fontWeight: "bold" }}>
            Is there anything else you would like to talk about in this session?
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            style={{ maxHeight: "100", overflowY: "scroll" }}
            autocomplete="off"
            onChange={(e) => setq5(e.target.value)}
            placeholder="Discuss anything that you'd like to work on.  Make plans for your next meeting."
          />
        </Form.Group>
        <br></br>
        <Button
          style={{ backgroundColor: "black", border: "none" }}
          onClick={handleClick}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
      <br></br>
      <br></br>
    </>
  );
}

export default InputForm;
