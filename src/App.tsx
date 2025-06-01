import { Routes, Route } from 'react-router-dom';
import HalamanUtama from "./pages/HalamanUtama";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="app-wrapper">
      <header>
        <Navbar />
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HalamanUtama />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;