const ProfileSettings = () => {
  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Personal Information</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm">
                        <form className="needs-validation" noValidate>
                          <div className="form-row row align-items-center">
                            <div className="col-md-2">
                              <div className="form-group">
                                <a href="assets/img/profiles/avatar-01.jpg">
                                  <img
                                    className="rounded-circle"
                                    alt="User Image"
                                    src="/assets/img/profiles/avatar-01.jpg"
                                    width="200rem"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="fs-4 fw-bold">
                                  Upload Your Picture
                                </label>
                                <input type="file" className="form-control" />
                                <small className="text-secondary">
                                  Recommended image size is
                                  <b>150px x 150px</b>
                                </small>
                              </div>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-2">
                              <button className="btn btn-primary px-4 py-2 fs-5 shadow-sm">
                                Upload
                              </button>
                            </div>
                          </div>
                          <div className="form-row row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom01">
                                First name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="First name"
                                value="Mark"
                                required
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom02">
                                Last name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Last name"
                                value="Otto"
                                required
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                          </div>
                          <div className="form-row row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom01">
                                Email Id
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="Your Email Id"
                                value=""
                                required
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom02">
                                Phone No.
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Your Phone No."
                                value=""
                                required
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                          </div>
                          <div className="form-row row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom01">
                                Qualification
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="validationCustom01"
                                placeholder="MBBS"
                                value=""
                                required
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
                                value=""
                                required
                              />
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                          </div>
                          <div className="form-row row">
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom01">
                                Specialization
                              </label>
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Select Any One</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                              <div className="valid-feedback">Looks good!</div>
                            </div>
                            <div className="col-md-6 mb-3">
                              <label htmlFor="validationCustom02">
                                Skype ID
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                placeholder="Your Skype ID"
                                value=""
                                required
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
                                ></textarea>
                                <label htmlFor="floatingTextarea">
                                  Your Bio
                                </label>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
