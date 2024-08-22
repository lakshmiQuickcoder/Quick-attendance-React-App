import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar MainHeading="Test" />

        <div className="container">
          {/* <TextForm Heading="Enter the test"/> */}
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-center fs-3 mt-3 mb-2">
                  My First React App
                </h1>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
