import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Calculator from "./components/pages/Calculator";
import Contact from "./components/pages/Contact";
import { Programs } from "./components/pages/Programs";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import BmiCalc from "./components/BmiCalc";
import CalorieCalc from "./components/CalorieCalc";
import RmCalc from "./components/RmCalc";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/calculators" element={<Calculator />}>
            <Route path="bmi" element={<BmiCalc />} />
            <Route path="calorie" element={<CalorieCalc />} />
            <Route path="rm" element={<RmCalc />} />
          </Route>

          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
