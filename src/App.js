import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigatonBar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/notes/NoteState";
import AlertMsg from "./Components/AlertMsg";

function App() {
  return (
    <>
      <NoteState>
        <HashRouter>
          <NavigationBar />
          <AlertMsg message="This is an Alert" />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </HashRouter>
      </NoteState>
    </>
  );
}

export default App;
