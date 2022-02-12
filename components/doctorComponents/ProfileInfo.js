import { apiUrl, fetcher } from "config/api";
import useSWR from "swr";
const ProfileSettings = ({ doctor }) => {
  const { data: specialties } = useSWR(`${apiUrl}/specialties`, fetcher);
  return (
    <>
      <div className="card-body">
        <div className="row">
          <div className="col-sm">
            <form className="needs-validation" noValidate>
              <div className="form-row row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom01">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="First name"
                    defaultValue={!!doctor.firstName ? doctor.firstName : ""}
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom02">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Last name"
                    defaultValue={!!doctor.lastName ? doctor.lastName : ""}
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="form-row row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom01">Email Id</label>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Your Email Id"
                    defaultValue={!!doctor.email ? doctor.email : ""}
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom02">Phone No.</label>
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Your Phone No."
                    defaultValue={!!doctor.phone ? doctor.phone : ""}
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="form-row row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom01">Qualification</label>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="MBBS"
                    defaultValue={
                      !!doctor.qualification ? doctor.qualification : ""
                    }
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom02">
                    Experience (in Years)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Your Phone No."
                    defaultValue={
                      !!doctor.experienceInYrs ? doctor.experienceInYrs : ""
                    }
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="form-row row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom01">Specialization</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option
                      defaultChecked={
                        !!doctor.specialty?.id ? doctor.specialty?.id : ""
                      }
                    >
                      {!!doctor.specialty?.name ? doctor.specialty?.name : ""}
                    </option>
                    {specialties?.map((item, index) => (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom02">Skype ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="Your Skype ID"
                    defaultValue={!!doctor.skype_id ? doctor.skype_id : ""}
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="form-row row">
                <div className="col-md-12">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      placeholder="Enter Your Bio"
                      id="floatingTextarea"
                      rows="10"
                      defaultValue={!!doctor.bio ? doctor.bio : ""}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Your Bio</label>
                  </div>
                </div>
              </div>
              <div className="save-btn text-end">
                <button
                  className="btn btn-primary px-4 py-2 fs-5 shadow-sm"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
