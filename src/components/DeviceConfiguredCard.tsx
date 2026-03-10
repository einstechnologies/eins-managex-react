import { useState, useEffect } from "react";
import { DeviceCardTable } from "../components/DeviceCardTable";
import { GetConfiuredDevicelist } from "../hooks/eins/device/configuration/usegetdevice";
import type { GetDeviceDetailsResponse } from "../ts/api/eins/device/device_details/get_deviceDetails_response";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

export function DeviceConfigureCard({
  onSelectDevice,
  ConfiguredDeviceCount,
}: Props) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [device, setdevice] = useState<GetDeviceDetailsResponse[]>([]);

  //  Runs once on component load
  useEffect(() => {
    try {
      setLoading(true);
      fetchConfiguredDevices();
    } catch {
    } finally {
      setLoading(false);
    }
  }, []);

  const { mutateAsync: GetConfiuredDevice } = GetConfiuredDevicelist();
  const fetchConfiguredDevices = async () => {
    try {
      const DeviceList = await GetConfiuredDevice();
      ConfiguredDeviceCount(DeviceList.length);
      setdevice(DeviceList);
    } catch (error: any) {
      const resData = error?.response?.data;
      const errors: string[] = resData?.errors || [];

      const html = (() => {
        if (errors.length === 0) {
          // handles null, undefined, and empty string ""
          return resData?.message?.trim()
            ? resData.message
            : "Something went wrong. Please try again.";
        }

        if (errors.length === 1) return errors[0];

        return `<ul style="text-align:left; margin:0 auto; padding-left:1.2rem; max-width:300px;">
      ${errors.map((e: string) => `<li>${e}</li>`).join("")}
    </ul>`;
      })();

      MySwal.fire({
        html,
        icon: "error", //  warning for image, error for register
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
          container: "swal-top-layer",
        },
        confirmButtonText: "OK",
      });

      if (resData?.message == "Unauthorized") {
        navigate("/EINS_ManageX/", { replace: true });
        return;
      }
    }
  };

  const handleSelect = (id: number) => {
    const selectedDevice = device.find((d) => d.deviceId === id);

    if (selectedDevice) {
      onSelectDevice(selectedDevice);
    }
  };
  const handleView = (id: number) => {
    setdevice((prev) => prev.filter((c) => c.deviceId !== id));
  };
  const handleDelete = (id: number) => {
    setdevice((prev) => prev.filter((c) => c.deviceId !== id));
  };
  return (
    <>
      <div className="col-12">
        <div className="spaceBetweencontent"></div>
        <div>
          <DeviceCardTable
            devices={device}
            onConnect={handleSelect}
            onView={handleView}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
}

type Props = {
  onSelectDevice: (device: any) => void;
  ConfiguredDeviceCount: (count: number) => void;
};
