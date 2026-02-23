import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/Loginpage';
import LayoutPage from './pages/Layout';
import DASHBOARD from './pages/Dashboard';
import USER_REGISTRATION from './pages/UserRegistration';
import Default from './pages/Default'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/EINS_ManageX/" element={<LoginPage />} />
       <Route path="/EINS_ManageX" element={<LayoutPage />}>

{/* index route – when you hit /EINS_ManageX/Home */}
        <Route path="Home" element={<Default />} />
        <Route path="Dashboard" element={<DASHBOARD />} />
        <Route path="User" element={<USER_REGISTRATION />} />
        <Route path="Configuration" element={<Default />} />
        <Route path="TemplateTransfer" element={<Default />} />
        <Route path="Transaction" element={<Default />} />
        <Route path="Profile" element={<Default />} />
        <Route path="Help" element={<Default />} />

      </Route>
      
    </Routes>
  );
};

export default AppRoutes;