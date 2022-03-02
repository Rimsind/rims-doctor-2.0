const Prescription = () => {
  return (
    <>
      <section
        style={{
          backgroundColor: "whitesmoke",
          marginTop: "140px",
          padding: "20px 0",
        }}
      >
        <div className="container" style={{ backgroundColor: "white" }}>
          <div
            className="topbar-ribbon py-1 px-1"
            style={{ backgroundColor: "#075f99 !important" }}
          >
            <div className="row align-items-end">
              <div className="col-md-1">
                <div className="left-content">
                  <img
                    src="../assets/img/rims-logo-white.png"
                    style={{ height: "3rem" }}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="middle-content">
                  <p className="fs-6 fw-bold" style={{ color: "white" }}>
                    REHAB INTEGRATED MEDICAL SOLUTIONS
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="right-content">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <p className="text-light">
                        <i
                          className="fas fa-map-marker-alt me-2"
                          style={{ color: "white" }}
                        ></i>
                        Haldia City Centre , WB
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-light">
                        <i
                          className="fas fa-phone me-2"
                          style={{ color: "white" }}
                        ></i>
                        +91-90384-43073
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-light">
                        <i
                          className="fas fa-envelope-open-text me-2"
                          style={{ color: "white" }}
                        ></i>
                        demo@email.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="py-1 px-2" style={{ borderBottom: "5px solid" }}>
            <div className="row align-items-center m-auto">
              <div className="col-md-4">
                <div className="header-inner-item text-start">
                  <p className="fs-3 fw-bold fst-italic lh-1">
                    Dr. Samir Barman
                  </p>
                  <p className="fs-6 fw-bold lh-1">MBBS.MD.(O&G)</p>
                  <p className="fs-6 lh-1">
                    Consultant Gynaecologist & Obstetrician
                  </p>
                  <p className="fs-6 lh-1">Reg. No.-58905 (WBMC)</p>
                  <p className="fs-6 lh-1">Mob.-987-456-321</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="doctor-symbol text-center">
                  <img src="../assets/img/doctor-symbol.png" height="150px" />
                </div>
              </div>

              <div className="col-md-4">
                <div className="header-inner-item text-end">
                  <p className="fs-3 fw-bold fst-italic lh-1">
                    Dr. Samir Barman
                  </p>
                  <p className="fs-6 fw-bold lh-1">MBBS.MD.(O&G)</p>
                  <p className="fs-6 lh-1">
                    Consultant Gynaecologist & Obstetrician
                  </p>
                  <p className="fs-6 lh-1">Reg. No.-58905 (WBMC)</p>
                  <p className="fs-6 lh-1">Mob.-987-456-321</p>
                </div>
              </div>
            </div>
          </header>

          <main className="main mt-3">
            <p
              className="fs-3 fw-bold text-center"
              style={{ color: "#720330" }}
            >
              e-Prescption
            </p>
            <div
              className="main_outer_bg"
              style={{
                background: "linear-gradient(45deg, #116aa1, #720330)",
                position: "relative",
                padding: "1rem",
              }}
            >
              <div className="profile_details mb-3">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img
                      src="../assets/img/amit_1.jpg"
                      style={{
                        height: "19rem",
                        background: "#0b6ea5",
                        padding: "1rem",
                        position: "absolute",
                        marginTop: "-145px",
                        marginLeft: "25px",
                        boxShadow: "1px 8px 12px 0px #00000038",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="col-md-8">
                    <p
                      className="fs-5 fw-bold"
                      style={{
                        borderBottom: "1px solid white",
                        color: "white",
                      }}
                    >
                      Patient Details
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Name:
                              <span className="fs-6 fw-light">
                                Amit Mahapatra
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Material Status:
                              <span className="fs-6 fw-light">Married</span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Blood Group:{" "}
                              <span className="fs-6 fw-light">6</span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Date of Birth:
                              <span className="fs-6 fw-light">1999-06-23 </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Gender:{" "}
                              <span className="fs-6 fw-light">Male </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="patient_intro mb-2">
                          <div className="patient_details_inner">
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Mobile:{" "}
                              <span className="fs-6 fw-light">8945632148</span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Email:
                              <span className="fs-6 fw-light">
                                amit@gmail.com
                              </span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Street Address:
                              <span className="fs-6 fw-light">City Center</span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              Country:{" "}
                              <span className="fs-6 fw-light">India</span>
                            </p>
                            <p
                              className="fs-6 fw-bold"
                              style={{ color: "white", lineHeight: "1" }}
                            >
                              State: <span className="fs-6 fw-light">WB</span> ;
                              Pin -<span className="fs-6 fw-light">721657</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Medicine
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Medicine Name</th>
                      <th scope="col">MG</th>
                      <th scope="col">Route</th>
                      <th scope="col">Duration (Days)</th>
                      <th scope="col">Frequency</th>
                      <th scope="col">Reason</th>
                      <th scope="col">Instruction</th>
                      <th scope="col">Side Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Moexipril (Univasc)</td>
                      <td>500</td>
                      <td>Oral</td>
                      <td>60</td>
                      <td>Daily</td>
                      <td>hgavcfjhdvjhvbfh</td>
                      <td>fjhvdfjhbh</td>
                      <td>fjhvdfjhbh</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Moexipril (Univasc)</td>
                      <td>500</td>
                      <td>Oral</td>
                      <td>60</td>
                      <td>Daily</td>
                      <td>hgavcfjhdvjhvbfh</td>
                      <td>fjhvdfjhbh</td>
                      <td>fjhvdfjhbh</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Moexipril (Univasc)</td>
                      <td>500</td>
                      <td>Oral</td>
                      <td>60</td>
                      <td>Daily</td>
                      <td>hgavcfjhdvjhvbfh</td>
                      <td>fjhvdfjhbh</td>
                      <td>fjhvdfjhbh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Test
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Test Name</th>
                      <th scope="col">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                      <td>Modi repudiandae qui temporibus voluptate eaque</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                      <td>Modi repudiandae qui temporibus voluptate eaque</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                      <td>Modi repudiandae qui temporibus voluptate eaque</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Food & Fluid Restriction
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Food & Fluid Restriction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Patient Education
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Patient Education</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className="rfa-gen-form-data-table mt-4"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="fs-5"
                  style={{
                    background: "linear-gradient(45deg, #6f0734, transparent)",
                    padding: "1rem",
                    color: "white",
                    borderRadius: "30px 4px 4px 30px",
                  }}
                >
                  Set Follow Time Period
                </p>
                <table className="table table-striped table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Days</th>
                      <th scope="col">Weeks</th>
                      <th scope="col">Months</th>
                      <th scope="col">Followup Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>02</td>
                      <td>1st</td>
                      <td>January</td>
                      <td>Regular Visit</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>02</td>
                      <td>1st</td>
                      <td>January</td>
                      <td>Regular Visit</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>02</td>
                      <td>1st</td>
                      <td>January</td>
                      <td>Regular Visit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>

          <footer
            style={{ background: "linear-gradient(45deg, #116aa1, #720330)" }}
          >
            <div className="row align-items-center pt-3 px-3">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div className="banner-logo text-center mb-2">
                  <img src="../assets/img/rims-logo-white.png" height="50px" />
                </div>
                <p className="text-light fs-5 fw-bold text-center lh-1">
                  Powered by Rims Technology
                </p>
                <p className="text-light text-center fs-6 lh-1 fst-italic">
                  A unit of Retar Mediserve Pvt. Ltd.
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>
          </footer>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </section>
    </>
  );
};

export default Prescription;
