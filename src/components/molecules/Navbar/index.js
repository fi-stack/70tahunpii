import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });
  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {});
  });

  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    localStorage.removeItem("user-token");
    window.location.reload();
  };

  return (
    <>
      <div className="navbar-fixed">
        <nav className="white">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              <img src="images/logoNavPII.png" style={styles.logo} />
            </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons" style={styles.navigation}>
                menu
              </i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  class="dropdown-trigger"
                  href="#"
                  data-target="dropdown1"
                  style={styles.navigation}
                >
                  <i className="material-icons left" style={styles.navigation}>
                    account_circle
                  </i>
                  Akun
                </a>
                <ul id="dropdown1" class="dropdown-content">
                  {user?.email ? (
                    <>
                      <li>
                        <Link to="/dashboard" style={styles.navigation}>
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <a style={styles.navigation} onClick={handleLogout}>
                          Keluar
                        </a>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/login" style={styles.navigation}>
                        Masuk
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
              <li>
                <Link to="/info-event" style={styles.navigation}>
                  Info Event
                </Link>
              </li>
              <li>
                <Link to="/strava-leaderboard" style={styles.navigation}>
                  Strava & Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/pemenang" style={styles.navigation}>
                  Pemenang
                </Link>
              </li>
              <li>
                <Link to="/gallery" style={styles.navigation}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/sponsor" style={styles.navigation}>
                  Sponsor
                </Link>
              </li>
              <li>
                <Link to="/kontak" style={styles.navigation}>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a
            class="dropdown-trigger"
            href="#"
            data-target="dropdown2"
            style={styles.navigation}
          >
            <i className="material-icons left" style={styles.navigation}>
              account_circle
            </i>
            Akun
          </a>
          <ul id="dropdown2" class="dropdown-content">
            {user?.email ? (
              <>
                <li>
                  <Link to="/dashboard" style={styles.navigation}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a style={styles.navigation} onClick={handleLogout}>
                    Keluar
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" style={styles.navigation}>
                  Masuk
                </Link>
              </li>
            )}
          </ul>
        </li>
        <li>
          <Link to="/info-event" style={styles.navigation}>
            Info Event
          </Link>
        </li>
        <li>
          <Link to="/strava-leaderboard" style={styles.navigation}>
            Strava & Leaderboard
          </Link>
        </li>
        <li>
          <Link to="/pemenang" style={styles.navigation}>
            Pemenang
          </Link>
        </li>
        <li>
          <Link to="/gallery" style={styles.navigation}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/sponsor" style={styles.navigation}>
            Sponsor
          </Link>
        </li>
        <li>
          <Link to="/kontak" style={styles.navigation}>
            Kontak
          </Link>
        </li>
      </ul>
    </>
  );
};

const styles = {
  logo: {
    maxHeight: "64px",
    marginRight: "12px",
    padding: "10px 0",
  },
  navigation: {
    color: "#eb6c24",
  },
};
export default Navbar;
