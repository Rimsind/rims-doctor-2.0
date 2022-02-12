import Link from "next/link";
import Topbar from "./Topbar";

const DoctorNavbar = () => {
  return (
    <>
      <div className="header">
        <Topbar />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="/assets/img/logo-dark.png" width="80px" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item current active">
                  <Link href="/">
                    <a className="nav-link">
                      <i className="fas fa-tachometer-alt me-1 "></i>
                      <span>Dashboard</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/appointments">
                    <a className="nav-link">
                      <i className="me-1 far fa-calendar-check"></i>
                      <span>Appointments</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/my-patients">
                    <a className="nav-link">
                      <i className="me-1 far fa-user-alt"></i>{" "}
                      <span>My Patients</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/time-table">
                    <a className="nav-link">
                      <i className="me-1 far fa-calendar-day"></i>
                      <span>Time Table</span>
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/profile-settings">
                    <a className="nav-link">
                      <i className="me-1 far fa-id-badge"></i>
                      <span>Profile Settings</span>
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown has-arrow">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                    data-bs-toggle="dropdown"
                  >
                    <span className="user-img">
                      <img
                        className="rounded-circle"
                        src="/assets/img/profiles/avatar-01.jpg"
                        alt="Ryan Taylor"
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src="/assets/img/profiles/avatar-01.jpg"
                          alt="User Image"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Dr. Samir</h6>
                        <p className="text-muted mb-0">Medicine Specialist</p>
                      </div>
                    </div>
                    <a
                      className="dropdown-item"
                      href="doc-profile-setting.html"
                    >
                      My Profile
                    </a>
                    <a className="dropdown-item" href="doc-time.html">
                      Time Table
                    </a>
                    <a className="dropdown-item" href="index.html">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default DoctorNavbar;
