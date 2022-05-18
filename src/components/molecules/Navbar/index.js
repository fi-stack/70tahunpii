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
              <img
                src="/images/logo70thnPII.png"
                style={styles.logo}
                className="responsive-img"
              />
              <img
                src="/images/logoPII.png"
                style={styles.logo}
                className="responsive-img"
              />
            </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons" style={styles.navigation}>
                menu
              </i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  className="dropdown-trigger"
                  href="#"
                  data-target="dropdown1"
                  style={styles.navigation}
                >
                  <i className="material-icons left" style={styles.navigation}>
                    account_circle
                  </i>
                  Akun / Registrasi
                </a>
                <ul id="dropdown1" className="dropdown-content">
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
                    <>
                      <li>
                        <Link to="/login" style={styles.navigation}>
                          Masuk
                        </Link>
                      </li>
                      <li>
                        <a href="/register" style={styles.navigation}>
                          Registrasi Individu
                        </a>
                      </li>
                      <li>
                        <Link to="/team-register" style={styles.navigation}>
                          Registrasi Tim
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              <li>
                <a href="/#info-event" style={styles.navigation}>
                  Info Event
                </a>
              </li>
              <li>
                <a
                  className="dropdown-trigger"
                  href="#"
                  data-target="dropdown3"
                  style={styles.navigation}
                >
                  Strava & Leaderboard
                </a>
                <ul id="dropdown3" className="dropdown-content">
                  <li>
                    <a href="/list-peserta/run" style={styles.navigation}>
                      List Peserta Lari
                    </a>
                  </li>
                  <li>
                    <a href="/list-peserta/ride" style={styles.navigation}>
                      List Peserta Gowes
                    </a>
                  </li>
                  <li>
                    <a href="/list-tim/run" style={styles.navigation}>
                      List Tim Lari
                    </a>
                  </li>
                  <li>
                    <a href="/list-tim/ride" style={styles.navigation}>
                      List Tim Gowes
                    </a>
                  </li>
                  <li class="divider" tabindex="-1"></li>
                  <li>
                    <a href="/leaderboard/run" style={styles.navigation}>
                      Leaderboard Individu Lari
                    </a>
                  </li>
                  <li>
                    <a href="/leaderboard/ride" style={styles.navigation}>
                      Leaderboard Individu Gowes
                    </a>
                  </li>
                  <li>
                    <a href="/leaderboard/team/run" style={styles.navigation}>
                      Leaderboard Tim Lari
                    </a>
                  </li>
                  <li>
                    <a href="/leaderboard/team/ride" style={styles.navigation}>
                      Leaderboard Tim Gowes
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li>
                <Link to="/pemenang" style={styles.navigation}>
                  Pemenang
                </Link>
              </li> */}
              <li>
                <a
                  className="dropdown-trigger"
                  href="#"
                  data-target="dropdown5"
                  style={styles.navigation}
                >
                  Gallery
                </a>
                <ul id="dropdown5" className="dropdown-content">
                  <li>
                    <a href="/gallery" style={styles.navigation}>
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/gallery/twibon" style={styles.navigation}>
                      Twibon
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery/panduan-koneksi-strava"
                      style={styles.navigation}
                    >
                      Panduan Koneksi Strava
                    </a>
                  </li>
                  <li>
                    <a
                      href="/gallery/panduan-registrasi-tim"
                      style={styles.navigation}
                    >
                      Panduan Registrasi Tim
                    </a>
                  </li>
                </ul>
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
              <li>
                <Link to="/faq" style={styles.navigation}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a
            className="dropdown-trigger"
            href="#"
            data-target="dropdown2"
            style={styles.navigation}
          >
            <i className="material-icons left" style={styles.navigation}>
              account_circle
            </i>
            Akun / Registrasi
          </a>
          <ul id="dropdown2" className="dropdown-content">
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
              <>
                <li>
                  <Link to="/login" style={styles.navigation}>
                    Masuk
                  </Link>
                </li>
                <li>
                  <a href="/register" style={styles.navigation}>
                    Registrasi Individu
                  </a>
                </li>
                <li>
                  <Link to="/team-register" style={styles.navigation}>
                    Registrasi Tim
                  </Link>
                </li>
              </>
            )}
          </ul>
        </li>
        <li>
          <a href="/#info-event" style={styles.navigation}>
            Info Event
          </a>
        </li>
        <li>
          <a
            className="dropdown-trigger"
            href="#"
            data-target="dropdown4"
            style={styles.navigation}
          >
            Strava & Leaderboard
          </a>
          <ul id="dropdown4" className="dropdown-content">
            <li>
              <a href="/list-peserta/run" style={styles.navigation}>
                List Peserta Lari
              </a>
            </li>
            <li>
              <a href="/list-peserta/ride" style={styles.navigation}>
                List Peserta Gowes
              </a>
            </li>
            <li>
              <a href="/list-tim/run" style={styles.navigation}>
                List Tim Lari
              </a>
            </li>
            <li>
              <a href="/list-tim/ride" style={styles.navigation}>
                List Tim Gowes
              </a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="/leaderboard/run" style={styles.navigation}>
                Leaderboard Individu Lari
              </a>
            </li>
            <li>
              <a href="/leaderboard/ride" style={styles.navigation}>
                Leaderboard Individu Gowes
              </a>
            </li>
            <li>
              <a href="/leaderboard/team/run" style={styles.navigation}>
                Leaderboard Tim Lari
              </a>
            </li>
            <li>
              <a href="/leaderboard/team/ride" style={styles.navigation}>
                Leaderboard Tim Gowes
              </a>
            </li>
          </ul>
        </li>
        {/* <li>
          <Link to="/pemenang" style={styles.navigation}>
            Pemenang
          </Link>
        </li> */}
        <li>
          <a
            className="dropdown-trigger"
            href="#"
            data-target="dropdown6"
            style={styles.navigation}
          >
            Gallery
          </a>
          <ul id="dropdown6" className="dropdown-content">
            <li>
              <a href="/gallery" style={styles.navigation}>
                Gallery
              </a>
            </li>
            <li>
              <a href="/gallery/twibon" style={styles.navigation}>
                Twibon
              </a>
            </li>
            <li>
              <a
                href="/gallery/panduan-koneksi-strava"
                style={styles.navigation}
              >
                Panduan Koneksi Strava
              </a>
            </li>
            <li>
              <a
                href="/gallery/panduan-registrasi-tim"
                style={styles.navigation}
              >
                Panduan Registrasi Tim
              </a>
            </li>
          </ul>
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
        <li>
          <Link to="/faq" style={styles.navigation}>
            FAQ
          </Link>
        </li>
      </ul>
    </>
  );
};

const styles = {
  logo: {
    maxHeight: "56px",
    marginRight: "8px",
    padding: "10px 0",
  },
  navigation: {
    color: "#eb6c24",
  },
};
export default Navbar;
