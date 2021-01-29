import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "../SideBarData";
import "./NavBar.css";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import socLogoPng from "../images/soc-logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { RiLogoutBoxLine } from "react-icons/ri";

function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  console.log(currentUser);
  const [sidebar, setSidebar] = useState(false);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
      console.log(error);
    }
  }

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div
      style={{
        width: "100vw",
        marginLeft: " calc(-50vw + 50%)",
      }}
    >
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={showSidebar} />
          </Link>
          <a
            style={{ marginRight: "30px" }}
            href="https://www.schoolofcode.co.uk/"
            title="School of Code Official Website"
            target="blank"
          >
            <img
              src={socLogoPng}
              alt="School of Code Logo"
              style={{
                height: "100%",
                width: "65px",
                paddingBottom: "2%",
              }}
            ></img>
          </a>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <RiLogoutBoxLine style={{ marginLeft: "31" }} />
            <Button
              className="nav-text"
              onClick={handleLogout}
              style={{ backgroundColor: "#060b26", border: "none" }}
            >
              Log Out
            </Button>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
