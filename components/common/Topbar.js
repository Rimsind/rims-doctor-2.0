const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="container-fluid">
          <div className="topbar-item-main pt-2">
            <div className="topbar-inner d-flex align-items-center justify-content-between">
              <div className="left-topbar-inner d-flex align-items-center">
                <div className="topbar-item d-flex align-items-baseline me-2">
                  <div className="topbar-item-icon me-2">
                    <i className="fad fa-map-marker-alt"></i>
                  </div>
                  <div className="topbar-item-con">
                    <p>City center, Haldia</p>
                  </div>
                </div>
                <div className="topbar-item d-flex align-items-baseline me-2">
                  <div className="topbar-item-icon me-2">
                    <i className="fad fa-mobile"></i>
                  </div>
                  <div className="topbar-item-con">
                    <p>987456321</p>
                  </div>
                </div>
                <div className="topbar-item d-flex align-items-baseline me-2">
                  <div className="topbar-item-icon me-2">
                    <i className="fad fa-envelope"></i>
                  </div>
                  <div className="topbar-item-con">
                    <p>mail@riimsindia.com</p>
                  </div>
                </div>
              </div>
              <div className="right-topbar-inner d-flex align-items-center">
                <div className="topbar-item d-flex align-items-baseline me-2">
                  <div className="topbar-item-icon-social">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </div>
                <div className="topbar-item d-flex align-items-baseline me-2">
                  <div className="topbar-item-icon-social">
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
                <div className="topbar-item d-flex align-items-baseline me-2">
                  <div className="topbar-item-icon-social">
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
                <div className="topbar-item d-flex align-items-baseline me-2">
                  <div className="topbar-item-icon-social">
                    <i className="fab fa-youtube"></i>
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

export default Topbar;
