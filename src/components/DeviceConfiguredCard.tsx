import { useEffect } from "react";
import { DeviceCardTable } from "../components/DeviceCardTable";
import { GetConfiuredDevicelist } from "../hooks/eins/device/configuration/usegetdevice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { DeviceTableSkeleton } from "../components/ConfiguredDeviceTableSkeleton";

const MySwal = withReactContent(Swal);

export function DeviceConfigureCard({
  onSelectDevice,
  ConfiguredDeviceCount,
  onLoadingChange,
}: Props) {
  const navigate = useNavigate();

  const {
    data: device = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = GetConfiuredDevicelist();

  const showSkeleton = isLoading || isFetching;

  useEffect(() => {
    onLoadingChange(showSkeleton);
  }, [showSkeleton]);
  useEffect(() => {
    ConfiguredDeviceCount(device.length);
  }, [device]);

  useEffect(() => {
    if (!isError) return;

    const response = (error as any)?.response;
    const resData = response?.data;
    const statusText = response?.statusText; // check statusText too
    const status = response?.status; // check status code
    //  Unauthorized — check both message and statusText
    if (
      resData?.message === "Unauthorized" ||
      statusText === "Unauthorized" ||
      status === 401
    ) {
      MySwal.fire({
        html: "Your session has expired. Please login again.",
        icon: "warning",
        buttonsStyling: false,
        customClass: {
          confirmButton: "swal-mygradient",
          container: "swal-top-layer",
        },
        confirmButtonText: "OK",
      }).then(() => navigate("/EINS_ManageX/", { replace: true }));
      return;
    }

    const errors: string[] = resData?.errors || [];

    const html = (() => {
      if (errors.length === 0) {
        return resData?.message?.trim()
          ? resData.message
          : statusText?.trim()
            ? statusText // fallback to statusText
            : "Something went wrong. Please try again.";
      }
      if (errors.length === 1) return errors[0];
      return `<ul style="text-align:left; margin:0 auto; padding-left:1.2rem; max-width:300px;">
      ${errors.map((e: string) => `<li>${e}</li>`).join("")}
    </ul>`;
    })();

    MySwal.fire({
      html,
      icon: "error",
      buttonsStyling: false,
      customClass: {
        confirmButton: "swal-mygradient",
        container: "swal-top-layer",
      },
      confirmButtonText: "OK",
    });
  }, [isError]);

  const handleSelect = (id: number) => {
    const selectedDevice = device.find((d) => d.deviceId === id);

    if (selectedDevice) {
      onSelectDevice(selectedDevice);
    }
  };
  const handleView = (id: number) => {
    console.log(id);
    // setdevice((prev) => prev.filter((c) => c.deviceId !== id));
  };
  const handleDelete = (id: number) => {
    console.log(id);
    // setdevice((prev) => prev.filter((c) => c.deviceId !== id));
  };
  return (
    <>
      <div className="col-12">
        <div className="spaceBetweencontent"></div>
        <div>
          {isLoading ? (
            <DeviceTableSkeleton /> //  skeleton on refresh — never shows empty row
          ) : (
            <DeviceCardTable
              devices={device}
              onConnect={handleSelect}
              onView={handleView}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </>
  );
}

type Props = {
  onSelectDevice: (device: any) => void;
  ConfiguredDeviceCount: (count: number) => void;
  onLoadingChange: (loading: boolean) => void;
};
