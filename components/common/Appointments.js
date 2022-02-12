import Link from "next/link";
const Appointments = ({ data }) => {
  return (
    <>
      <td>{data.id}</td>

      <td>
        <h2 className="table-avatar">
          <Link href={`/appointments/${data?.id}`}>
            <a className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={data?.patient?.image?.url}
                alt="User Image"
              />
            </a>
          </Link>
          <Link href={`/appointments/subjective-information?id=${data?.id}`}>
            <a>
              {data?.patient?.first_name} {data?.patient?.last_name}
            </a>
          </Link>
        </h2>
      </td>
      <td>{data?.patient?.gender}</td>
      <td>35</td>
      <td>
        {data?.date}
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
