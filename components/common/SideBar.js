import Link from "next/link";
const SideBar = () => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/appointments">
                  <a>
                    <i className="far fa-calendar-check"></i>
                    <span>Appointments</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/my-patients">
                  <a>
                    <i className="far fa-user-alt"></i> <span>My Patients</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/time-table">
                  <a>
                    <i className="far fa-calendar-day"></i>
                    <span>Time Table</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile-settings">
                  <a>
                    <i className="far fa-id-badge"></i>
                    <span>Profile Settings</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/password-settings">
                  <a>
                    <i className="fas fa-key"></i>
                    <span>Password Settings</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
