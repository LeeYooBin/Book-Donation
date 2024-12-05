import { 
  BrowserRouter as Router, 
  Route, 
  Routes } 
from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donated from "./pages/Donated";
import Donate from "./pages/Donate";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donated" element={<Donated />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
