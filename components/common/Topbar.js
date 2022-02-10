import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="topbar bg-primary">
        <div className="container-fluid">
          <div className="topbar-item">
            <div className="topbar-inner">
              <div className="left-topbar-inner">
                <div className="topbar-item">
                  <div className="topabr-item-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="topbar-item-con">
                    <p>City center, Haldia</p>
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
