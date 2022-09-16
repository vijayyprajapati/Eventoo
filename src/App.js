import "./App.css";
import LoginForm from "./Components/Login and Signup/LoginForm/LoginForm";
import Form from "./Components/Login and Signup/RegistrartionForm/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import UserDashboard from "./Components/User DashBoard/UserDashboard";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Form />} />
        </Routes>
      </BrowserRouter>

      {/* <UserDashboard /> */}
    </div>
  );
}

export default App;
