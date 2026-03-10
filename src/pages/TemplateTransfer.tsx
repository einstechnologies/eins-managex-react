import "../styles/TemplateTransfer.css";
import { useState } from "react";
import { DeviceTable } from "../components/TemplateTransferDeviceList";
import { UserTable } from "../components/TemplateTransferEmployeeList";
import type { User } from "../components/TemplateTransferEmployeeList";
import type { Device } from "../components/TemplateTransferDeviceList";
import HelpIcon from "../components/HelpIcon";

function TemplateTransfer() {
  const [devices] = useState<Device[]>([
    {
      id: 1,
      TerminalId: "7565365635565",
      deviceName: "Hid amico 70",
      ipAddress: "192.168.1.10",
    },
    {
      id: 2,
      TerminalId: "7565365635567",
      deviceName: "Hid amico 35",
      ipAddress: "192.168.1.11",
    },
    {
      id: 3,
      TerminalId: "7565365635534",
      deviceName: "Hid amico 70",
      ipAddress: "192.168.1.11",
    },
    {
      id: 4,
      TerminalId: "7565365635765",
      deviceName: "Hid amico 70",
      ipAddress: "192.168.1.11",
    },
    {
      id: 5,
      TerminalId: "7565365635578",
      deviceName: "Hid amico 70",
      ipAddress: "192.168.1.11",
    },
    // { id: 6, TerminalId: "7565365635532", deviceName: "Hid amico 35", ipAddress: "192.168.1.11" },
    // { id: 7, TerminalId: "7565365635578", deviceName: "Hid amico 70", ipAddress: "192.168.1.11" },
    // { id: 8, TerminalId: "7565365635578", deviceName: "Hid amico 70", ipAddress: "192.168.1.11" },
  ]);

  const [selectedDevices, setSelectedDevices] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    setSelectedDevices((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id],
    );
  };

  //User

  const [users] = useState<User[]>([
    { id: 1, UserId: "EMP001", UserName: "Rahul Patil" },
    { id: 2, UserId: "EMP002", UserName: "Amit Shah" },
    { id: 3, UserId: "EMP003", UserName: "Sneha Joshi" },
    { id: 4, UserId: "EMP004", UserName: "Pooja Kulkarni" },
    { id: 5, UserId: "EMP005", UserName: "Rohit Patil" },
    { id: 6, UserId: "EMP005", UserName: "Rohit Patil" },
    // { id: 7, UserId: "EMP005", UserName: "Rohit Patil" },
    // { id: 5, UserId: "EMP005", UserName: "Rohit Patil" },
    // { id: 6, UserId: "EMP005", UserName: "Rohit Patil" },
    // { id: 7, UserId: "EMP005", UserName: "Rohit Patil" }
  ]);

  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleUserSelect = (id: number) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id],
    );
  };

  return (
    <>
      <div className="row mb-3 mt-1 g-3">
        <div className="card hid-card">
          <div className="Ttnfr-content-screen templateTransfer">
            <div className="header-title d-flex justify-content-between">
              <span>TEMPLATE TRANSFER</span>

              <div>
                <HelpIcon />
              </div>
              {/* <span className='vertical-divider'></span>
                    <span
                        className='link'
                        onClick={() => navigate("/EINS_ManageX/Home")}
                    >
                        HOME
                    </span> - Template Transfer */}
            </div>
            {/* End Header */}

            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="card Ttnfr-card Ttnfr-content-screen template-transfer">
                    <span className="card-title">Device list</span>
                    <hr />

                    <div className="row gy-3">
                      {/* Device Name + Device IP */}
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <div className="custom-control custom-radio custom-control-inline radio-group templateTransfer d-flex align-items-center">
                              <input
                                type="radio"
                                id="rdo_DeviceName"
                                name="rdo_DeviceFilter"
                                className="custom-control-input me-2 mb-3"
                              />

                              <fieldset className="text-input-group align-items-center gap-2 w-100">
                                <label htmlFor="DeviceName" className="mb-0">
                                  Device Name
                                </label>
                                <input
                                  id="DeviceName"
                                  className="form-control"
                                />
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="custom-control custom-radio custom-control-inline radio-group templateTransfer d-flex align-items-center">
                              <input
                                type="radio"
                                id="rdo_DeviceIP"
                                name="rdo_DeviceFilter"
                                className="custom-control-input me-2 mb-3"
                              />

                              <fieldset className="text-input-group  align-items-center gap-2 w-100">
                                <label htmlFor="DeviceIP" className="mb-0">
                                  Device IP
                                </label>
                                <input id="DeviceIP" className="form-control" />
                              </fieldset>
                            </div>
                          </div>
                        </div>
                        <div className="row m-1"></div>

                        <div className="col-sm-12 col-md-12 col-lg-12 rowCheckPlease">
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 showAllRadioTextAlign">
                            <input
                              type="radio"
                              id="rdo_DeviceShowAll"
                              name="rdo_DeviceFilter"
                              className="custom-control-input me-2 "
                            />
                            <label
                              id="rdo_DeviceShowAll"
                              htmlFor="rdo_DeviceShowAll"
                              className="mb-0"
                            >
                              Show All Devices
                            </label>
                          </div>
                          <div className="col-6 col-sm-6 col-md-6 col-lg-6 showAllRadioTextAlign1">
                            <div className="savebuttonTemplateTrans Ttnfr-content-screen">
                              <button className="btn-outline-soft-greenTT Ttnfr-content-screen">
                                Search
                              </button>
                              <button className="btn-outline-soft-redTT Ttnfr-content-screen">
                                Clear
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Show All + Buttons */}
                      <div className="col-12">

                        <DeviceTable
                          devices={devices}
                          selectedDevices={selectedDevices}
                          onSelect={handleSelect}
                        />

                      </div>
                    </div>
                  </div>
                </div>
                {/* END Device List */}
                <div className="col-12 col-md-12 col-lg-6">
                  <div className="card Ttnfr-card  TemplateDevice template-transfer">
                    <span className="card-title">User list</span>
                    <hr />
                    <div className="row g-0 gy-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12 col-lg-6">
                            <div className="custom-control custom-radio custom-control-inline radio-group templateTransfer d-flex align-items-center">
                              <input
                                type="radio"
                                id="rdo_DeviceName"
                                name="rdo_DeviceFilter"
                                className="custom-control-input me-2 mb-3"
                              />

                              <fieldset className="text-input-group align-items-center gap-2 w-100">
                                <label htmlFor="DeviceName" className="mb-0">
                                  User Name
                                </label>
                                <input
                                  id="DeviceName"
                                  className="form-control"
                                />
                              </fieldset>
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="custom-control custom-radio custom-control-inline radio-group templateTransfer d-flex align-items-center">
                              <input
                                type="radio"
                                id="rdo_DeviceIP"
                                name="rdo_DeviceFilter"
                                className="custom-control-input me-2 mb-3"
                              />

                              <fieldset className="text-input-group  align-items-center gap-2 w-100">
                                <label htmlFor="DeviceIP" className="mb-0">
                                  User Id
                                </label>
                                <input id="DeviceIP" className="form-control" />
                              </fieldset>
                            </div>
                          </div>
                        </div>
                        <div className="row m-1"></div>

                        <div className="rowCheckPlease ">
                          <div className="col-6 col-lg-6 showAllRadioTextAlign">
                            <input
                              type="radio"
                              id="rdo_DeviceShowAll"
                              name="rdo_DeviceFilter"
                              className="custom-control-input me-2 "
                            />
                            <label
                              id="rdo_DeviceShowAll"
                              htmlFor="rdo_DeviceShowAll"
                              className="mb-0"
                            >
                              Show All User
                            </label>
                          </div>
                          <div className="col-6 col-lg-6 showAllRadioTextAlign1">
                            <div className="savebuttonTemplateTrans Ttnfr-content-screen">
                              <button className="btn-outline-soft-greenTT Ttnfr-content-screen">
                                Search
                              </button>
                              <button className="btn-outline-soft-redTT Ttnfr-content-screen">
                                Clear
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <UserTable
                          Users={users}
                          selectedusers={selectedUsers}
                          onSelect={handleUserSelect}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="btntemplateTransfer templateTransfer">
                    <button className=" btn-outline-soft-greenTT templateTransfer">
                      Transfer
                    </button>
                    <button className="  btn-outline-soft-yellowTT Ttnfr-content-screen">
                      Remove
                    </button>
                    <button className="btn-outline-soft-blueTT templateTransfer">
                      Sync
                    </button>
                    <button className="btn-outline-soft-redTT templateTransfer">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TemplateTransfer;
