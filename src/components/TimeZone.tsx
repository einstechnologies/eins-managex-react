import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/TimeZone.css'
import { useState } from "react";

function TimeZone() {

    const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const weekDays: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(prev => prev.filter(d => d !== day));
    } else {
      setSelectedDays(prev => [...prev, day]);
    }
  };

 const dummySchedules = [
  {
    id: 1,
    name: "Office Hours",
    start: "09:00 AM",
    end: "10:00 PM",
    days: {
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: false,
      sun: false
    }
  },
  {
    id: 2,
    name: "Night Shift",
    start: "01:00 AM",
    end: "06:00 AM",
    days: {
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: true,
      sun: false
    }
  },
  {
    id: 3,
    name: "Weekend",
    start: "10:00 PM",
    end: "06:00 AM",
    days: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: true,
      sun: true
    }
  }
];


  return (
    <div className="row mt-3 g-3">
      <div className="col-12 mt-3 g-3">
        <div className="card tz-user-card time-zone div-bottom">
          <h6>
            <b>Schedule</b>
          </h6>
            
            <div className="row mt-4">
                <div className="col-12 col-md-3">
                <fieldset className="time-zone tz-info-text-input-group">
                    <label htmlFor="device1">Device Name</label>
                    <input id="device1" className="form-control" />
                </fieldset>
                </div>

                <div className="col-12 col-md-3">
                <fieldset className="time-zone tz-info-text-input-group">
                    <label htmlFor="device2">Time Zone Name</label>
                    <input id="device2" className="form-control" />
                </fieldset>
                </div>

                <div className="col-12 col-md-3">
                <fieldset className="time-zone tz-info-text-input-group">
                    <label htmlFor="device3">Start Time</label>
                    <input id="device3" type="time" className="form-control" />
                </fieldset>
                </div>

                <div className="col-12 col-md-3">
                <fieldset className="time-zone tz-info-text-input-group">
                    <label htmlFor="device4">End Time</label>
                    <input id="device4" type="time" className="form-control" />
                </fieldset>
                </div>

                <div className="days-title">Select Days</div>

            <div className="days">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className={`day ${selectedDays.includes(day) ? "active" : ""}`}
                  onClick={() => toggleDay(day)}
                >
                  {day}
                </div>
              ))}
            </div>

              <div className="time-zone btn-area mt-5">
                <button className="time-zone btn-outline-soft-green me-2">Save</button>
                <button className="time-zone btn-outline-soft-red">Clear</button>
              </div>


              <div className="col-12 mt-5">
                  <div className="time-zone tz-table-tableWrapper">
                    <table>
                        <colgroup>
                            <col style={{ width: "1%" }} />
                            <col style={{ width: "27%" }} />
                            <col style={{ width: "8%" }} />
                            <col style={{ width: "8%" }} />
                            <col style={{ width: "8%" }} />
                            <col style={{ width: "6%" }} />
                            <col style={{ width: "6%" }} />
                            <col style={{ width: "6%" }} />
                            <col style={{ width: "6%" }} />
                            <col style={{ width: "6%" }} />
                            <col style={{ width: "6%" }} />
                            <col style={{ width: "6%" }} />
                            <col style={{ width: "6%" }} />
                            <col style={{ width: "6%" }} />
                        </colgroup>

                        <thead className="time-zone tz-tableHead">
                            <tr>
                                <th>#</th>
                                <th>Time Zone Name</th>
                                <th>Start Time (hh:mm)</th>
                                <th>End Time (hh:mm)</th>
                                <th>Monday</th>
                                <th>Tuesday</th>
                                <th>Wednesday</th>
                                <th>Thursday</th>
                                <th>Friday</th>
                                <th>Saturday</th>
                                <th>Sunday</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>

                        <tbody className="time-zone tz-tableBody">
                            {dummySchedules.map((item, index) => (
                              <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.start}</td>
                                <td>{item.end}</td>

                                <td>{item.days.mon && <i className="bi bi-check text-success fs-4"></i>}</td>
                                <td>{item.days.tue && <i className="bi bi-check text-success fs-4"></i>}</td>
                                <td>{item.days.wed && <i className="bi bi-check text-success fs-4"></i>}</td>
                                <td>{item.days.thu && <i className="bi bi-check text-success fs-4"></i>}</td>
                                <td>{item.days.fri && <i className="bi bi-check text-success fs-4"></i>}</td>
                                <td>{item.days.sat && <i className="bi bi-check text-success fs-4"></i>}</td>
                                <td>{item.days.sun && <i className="bi bi-check text-success fs-4"></i>}</td>

                                <td>
                                  <i className="bi bi-trash fs-6 text-danger" style={{ cursor: "pointer" }}></i>
                                </td>
                                <td>
                                  <i className="bi bi-pencil-square fs-6 text-primary" style={{ cursor: "pointer" }}></i>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              </div>
              

            </div>
        </div>
      </div>
    </div>
  );
}

export default TimeZone;