import Link from "next/link";
const Patients = () => {
  return (
    <>
      <td>#01</td>
      <td>
        <h2 className="table-avatar">
          <a href="patient-details.html" className="avatar avatar-sm me-2">
            <img
              className="avatar-img rounded-circle"
              src="/assets/img/patients/patient1.jpg"
              alt="User Image"
            />
          </a>
          <Link href="/my-patients/1">
            <a>Charlene Reed </a>
          </Link>
        </h2>
      </td>
      <td>Male</td>
      <td>36</td>

      <td>
        9 Nov 2019
        <span className="text-primary d-block">11.00 AM - 11.15 AM</span>
      </td>

      <td>
        <a
          class="btn btn-sm bg-primary-light"
          data-bs-toggle="modal"
          href="#edit_specialities_details"
        >
          <i class="fe fe-eye"></i> View
        </a>
      </td>
    </>
  );
};

export default Patients;
