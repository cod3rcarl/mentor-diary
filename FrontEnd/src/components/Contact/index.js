import React from "react";
import { Jumbotron, Table, Card } from "react-bootstrap";
import "../App/App.css";
import stars from "../images/starryNight.jpeg";
function Contact() {
  return (
    <div className="page-intro">
      <Jumbotron
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "0",
        }}
      >
        <p style={{ color: "white", fontSize: "40px", fontWeight: "550" }}>
          Contact
        </p>
        <br></br>
        <p style={{ color: "white" }}>Find contact information here</p>
      </Jumbotron>
      <br></br>
      <Card>
        <Card.Body>
          <Card.Title> School of Code Team Contact Info</Card.Title>
        </Card.Body>
      </Card>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>General</td>
            <td>bootcamp@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Chris Meah</td>
            <td>chris@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Ben Lee</td>
            <td>ben@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Banwo Idowu</td>
            <td>banwo@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Joe Trodden</td>
            <td>joe@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Tim Knight</td>
            <td>tim@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Liz Edrop</td>
            <td>liz@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Liz Kaufman</td>
            <td>liz.k@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Mell Russon</td>
            <td>mell@schoolofcode.co.uk</td>
          </tr>
          <tr>
            <td>Tao Sharma</td>
            <td>tao@schoolofcode.co.uk</td>
          </tr>
        </tbody>
      </Table>
      <br></br>

      <br></br>
    </div>
  );
}

export default Contact;
