import { Tabs } from "../components/TabShadowcn";
import Sound from "../components/DeviceSetting/Sound";
import OSDPSettings from "../components/DeviceSetting/OSDPSettings";
import Cardsettings from "../components/DeviceSetting/Cardsettings";
import MFAuthentication from "../components/DeviceSetting/MFAuthentication";
import Custommsg from "../components/DeviceSetting/Custommsg";
import "../styles/DeviceSettings.css";
const HIDSetting = () => {
  const myTabs = [
    {
      id: "Sound",
      label: "Sound",
      content: <Sound />,
    },
    {
      id: "OSDP",
      label: "OSDP Settings",
      content: <OSDPSettings />,
    },
    {
      id: "Custommsg",
      label: "Custom Messages",
      content: <Custommsg />,
    },
    {
      id: "MFAuthentication",
      label: "Multi Factor Authentication",
      content: <MFAuthentication />,
    },
    {
      id: "Cardsettings",
      label: "Card Settings",
      content: <Cardsettings />,
    },
  ];

  return (
    <>
      <div className="row mt-3 g-3">
        <div className="card hid-card">
          <div className="col-12 tabbgcolor">
            <Tabs tabs={myTabs} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HIDSetting;
