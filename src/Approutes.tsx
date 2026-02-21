import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/Loginpage';
import LayoutPage from './pages/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/EINS_ManageX/" element={<LoginPage />} />
      <Route path="/EINS_ManageX/Home" element={<LayoutPage />} />
    </Routes>
  );
};

export default AppRoutes;