import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Transaction.css";
import "../index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import HelpIcon from "../components/HelpIcon";

type TransactionType = "Valid" | "Invalid" | "Door Secure";

interface Transaction {
  CardNo: string;
  Name: string;
  EventDate: string;
  EventTime: string;
  Cardno: string;
  DeviceName: string;
  EventType: TransactionType;
  PhotoUrl?: string;  // Optional photo URL
}


// ----------------------------
// Webpack require.context for dynamic imports
// ----------------------------
// declare const require: {
//   context(
//     path: string,
//     deep?: boolean,
//     filter?: RegExp
//   ): {
//     keys(): string[];
//     <T = any>(id: string): T;
//   };
// };

//  // Dynamically import all images from assets folder
// const images = require.context("../assets", false, /\.(png|jpe?g|svg)$/);
// const photoMap: Record<string, string> = {};
// images.keys().forEach((key) => {
//   const name = key.replace("./", "").replace(/\.(png|jpe?g|svg)$/, "").toLowerCase();
//   photoMap[name] = images(key).default || images(key);
// });


const transactions: Transaction[] = [
  { CardNo: "123456", Name: "Hemangi Keluskar", EventDate: "04/03/2026", EventTime: "4:41 PM", Cardno: "123456", DeviceName: "HIDAMICO", EventType: "Valid", PhotoUrl: "./employeephotos/Hemangi.jpg" },
  { CardNo: "112111", Name: "Tanaya Ghosh", EventDate: "04/03/2026", EventTime: "4:41 PM", Cardno: "3453534", DeviceName: "HIDAMICO", EventType: "Invalid", PhotoUrl: "./employeephotos/Tanaya.jpg" },
  { CardNo: "1233213123", Name: "Anita Anpat", EventDate: "04/03/2026", EventTime: "4:41 PM", Cardno: "23456", DeviceName: "HIDAMICO", EventType: "Door Secure", PhotoUrl: "./employeephotos/Anita.jpeg" },
  { CardNo: "12311", Name: "Kunal Lohar", EventDate: "04/03/2026", EventTime: "4:41 PM", Cardno: "54544", DeviceName: "HIDAMICO", EventType: "Invalid", PhotoUrl: "./employeephotos/Kunal.jpg" },
  { CardNo: "131312", Name: "Rohit Salvi", EventDate: "04/03/2026", EventTime: "4:41 PM", Cardno: "2323232", DeviceName: "HIDAMICO", EventType: "Valid", PhotoUrl: "./employeephotos/Rohit.jpeg" },
  // { CardNo: "121212", Name: "Sachin", EventDateTime: "2018-01-03 4:41 PM", Cardno: "09898123", DeviceName: "HIDAMICO", EventType: "Valid", PhotoUrl: "./employeephotos/Sachin.jpg" },
  // { CardNo: "4343433", Name: "Gaurav", EventDateTime: "2018-01-03 4:41 PM", Cardno: "867676", DeviceName: "HIDAMICO", EventType: "Door Secure", PhotoUrl: "./employeephotos/Gaurav.jpeg" },
];


const validCount = transactions.filter(
  (tx) => tx.EventType === "Valid"
).length;

const invalidCount = transactions.filter(
  (tx) => tx.EventType === "Invalid"
).length;



