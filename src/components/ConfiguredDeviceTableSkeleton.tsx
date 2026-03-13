import "../styles/ConfiguredDeviceTableSkeleton.css";

export function DeviceTableSkeleton() {
  return (
    <div className="user-card-table-tableWrapper">
      <table id="tbConfiguredDevice">
        <thead className="tableHead">
          <tr>
            <th>#</th>
            <th>Device Name</th>
            <th>IP Address</th>
            <th>Terminal ID</th>
            <th>Port No</th>
            <th>Select</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {Array.from({ length: 4 }).map(
            (
              _,
              index, //  4 fake rows
            ) => (
              <tr key={index}>
                <td>
                  <div className="skeleton skeleton-sm"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-md"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-md"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-md"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-sm"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-btn"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-btn"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-btn"></div>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
