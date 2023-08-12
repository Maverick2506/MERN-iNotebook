import "./App.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./Components/NavigatonBar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Context/notes/NoteState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AlertMsg from "./Components/AlertMsg";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <NavigationBar />
          <AlertMsg alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home showAlert={showAlert} />}
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            ></Route>
            <Route
              exact
              path="/signup"
              element={<Signup showAlert={showAlert} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
