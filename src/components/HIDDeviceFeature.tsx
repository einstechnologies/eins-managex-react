import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/UserTab.css";
import { Tabs } from "./TabShadowcn";
import { RestartDevice } from "./RestartDevice";
import { TimeBasedAntipassback } from "./TimeBasedAntipassback";
import { DoorSensorSettings } from "./DoorSensorSettings";
import { DeliberateEmergency } from "./DeliberateEmergency";
import { BuzzerSettings } from "./BuzzerSettings";
import { AlarmsSettings } from "./AlarmsSettings";
import { SetLogo } from "./SetLogo";

// import { UserFace } from './components/UserFace';
// import { UserCard } from './components/UserCard';
// import { UserPin } from './components/UserPin';
// import { Tabs } from '../components/TabShadowcn';
const HIDFeature = () => {
  // const myTabs = [
  //         // { id: "face", label: "Face", content: <UserFace /> },
  //         // { id: "card", label: "Card", content: <UserCard /> },
  //         // { id: "pin", label: "PIN", content: <UserPin /> },
  //     ];

  const myTabs = [
    {
      id: "RestartDevice",
      label: "Restart Device",
      content: <RestartDevice />,
    },
    {
      id: "TimeBasedAntipassback",
      label: "Time Based Antipassback",
      content: <TimeBasedAntipassback />,
    },
    {
      id: "DoorSensorSettings",
      label: "Door Sensor Settings",
      content: <DoorSensorSettings />,
    },
    {
      id: "DeliberateEmergency",
      label: "Deliberate Emergency",
      content: <DeliberateEmergency />,
    },
    {
      id: "BuzzerSettings",
      label: "Buzzer Settings",
      content: <BuzzerSettings />,
    },
    {
      id: "AlarmsSettings",
      label: "Alarms Settings",
      content: <AlarmsSettings />,
    },
    { id: "SetLogo", label: "Set Logo", content: <SetLogo /> },
  ];

  return (
    <div className="row mt-3 g-3">
      <div className="col-12 tabbgcolor">
        <Tabs tabs={myTabs} />
      </div>
    </div>
  );
};
export default HIDFeature;
