import Link from "next/link";
const Appointments = () => {
  return (
    <>
      <td>#01</td>

      <td>
        <h2 className="table-avatar">
          <Link href={`/appointments/1`}>
            <a className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src="/assets/img/patients/patient1.jpg"
                alt="User Image"
              />
            </a>
          </Link>
          <Link href={`/appointments/1`}>
            <a>Charlene Reed </a>
          </Link>
        </h2>
      </td>
      <td>Male</td>
      <td>35</td>
      <td>
        9 Nov 2019
        <span className="text-primary d-block">11.00 AM - 11.15 AM</span>
      </td>
      <td>
        <span className="btn btn-sm bg-success-light mx-1">Paid</span>
        <span className="btn btn-sm bg-danger-light">Not Paid</span>
      </td>
      <td>
        <div className="status-toggle">
          <input type="checkbox" id="status_1" className="check" />
          <label htmlFor="status_1" className="checktoggle">
            checkbox
          </label>
        </div>
      </td>
    </>
  );
};

export default Appointments;
