import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import London from "./components/Forecast/London.jsx";
import Paris from "./components/Forecast/Paris.jsx";
import Zurich from "./components/Forecast/Zurich";
import ScrollToTop from "./components/Scroll-to-top/index.jsx";
import Error404 from "./container/Error404/index.jsx";
import Home from './container/Home/index.jsx';
import Weather from './container/Weather/index.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/weather" element={<Weather/>}/>
          <Route exact path="/london" element={<London/>}/>
          <Route exact path="/paris" element={<Paris/>}/>
          <Route exact path="/zurich" element={<Zurich/>}/>
          <Route exact path="*" element={<Error404/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
