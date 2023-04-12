//import React from "react"
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from "./Home";
import Stat from "./Stat";
import Welcome from "./Welcome"
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../contexts/Theme';


function App() {
  return (
    
    // <ThemeProvider theme={theme}>
    <Container className="d-flex align-item-center justify-content-center w-100%"
    style = {{minHeight: "100vh", padding:0}}>

      <div className="w-100"style={{maxWidth: '470px'}}>
        <Router>
        <AuthProvider>
          <Routes>

            <Route path="/profile" element = {
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }
            ></Route>

            <Route path="/update-profile" element = {
              <PrivateRoute>
                <UpdateProfile/>
              </PrivateRoute>
            }
            ></Route>

            <Route path="/home" element = {
              <PrivateRoute>
                <Home/>
              </PrivateRoute>
            }
            ></Route>

            <Route path="/stat" element = {
              <PrivateRoute>
                <Stat/>
              </PrivateRoute>
            }
            ></Route>

            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

          </Routes>
        </AuthProvider>
        </Router>
      </div>
    </Container>
    // </ThemeProvider>
  );
}

export default App;
