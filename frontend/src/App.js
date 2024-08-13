import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import CoderDashboard from "./dashboards/CoderDashboard";
import Template from "./Template";
import AdminDashboard from "./dashboards/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Template />}>
              <Route index element={<CoderDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Route>
            <Route path="*" element={<Notfound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
