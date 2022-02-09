const PatientDemographics = () => {
  return (
    <>
      <div className="card profile-sidebar patient-card shadow-sm">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <div className="patient-img text-center">
              <img
                src="/assets/img/doctors/doctor-thumb-01.jpg"
                alt="User Image"
              />
            </div>
            <div className="profile-det-info pt-2 ps-3 text-center">
              <p className="fs-5">Dr. Rubin Perrin</p>
              <div className="patient-details">
                <p className="text-success fs-6 fw-bold">Active</p>
              </div>
            </div>
            <div className="profile-inner-con">
              <div className="inner-item d-flex justify-content-between px-3">
                <div className="profile-item-inner">
                  <p className="text-muted">Gender</p>
                </div>
                <div className="profile-item-inner">
                  <p className="fw-bold">Female</p>
                </div>
              </div>
              <div className="inner-item d-flex justify-content-between px-3">
                <div className="profile-item-inner">
                  <p className="text-muted">Age</p>
                </div>
                <div className="profile-item-inner">
                  <p className="fw-bold">20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDemographics;
