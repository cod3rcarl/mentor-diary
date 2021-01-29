import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function AuthApp() {
  return (
    
    <Container
    // className="d-flex align-items-center justify-content-center"
    // style={{ minHeight: "100vh" }}
    >
      <div>
        {/* className="w-100" */}
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={App} />
              <PrivateRoute exact path="/form" component={App} />
              <PrivateRoute exact path="/history" component={App} />
              <PrivateRoute exact path="/contact" component={App} /> 
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  
  );
}

export default AuthApp;
