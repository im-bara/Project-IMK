import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HalamanUtama from "./pages/HalamanUtama";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HalamanUtama />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/ForgotPassword" element={<ForgotPassword />}/>
      </Routes>
    </Router>
  );
}


export default App;