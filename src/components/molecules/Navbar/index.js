import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  });

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
