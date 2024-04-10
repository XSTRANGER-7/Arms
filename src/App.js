 import React from "react";
 import Header from "../../myapp4/src/components/Header";
//  import Home from "../../myapp4/src/components/Home";
 import Footer from "../../myapp4/src/components/Footer";
 import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
 import RegisterAndLogin from "./RegisterAndLogin";
 import HomeScreen from "./components/Home"; 
import ForgotPassword from "./ForgotPassword"; 
 import "./styles/App.scss"; 
 import "./styles/header.scss";
 import "./styles/home.scss";
 import "./styles/Footer.scss";
 import "./styles/mediaquries.scss";
function App() {
  return (
    <Router>
      <Header/>
            <div>
                <Routes>
                    <Route path="/" element={<RegisterAndLogin/>} />
                    <Route path="/home" element={<HomeScreen/>} />
                    <Route path="/reset" element={<ForgotPassword/>} /> 
                </Routes>
            </div>
      <Footer/>
    </Router>
  );
}

export default App;
