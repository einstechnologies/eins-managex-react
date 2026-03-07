import "../styles/UserTab.css";
import { Tabs } from './TabShadowcn';
import { RestartDevice } from './DeviceFeature/RestartDevice';
import { TimeBasedAntipassback } from './DeviceFeature/TimeBasedAntipassback';
import { DoorSensorSettings } from './DeviceFeature/DoorSensorSettings';
import { DeliberateEmergency } from './DeviceFeature/DeliberateEmergency';
import { BuzzerSettings } from './DeviceFeature/BuzzerSettings';
import { AlarmsSettings } from './DeviceFeature/AlarmsSettings';
import { SetLogo } from './DeviceFeature/SetLogo';
import '../styles/DeviceFeature.css'

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
    { id: "RestartDevice", label: "Restart Device", content: <RestartDevice /> },
    { id: "TimeBasedAntipassback", label: "Time Based Antipassback", content: <TimeBasedAntipassback /> },
    { id: "DoorSensorSettings", label: "Door Sensor Settings", content: <DoorSensorSettings /> },
    { id: "DeliberateEmergency", label: "Deliberate Emergency", content: <DeliberateEmergency /> },
    { id: "BuzzerSettings", label: "Buzzer Settings", content: <BuzzerSettings /> },
    { id: "AlarmsSettings", label: "Alarms Settings", content: <AlarmsSettings /> },
    { id: "SetLogo", label: "Set Logo", content: <SetLogo /> },
  ];

  return (
    <>
      <div className="row mt-3 g-3 spacebottom">
        <div className="card hid-card spacebottomwhitediv">
          <div className='col-12 tabbgcolor'>
            <Tabs tabs={myTabs} />
          </div>
        </div>
      </div>
    </>
  )
}
export default HIDFeature;