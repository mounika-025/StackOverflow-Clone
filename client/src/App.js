import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fetchAllQuestions } from "./actions/question";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
  }, [dispatch]);
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
