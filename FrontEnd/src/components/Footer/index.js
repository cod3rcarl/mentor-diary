import React from "react";
import { Table } from "react-bootstrap";
import { FiTwitter, FiFacebook, FiYoutube, FiLinkedin } from "react-icons/fi";
import { AiOutlineMedium } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import "../App/App.css";

export default function Footer() {
  return (
    <footer>
      {" "}
      <Table
        style={{
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>
              <a
                href="https://twitter.com/theschoolofcode?lang=en"
                target="blank"
              >
                <FiTwitter style={{ color: "black" }} />
              </a>
            </th>
            <th>
              <a href="https://www.facebook.com/schoolofcode" target="blank">
                <FiFacebook style={{ color: "black" }} />
              </a>
            </th>
            <th>
              <a
                href="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg"
                target="blank"
              >
                <FiYoutube style={{ color: "black" }} />
              </a>
            </th>
            <th>
              <a
                href="https://www.linkedin.com/school/school-of-code/"
                target="blank"
              >
                <FiLinkedin style={{ color: "black" }} />
              </a>
            </th>
            <th>
              <a href="https://blog.schoolofcode.co.uk/" target="blank">
                <AiOutlineMedium style={{ color: "black" }} />
              </a>
            </th>
            <th>
              <a
                href="https://www.google.co.uk/maps/place/School+of+Code/@52.4755077,-1.8859678,17z/data=!3m1!4b1!4m5!3m4!1s0x4870bc8ef033dafd:0x716efdbd64f96d78!8m2!3d52.4892523!4d-1.8883594"
                target="blank"
              >
                <SiGooglemaps style={{ color: "black" }} />
              </a>
            </th>
            {/* <Link to="https://www.facebook.com/schoolofcode">
            <th>
              <FiFacebook style={{ color: "black" }} />
            </th>
          </Link>
          <Link to="https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg">
            <th>
              <FiYoutube style={{ color: "black" }} />
            </th>
          </Link>
          <Link to="https://www.linkedin.com/school/school-of-code/">
            <th>
              <FiLinkedin style={{ color: "black" }} />
            </th>
          </Link>
          <Link to="https://blog.schoolofcode.co.uk/">
            <th>
              <AiOutlineMedium style={{ color: "black" }} />
            </th>
          </Link>
          <Link to="https://www.google.co.uk/maps/place/School+of+Code/@52.4755077,-1.8859678,17z/data=!3m1!4b1!4m5!3m4!1s0x4870bc8ef033dafd:0x716efdbd64f96d78!8m2!3d52.4892523!4d-1.8883594">
            <th>
              <SiGooglemaps style={{ color: "black" }} />
            </th>
          </Link> */}
          </tr>
        </thead>
      </Table>
    </footer>
  );
}
