import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import LayoutPage from "./pages/Layout";
import DASHBOARD from "./pages/Dashboard";
import USER_REGISTRATION from "./pages/User/UserRegistration";
import USER_Search from "./pages/User/UserSearch";
import Default from "./pages/Default";
import Help from "./pages/Help";
import DeviceList from "./pages/Devicelist";
import License from "./pages/Profile/License";
import Login_History from "./pages/Profile/Login_History";
import Configurationpage from "./pages/Configuration";
import Transactions from "./pages/Transaction";
// import HIDDeviceFeature from './pages/HIDDeviceFeature';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/EINS_ManageX/" element={<LoginPage />} />
      <Route path="/EINS_ManageX" element={<LayoutPage />}>
        {/* index route – when you hit /EINS_ManageX/Home */}
        <Route path="Home" element={<Default />} />
        <Route path="Dashboard" element={<DASHBOARD />} />
        <Route path="User/UserRegistration" element={<USER_REGISTRATION />} />
        <Route path="User/UserSearch" element={<USER_Search />} />
        <Route path="Configuration" element={<DeviceList />} />
        <Route path="TemplateTransfer" element={<Default />} />
        <Route path="Transaction" element={<Transactions />} />
        <Route path="Profile/License" element={<License />} />
        <Route path="Profile/Login_History" element={<Login_History />} />
        <Route path="Help" element={<Help />} />
        <Route path="Configurationpage" element={<Configurationpage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
