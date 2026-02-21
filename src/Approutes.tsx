import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/Loginpage';
import LayoutPage from './pages/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<LayoutPage />} />
    </Routes>
  );
};

export default AppRoutes;