import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
