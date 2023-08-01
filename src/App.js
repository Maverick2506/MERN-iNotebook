import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigatonBar";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <>
      <HashRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
