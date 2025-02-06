import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
