import React from "react";
import { useState } from "react";
import CustomModal from "../components/CustomModal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { usehidLogin } from "../hooks/hid/hidlogin/usehidLogin";
import { useHidGetInfo } from "../hooks/hid/hidgetinfo/usehidgetinfo";
import { usedevice } from "../hooks/eins/device/configuration/usedevice";

import { useNavigate } from "react-router-dom";
interface ConfigureDeviceModalProps {
  show: boolean;
  onClose: () => void;
  setLoading: (value: boolean) => void;
}

const MySwal = withReactContent(Swal);

const ConfigureDeviceModal = ({
  show,
  onClose,
  setLoading,
}: ConfigureDeviceModalProps) => {
  const [step, setStep] = useState<number>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isCloud, setIsCloud] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [deviceName, setDeviceName] = useState("");
  const [deviceModel, setDeviceModel] = useState("");
  const [port, setPort] = useState("");
  const [terminalId, setTerminalId] = useState("");
  const [serialno, setserialno] = useState("");
  const [firmware, setfirmware] = useState("");

  const [ipParts, setIpParts] = useState(["", "", "", ""]);
  const [subnetParts, setSubnetParts] = useState(["", "", "", ""]);
  const [gatewayParts, setGatewayParts] = useState(["", "", "", ""]);
  const [serverIPParts, setServerIPParts] = useState(["", "", "", ""]);
  const [dnsParts, setDnsParts] = useState(["", "", "", ""]);
  const [secondarydns, setsecondarydns] = useState(["", "", "", ""]);
  const [macAddress, setMacAddress] = useState(["", "", "", "", "", ""]);

  const navigate = useNavigate();

  const handleIPAddressChange = (
    index: number,
    value: string,
    parts: string[],
    setParts: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    const cleanedValue = value.replace(/\D/g, "");

    if (Number(cleanedValue) > 255) return;

    const newParts = [...parts];
    newParts[index] = cleanedValue;
    setParts(newParts);

    if (cleanedValue.length === 3) {
      const inputs = document.querySelectorAll(".ip-input-wrapper input");
      const currentIndex = Array.from(inputs).indexOf(
        document.activeElement as Element,
      );

      if (currentIndex < inputs.length - 1) {
        (inputs[currentIndex + 1] as HTMLInputElement).focus();
      }
    }
  };
  const { mutateAsync: connectDeviceAsync } = usehidLogin();
  const { mutateAsync: getDeviceInfoAsync } = useHidGetInfo();

  const { mutateAsync } = usedevice();

  const [showModal, setShowModal] = useState(false);
  const handleSaveDevice = async () => {
    setLoading(true);
    const startTime = Date.now();
    const ipAddress = ipParts.join(".");
    const subnetMask = subnetParts.join(".");
    const gateway = gatewayParts.join(".");
    const serverIP = serverIPParts.join(".");

    try {
      // 1️⃣ CONNECT DEVICE
      const loginData = await connectDeviceAsync({
        ipAddress,
        credentials: {
          login: username,
          password: password,
        },
      });

      const session = loginData.session;

      if (!session) {
        MySwal.fire({
          icon: "error",
          text: "Login failed",
          customClass: {
            confirmButton: "swal-mygradient",
            container: "swal-top-layer",
          },
        });
        return;
      }

      // 2️⃣ GET DEVICE INFO
      const info = await getDeviceInfoAsync({
        host: `http://${ipAddress}`,
        session: session,
      });

      console.log("Device Info", info);

      const terminalIdValue = info?.device_id ?? "";
      const macValue = info?.network?.mac ?? "";
      const serialValue = info?.serial ?? "";
      const firmwareValue = info?.version ?? "";

      const primaryDNS = info?.network?.primary_dns ?? "";
      const secondaryDNS = info?.network?.secondary_dns ?? "";

      // 3️⃣ SAVE DEVICE
      await mutateAsync({
        DeviceName: deviceName,
        DeviceModel: deviceModel,
        DeviceType: "HID",
        IsPortForward: isCloud,
        Mode: "IN",
        TerminalID: terminalIdValue,
        IPAddress: ipAddress,
        SubnetMask: subnetMask,
        GatewayAddress: gateway,
        PortNo: port,
        GateName: deviceName,
        MACAddress: macValue,
        ServerIP: serverIP,
        Status: true,
        PrimaryDNS: primaryDNS,
        SecondaryDNS: secondaryDNS,
        FirmwareVersion: firmwareValue,
        SerialNumber: serialValue,
        ListeningPort: 3000,
      });
      const elapsed = Date.now() - startTime;
      const minLoaderTime = 800; // 1 second

      if (elapsed < minLoaderTime) {
        await new Promise((resolve) =>
          setTimeout(resolve, minLoaderTime - elapsed),
        );
      }

      setLoading(false);
      MySwal.fire({
        icon: "success",
        text: "Device configured successfully!",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
          container: "swal-top-layer",
        },
        confirmButtonText: "OK",
      });
      setStep(1);
      setLoading(false);
      resetForm();
      onClose();
    } catch (error: any) {
      const elapsed = Date.now() - startTime;
      const minLoaderTime = 800;
      if (elapsed < minLoaderTime) {
        await new Promise((resolve) =>
          setTimeout(resolve, minLoaderTime - elapsed),
        );
      }

      setLoading(false);

      setStep(1);

      const resData = error?.response?.data;
      if (resData?.message == "Unauthorized") {
        navigate("/EINS_ManageX/", { replace: true });
        return;
      }
      MySwal.fire({
        icon: "error",
        text: resData?.message || "Device configuration failed",
        customClass: {
          confirmButton: "swal-mygradient",
          container: "swal-top-layer",
        },
      });
    } finally {
    }
  };

  const resetForm = () => {
    setDeviceName("");
    setDeviceModel("");
    setPort("");
    setTerminalId("");

    setUsername("");
    setPassword("");

    setIpParts(["", "", "", ""]);
    setSubnetParts(["", "", "", ""]);
    setGatewayParts(["", "", "", ""]);
    setServerIPParts(["", "", "", ""]);
    setDnsParts(["", "", "", ""]);
  };

  return (
    <CustomModal show={show} onClose={onClose} title="Configure Device">
      {/* STEP 1 */}

      {step === 1 && (
        <>
          <h6>Step 1: Device Info</h6>

          <fieldset className="text-input-group">
            <label>Device Model</label>
            <select
              value={deviceModel}
              onChange={(e) => setDeviceModel(e.target.value)}
            >
              <option value="">Select Model</option>
              <option value="HID AMICOVL35LF">HID AMICOVL35LF</option>
              <option value="HID AMICOVL70LF">HID AMICOVL70LF</option>
            </select>
          </fieldset>

          <fieldset className="text-input-group">
            <label>Device Name</label>
            <input
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
            />
          </fieldset>

          <button className="btn btn-primary" onClick={() => setStep(2)}>
            Next
          </button>
        </>
      )}

      {/* STEP 2 */}

      {step === 2 && (
        <>
          <h6>Step 2: Network Settings</h6>

          {/* IP Address */}

          <fieldset className="text-input-group">
            <label>IP Address</label>

            <div className="ip-input-wrapper">
              {ipParts.map((part, index) => (
                <React.Fragment key={index}>
                  <input
                    key={index}
                    maxLength={3}
                    value={part}
                    onChange={(e) =>
                      handleIPAddressChange(
                        index,
                        e.target.value,
                        ipParts,
                        setIpParts,
                      )
                    }
                  />
                  {index < 3 && <span>.</span>}
                </React.Fragment>
              ))}
            </div>
          </fieldset>

          {/* MAC  Address */}

          {/* <fieldset className="text-input-group">
            <label>MAC Address</label>

            <div className="ip-input-wrapper">

              {macAddress.map((part, index) => (
                <React.Fragment key={index}>
                  <input
                    maxLength={2}
                    value={part}
                    onChange={(e) => {
                      const newParts = [...macAddress];
                      newParts[index] = e.target.value.toUpperCase();
                      setMacAddress(newParts);
                    }}
                  />

                  {index < 5 && <span>:</span>}
                </React.Fragment>
              ))}

            </div>
          </fieldset> */}

          {/* Subnetmask */}

          <fieldset className="text-input-group">
            <label>Subnet Mask</label>
            <div className="ip-input-wrapper">
              {subnetParts.map((part, index) => (
                <React.Fragment key={index}>
                  <input
                    key={index}
                    maxLength={3}
                    value={part}
                    onChange={(e) =>
                      handleIPAddressChange(
                        index,
                        e.target.value,
                        subnetParts,
                        setSubnetParts,
                      )
                    }
                  />
                  {index < 3 && <span>.</span>}
                </React.Fragment>
              ))}
            </div>
          </fieldset>

          {/* Gateway */}

          <fieldset className="text-input-group">
            <label>Gateway</label>
            <div className="ip-input-wrapper">
              {gatewayParts.map((part, index) => (
                <React.Fragment key={index}>
                  <input
                    key={index}
                    maxLength={3}
                    value={part}
                    onChange={(e) =>
                      handleIPAddressChange(
                        index,
                        e.target.value,
                        gatewayParts,
                        setGatewayParts,
                      )
                    }
                  />
                  {index < 3 && <span>.</span>}
                </React.Fragment>
              ))}
            </div>
          </fieldset>

          {/* Server IP */}

          <fieldset className="text-input-group">
            <label>Server IP</label>
            <div className="ip-input-wrapper">
              {serverIPParts.map((part, index) => (
                <React.Fragment key={index}>
                  <input
                    key={index}
                    maxLength={3}
                    value={part}
                    onChange={(e) =>
                      handleIPAddressChange(
                        index,
                        e.target.value,
                        serverIPParts,
                        setServerIPParts,
                      )
                    }
                  />
                  {index < 3 && <span>.</span>}
                </React.Fragment>
              ))}
            </div>
          </fieldset>

          {/* Preferred DNS */}

          <fieldset className="text-input-group">
            <label>Preferred DNS</label>
            <div className="ip-input-wrapper">
              {dnsParts.map((part, index) => (
                <React.Fragment key={index}>
                  <input
                    key={index}
                    maxLength={3}
                    value={part}
                    onChange={(e) =>
                      handleIPAddressChange(
                        index,
                        e.target.value,
                        dnsParts,
                        setDnsParts,
                      )
                    }
                  />
                  {index < 3 && <span>.</span>}
                </React.Fragment>
              ))}
            </div>
          </fieldset>

          {/* TERMINAL */}

          {/* <fieldset className="text-input-group">
            <label>Terminal ID</label>
            <input
              value={terminalId}
              onChange={(e) => setTerminalId(e.target.value)}
            />
          </fieldset> */}
          {/* PORT */}

          <fieldset className="text-input-group">
            <label>Device Port</label>
            <input value={port} onChange={(e) => setPort(e.target.value)} />
          </fieldset>
          {/* CLOUD */}

          <fieldset className="cloud-checkbox">
            <input
              type="checkbox"
              checked={isCloud}
              onChange={(e) => setIsCloud(e.target.checked)}
            />
            <label>Is Cloud</label>
          </fieldset>

          {/* USERNAME */}

          <fieldset className="text-input-group">
            <label>Device Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </fieldset>

          {/* PASSWORD */}

          <fieldset className="text-input-group password-field">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={
                    showPassword ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"
                  }
                ></i>
              </span>
            </div>
          </fieldset>

          {/* BUTTONS */}

          {/* <button type="button"
            className="btn btn-primary me-2"
            onClick={handleConnect}
          >
            Connect
          </button> */}

          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={() => setStep(1)}
          >
            Back
          </button>

          <button
            type="button"
            className="btn btn-success"
            onClick={handleSaveDevice}
          >
            Finish
          </button>
        </>
      )}
    </CustomModal>
  );
};

export default ConfigureDeviceModal;
