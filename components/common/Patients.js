import Link from "next/link";
const Patients = () => {
  return (
    <>
      <td>
        <h2 className="table-avatar">
          <a href="diagnosis.html" className="avatar avatar-sm me-2">
            <img
              className="avatar-img rounded-circle"
              src="/assets/img/doctors/doctor-thumb-01.jpg"
              alt="User Image"
            />
          </a>
          <Link href="/my-patients/1">
            <a>Dr. Ruby Perrin</a>
          </Link>
        </h2>
      </td>
      <td>Dental</td>
      <td>
        <h2 className="table-avatar">
          <a href="patient-details.html" className="avatar avatar-sm me-2">
            <img
              className="avatar-img rounded-circle"
              src="/assets/img/patients/patient1.jpg"
              alt="User Image"
            />
          </a>
          <a href="patient-details.html">Charlene Reed </a>
        </h2>
      </td>
      <td>
        9 Nov 2019
        <span className="text-primary d-block">11.00 AM - 11.15 AM</span>
      </td>
      <td>
        <div className="status-toggle">
          <input type="checkbox" id="status_1" className="check" checked />
          <label for="status_1" className="checktoggle">
            checkbox
          </label>
        </div>
      </td>
      <td className="text-end">$200.00</td>
    </>
  );
};

export default Patients;
