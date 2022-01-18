import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import InputDetailsForm from "./pages/InputDetailsForm";
import Qusetion from "./pages/Qusetion";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Link to="/" className="headding">
        {" "}
        Qustion and Answer App
      </Link>

      <Routes>
        <Route path="/" element={<InputDetailsForm></InputDetailsForm>}></Route>
        <Route path="questions/:id" element={<Qusetion></Qusetion>}></Route>
        <Route path="result" element={<Result></Result>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
