import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Navebar } from "./pages/student/Navebar";
import { Searchcourse } from "./pages/student/Searchcourse";
import Login from "./pages/student/login";
import Register from "./pages/student/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navebar/>} />
          <Route path='/searchcourse' element={<Searchcourse/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

