import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Agenda from "./routes/Agenda";
import Footer from "./components/Footer";
import RedirectToGoogleForm from "./routes/Register";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/register" element={<RedirectToGoogleForm />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
