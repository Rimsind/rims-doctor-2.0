const PatientDemographics = ({ patientInfo }) => {
  return (
    <>
      <div className="card profile-sidebar patient-card shadow-sm">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <div className="patient-img text-center">
              <img src={patientInfo?.image?.url} alt="User Image" />
            </div>
            <div className="profile-det-info pt-2 ps-3 text-center">
              <p className="fs-5">
                {patientInfo?.first_name} {patientInfo?.last_name}
              </p>
              <div className="patient-details">
                <p className="text-success fs-6 fw-bold">
                  ID- {patientInfo?.id}
                </p>
              </div>
            </div>
            <div className="profile-inner-con">
              <div className="inner-item d-flex justify-content-between px-3">
                <div className="profile-item-inner">
                  <p className="text-muted">Gender</p>
                </div>
                <div className="profile-item-inner">
                  <p className="fw-bold">{patientInfo?.gender}</p>
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