// Change here: use a plain function returning JSX.Element
export default function Transactions() {

  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [date, setDate] = useState(null);

  // Open first modal
  const handleExportClick = () => {
    setShowModal(true);
  };

  // Confirm first modal → close first and open second
  const handleConfirmFirstModal = () => {
    setShowModal(false);
    setShowViewModal(true); // open second modal
  };

  // Close first modal
  const handleCloseFirstModal = () => {
    setShowModal(false);
  };

  // Confirm second modal → perform export/print
  const handleConfirmSecondModal = () => {
    setShowViewModal(false);
    // window.print(); // perform export/print
  };

  // Close second modal
  const handleCloseSecondModal = () => {
    setShowViewModal(false);
  };

  return (
    <div className="user-content-screen marginrght">

      <div className='header-title headcol'>
        <div className="col-md-3 col-12 d-flex align-items-center headerbottomspace">
          <span>TRANSACTION</span>
        </div>
        {/* Center: Transaction Summary */}
        <div className="col-md-6 col-12 headerbottomspace">
          <div className="card shadow-sm border-0 text-center">
            <div className="card-body py-1">
              <div className="row text-center align-items-center">

                {/* Valid Transactions */}
                <div className="col-6 border-end">
                  <h6 className="mb-1 text-success">
                    Valid Transactions
                    <span className="badge bg-success fs-6 px-3 py-1 ms-2 mt-2">
                      3
                      {/* {validCount} */}
                    </span>
                  </h6>
                </div>

                {/* Invalid Transactions */}
                <div className="col-6">
                  <h6 className="mb-1 text-danger">
                    Invalid Transactions
                    <span className="badge bg-danger fs-6 px-3 py-1 ms-2 mt-2">
                      3
                      {/* {invalidCount} */}
                    </span>
                  </h6>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Right: Print Button */}
        <div className="col-md-3 col-12 d-flex justify-content-md-end mt-2 mt-md-0 headerbottomspace">
          <button
            type="button"
            className="btn btn-warning custom-print-btn export-right-margin"
            onClick={handleExportClick}
          >
            🖨 Export
          </button>
          <div className="sound-page-header-right">
            <HelpIcon />
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="content-body">
        <div id="transactions">
          {/* Table Header */}
          {/* <div className="transactions-table-th d-none d-md-block"> */}
          <div className="transactions-table-theader d-flex flex-column gap-3">
            <div className="row px-1 py-3 text-center">
              <div className="col py-0"><p className="mb-0"><strong>Photo</strong></p></div>
              <div className="col py-0"><p className="mb-0"><strong>User Name</strong></p></div>
              <div className="col py-0"><p className="mb-0"><strong>Event Date <br />(dd-mm-yyyy)</strong></p></div>
              <div className="col py-0"><p className="mb-0"><strong>Event Time <br />(hh:mm)</strong></p></div>
              <div className="col py-0"><p className="mb-0"><strong>Card No. /<br /> Bio-User Id</strong></p></div>
              <div className="col py-0"><p className="mb-0"><strong>Device Name</strong></p></div>
              <div className="col py-0"><p className="mb-0"><strong>Event Type</strong></p></div>
              <div className="col py-0"><p className="mb-0"><strong></strong></p></div>
            </div>
          </div>
          {/* </div> */}

          {/* Table Body */}
          <div className="transactions-table-tbody d-flex flex-column gap-3">
            {transactions.map((tx, index) => (
              <section key={index} className="card shadow-sm pull-up">
                <div className="card-content">
                  <div className="card-body">
                    <div className="row text-center align-items-center">
                      {/* <div className="row"> */}
                      <div className="col-12 col-md py-0 palign">
                        {tx.PhotoUrl && (
                          <img
                            src={tx.PhotoUrl}
                            alt={`${tx.Name} photo`}
                            className="transactionimg"
                          />
                        )}
                      </div>

                      <div className="col-12 col-md py-0 palign">
                        <p className="mb-0 ellipsis-two-line">
                          <span className="d-inline-block d-md-none text-bold-700 spanbold">User Name : </span>
                          {tx.Name ?? "-"}
                        </p>
                      </div>
                      <div className="col-12 col-md py-0 palign">
                        <p className="mb-0">
                          <span className="d-inline-block d-md-none text-bold-700 spanbold">Event Date (dd-mm-yyyy) : </span>
                          {tx.EventDate}
                        </p>
                      </div>
                      <div className="col-12 col-md py-0 palign">
                        <p className="mb-0">
                          <span className="d-inline-block d-md-none text-bold-700 spanbold">Event Time (hh:mm) : </span>
                          {tx.EventTime}
                        </p>
                      </div>
                      <div className="col-12 col-md py-0 palign">
                        <p className="mb-0"><span className="d-inline-block d-md-none text-bold-700 spanbold">Card No. / Bio-User Id : </span>{tx.Cardno ?? "-"}</p>
                      </div>
                      <div className="col-12 col-md py-0 palign">
                        <p className="mb-0">
                          <span className="d-inline-block d-md-none text-bold-700 spanbold">Device Name : </span>{tx.DeviceName}
                        </p>
                      </div>
                      <div className="col-12 col-md py-0 palign">
                        <span className="d-inline-block d-md-none text-bold-700 spanbold">Event Type : </span>
                        <a
                          href="#"
                          className={`mb-0 btn-sm btn round event-btn ${tx.EventType === "Valid"
                            ? "btn-outline-success"
                            : tx.EventType === "Invalid"
                              ? "btn-outline-danger"
                              : "btn-outline-info"
                            }`}
                        >
                          {tx.EventType}
                        </a>
                      </div>
                      <div className="col-12 col-md py-0 palign">
                        <p className="mb-0">
                          <button
                            type="button"
                            className="btn btn-sm btn-primary ml-2"
                            onClick={handleConfirmFirstModal}
                          >
                            View
                          </button>
                        </p>
                      </div>

                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </section>
            ))}

            {/* Pagination */}
            <div className="pagination-container paginationspace">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center pagination-separate pagination-flat zindex">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      {/* <span aria-hidden="true" className="me-4">« Prev</span> */}
                      <span className="sr-only" >Previous</span>
                    </a>
                  </li>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <li key={page} className={`page-item ${page === 1 ? "active" : ""}`}>
                      <a className="page-link" href="#">{page}</a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true" className="me-4">Next </span>
                      {/* <span className="sr-only">Next »</span> */}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- Modal -------------------- */}
      {
        showModal && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            tabIndex={-1}
          >
            <div className="modal-dialog modal-dialog-centered custom-modal" >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title headcol">Export</h5>
                  <button
                    type="button"
                    className="bi bi-x-circle-fill"
                    onClick={handleCloseFirstModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <fieldset className='text-input-group'>
                        <div className='dateRow'>
                          <div>
                            <label htmlFor="fromdate">From Date</label>
                            <DatePicker
                              selected={date}
                              // onChange={(d: Date | null) => setDate(d)}
                              dateFormat="dd/MM/yyyy" // <-- guaranteed format
                              placeholderText="dd/mm/yyyy"
                            />
                            <i className="bi bi-calendar-date" style={{ position: "absolute", right: 10, top: 8 }}></i>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div className='col-12 col-md-6'>
                      <fieldset className='text-input-group'>
                        <div className='dateRow'>
                          <div>
                            <label htmlFor="todate">To Date</label>
                            <DatePicker
                              selected={date}
                              // onChange={(d: Date | null) => setDate(d)}
                              dateFormat="dd/MM/yyyy" // <-- guaranteed format
                              placeholderText="dd/mm/yyyy"
                            />
                            <i className="bi bi-calendar-date" style={{ position: "absolute", right: 10, top: 8 }}></i>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="row"><div className='col-12 col-md-6'>
                    <fieldset className='text-input-group'>
                      <div className='dateRow'>
                        <div>
                          <label htmlFor="fromtime">From Time</label>
                          <input type='time' id='fromtime' />
                        </div>
                        <i className="bi bi-clock" ></i> {/* Bootstrap icon for time */}
                      </div>
                    </fieldset>
                  </div>

                    <div className='col-12 col-md-6'>
                      <fieldset className='text-input-group'>
                        <div className='dateRow'>
                          <div>
                            <label htmlFor="totime">To Time</label>
                            <input type='time' id='totime' />
                          </div>
                          <i className="bi bi-clock"></i>
                        </div>
                      </fieldset>
                    </div></div>
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <fieldset className='text-input-group'>
                        <label>Event Type</label>
                        <select id='EventType'>
                          <option value="">Select Event Type</option>
                          <option value="1">Valid</option>
                          <option value="0">Invalid</option>
                        </select>
                      </fieldset>
                    </div>
                    <div className='col-12 col-md-6'>
                      <fieldset className='text-input-group'>
                        <label htmlFor="employeename">User Name</label>
                        <input id='employeename' />
                      </fieldset>
                    </div>
                  </div>
                </div>

                <div className="modal-footer justify-content-start">

                  <button
                    type="button"
                    className="btn btn-primary"
                  // onClick={handleConfirmExport}
                  >
                    Excel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                  // onClick={handleConfirmExport}
                  >
                    Pdf
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseFirstModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* -------------------- View Modal -------------------- */}
      {showViewModal && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered custom-modal">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h5 className="modal-title">General Details</h5>
                <button
                  type="button"
                  className="bi bi-x-circle-fill"
                  onClick={handleCloseSecondModal}
                ></button>
              </div>


              <div className="modal-body">
                <div className='card user-card'>
                  {/* <span className='card-title headcol'>General Details </span> */}
                  <div className='row gx-4 gy-3 align-items-stretch'>


                    {/* Photo Section */}
                    <div className='col-12 col-md-4 col-lg-4'>
                      <div className='photoMainDivTransaction square-photo h-100'>
                        {/* {selectedTransaction?.PhotoUrl ? (
        <img
          src={selectedTransaction.PhotoUrl}
          alt={selectedTransaction.Name}
          className="transactionimg square-img"
        />
      ) : (
        <div className="placeholder-square">
          <i className="bi bi-person"></i>
        </div>
      )} */}
                      </div>
                    </div>

                    {/* Input Fields */}
                    <div className='col-12 col-md-12 col-lg-8'>
                      <div className='row gy-2'>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="biouserid">User Id</label>
                            {/* <input id='biouserid' value={selectedTransaction.Cardno} readOnly /> */}
                            <input id='biouserid' readOnly />
                          </fieldset>
                        </div>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="employeename">User Name</label>
                            <input id='employeename' readOnly />
                          </fieldset>
                        </div>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="emailid">Email ID</label>
                            {/* <input id='biouserid' value={selectedTransaction.Cardno} readOnly /> */}
                            <input id='emailid' readOnly />
                          </fieldset>
                        </div>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="mobileno">Mobile No.</label>
                            <input id='mobileno' readOnly />
                          </fieldset>
                        </div>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="Gender">Gender</label>
                            {/* <input id='biouserid' value={selectedTransaction.Cardno} readOnly /> */}
                            <input id='Gender' readOnly />
                          </fieldset>
                        </div>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="UserType">User Type</label>
                            <input id='UserType' readOnly />
                          </fieldset>
                        </div>
                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="ActivationDate">Activation Date (dd/mm/yyyy)</label>
                            <input id='ActivationDate' readOnly />
                          </fieldset>
                        </div>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="ExpiryDate">Expiry Date (dd/mm/yyyy)</label>
                            <input id='ExpiryDate' readOnly />
                          </fieldset>
                        </div>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="IPAddress">IP Address</label>
                            <input id='IPAddress' readOnly />
                          </fieldset>
                        </div>

                        <div className='col-12 col-md-6'>
                          <fieldset className='text-input-group'>
                            <label htmlFor="DevicePortNo">Device Port No.</label>
                            <input id='DevicePortNo' readOnly />
                          </fieldset>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="modal-footer justify-content-start">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowViewModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div >
  );
}
