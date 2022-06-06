import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Gap } from "../../components";
import { getAthleteByUserId } from "../../redux/action/athlete";
import { toast } from "react-toastify";

const MyActivities = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const elems = document.querySelectorAll(".modal");
  M.Modal.init(elems, {});

  useEffect(() => {
    dispatch(getAthleteByUserId(user?.id));
  }, [user]);

  const { athlete_by_user_id } = useSelector((state) => state.athleteByUserId);

  const [invalidDesc, setInvalidDesc] = useState([]);
  const [adminDesc, setAdminDesc] = useState();
  const [warningDesc, setWarningDesc] = useState([]);

  const zeroPad = (num, pad) => {
    var pd = Math.pow(10, pad);
    return Math.floor(num * pd) / pd;
  };

  const timeToViewFormat = (number) => {
    if (number !== null || number !== "") {
      if (number > 0 && number < 60) {
        return number + "s";
      }
      if (number >= 60 && number < 3600) {
        let second = number % 60;
        let minute = number - second;
        minute = minute / 60;
        return minute + "m " + second + "s";
      } else if (number >= 3600) {
        let second = number % 60;
        let tempMinute = (number - second) / 60;
        let minute = tempMinute % 60;
        let hour = (tempMinute - minute) / 60;
        return hour + "h " + minute + "m " + second + "s";
      }
    } else {
      return "-";
    }
  };

  return (
    <>
      <Helmet>
        <title>My Activities</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m6 offset-m3 l6 offset-l3">
          <div className="card">
            <div className="card-content">
              <div>
                <Link to="/dashboard">Kembali Ke Dashboard</Link>
              </div>
              <Gap height={15} />
              <div className="center">
                <img
                  src={athlete_by_user_id?.profile_picture}
                  className="circle"
                  width={60}
                />
              </div>
              <table>
                <tr>
                  <td>Athlete Id</td>
                  <td>
                    <a
                      href={`https://www.strava.com/athletes/${athlete_by_user_id?.athlete_id}`}
                      target="_blank"
                    >
                      {athlete_by_user_id?.athlete_id}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Athlete Name</td>
                  <td>{athlete_by_user_id?.athlete_name}</td>
                </tr>
                {athlete_by_user_id?.activities_count_run > 0 ? (
                  <tr>
                    <td>Total Activity Lari</td>
                    <td>{athlete_by_user_id?.activities_count_run}</td>
                  </tr>
                ) : null}
                {athlete_by_user_id?.activities_count_ride > 0 ? (
                  <tr>
                    <td>Total Activity Gowes</td>
                    <td>{athlete_by_user_id?.activities_count_ride}</td>
                  </tr>
                ) : null}
              </table>
            </div>
          </div>
        </div>
        <div className="col s12 m6 offset-m3 l6 offset-l3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">My Activity</span>
              <Gap height={15} />
              <div className="red-text">*klik icon untuk info lebih detail</div>
              <table style={{ display: "block", overflow: "auto" }}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Validasi</th>
                    <th>Tipe</th>
                    <th>Activity</th>
                    <th>Activity Name</th>
                    <th>Jarak (Km)</th>
                    <th>Elapsed Time</th>
                    <th>Pace</th>
                    <th>Avg Speed (Km/h)</th>
                    <th>Tanggal / Waktu</th>
                  </tr>
                </thead>
                <tbody>
                  {athlete_by_user_id?.activities?.map((value, index) => {
                    if (value.valid && value.warning === false)
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className="center">
                            <a
                              href="#"
                              onClick={() =>
                                toast.success(`Aktivitas memenuhi "Rules"`)
                              }
                            >
                              <i class="waves-effect material-icons teal-text">
                                check_circle
                              </i>
                            </a>
                          </td>
                          <td>
                            {value.type === "Run" || value.type === "Walk"
                              ? "Lari"
                              : "Gowes"}
                          </td>
                          <td>
                            <a
                              href={`https://www.strava.com/activities/${value.activity_id}`}
                              target="_blank"
                            >
                              {value.activity_id}
                            </a>
                          </td>
                          <td>{value.activity_name}</td>
                          <td>{zeroPad(value.distance / 1000, 1)}</td>
                          <td>{timeToViewFormat(value.elapsed_time)}</td>
                          {value.type === "Run" || value.type === "Walk" ? (
                            <td>
                              {timeToViewFormat(
                                Math.round(
                                  1000 / (value.distance / value.moving_time)
                                )
                              )}
                              /Km
                            </td>
                          ) : (
                            <td></td>
                          )}
                          {value.type === "Ride" ? (
                            <td>{zeroPad(value.average_speed * 3.6, 1)}</td>
                          ) : (
                            <td></td>
                          )}
                          <td>{value.start_date_local}</td>
                        </tr>
                      );
                    else if (value.valid && value.warning)
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td className="center">
                            <a href="#modal1" className="modal-trigger">
                              <i
                                class="waves-effect material-icons orange-text"
                                onClick={() =>
                                  setWarningDesc(JSON.parse(value.warning_desc))
                                }
                              >
                                error
                              </i>
                            </a>
                            <div id="modal1" class="modal">
                              <div class="modal-content">
                                <div
                                  className="valign-wrapper center-align orange-text"
                                  style={{ fontWeight: "bold" }}
                                >
                                  Warning
                                </div>
                                <table
                                  style={{
                                    display: "block",
                                    overflow: "auto",
                                  }}
                                >
                                  {warningDesc?.map((value, index) => {
                                    if (value === "pace")
                                      return (
                                        <tr>
                                          <td>
                                            <div className="valign-wrapper center-align">
                                              <i class="material-icons orange-text">
                                                close
                                              </i>
                                              "Pace" aktivitas warning
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    if (value === "speed")
                                      return (
                                        <tr>
                                          <td>
                                            <div className="valign-wrapper center-align">
                                              <i class="material-icons orange-text">
                                                close
                                              </i>
                                              "Speed" aktivitas warning
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                  })}
                                </table>
                              </div>
                              <div class="modal-footer">
                                <a
                                  href="#!"
                                  class="modal-close waves-effect waves-green btn-flat"
                                >
                                  Kembali
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            {value.type === "Run" || value.type === "Walk"
                              ? "Lari"
                              : "Gowes"}
                          </td>
                          <td>
                            <a
                              href={`https://www.strava.com/activities/${value.activity_id}`}
                              target="_blank"
                            >
                              {value.activity_id}
                            </a>
                          </td>
                          <td>{value.activity_name}</td>
                          <td>{zeroPad(value.distance / 1000, 1)}</td>
                          <td>{timeToViewFormat(value.elapsed_time)}</td>
                          <td>
                            {timeToViewFormat(
                              Math.round(
                                1000 / (value.distance / value.moving_time)
                              )
                            )}
                            /Km
                          </td>
                          <td>{zeroPad(value.average_speed * 3.6, 1)}</td>
                          <td>{value.start_date_local}</td>
                        </tr>
                      );
                    else
                      return (
                        <tr className="red lighten-4" key={index}>
                          <td>{index + 1}</td>
                          <td className="center">
                            <a href="#modal1" className="modal-trigger">
                              <i
                                class="waves-effect material-icons red-text"
                                onClick={() => {
                                  setInvalidDesc(
                                    JSON.parse(value.invalid_desc)
                                  );
                                  setAdminDesc(value.admin_desc);
                                }}
                              >
                                error
                              </i>
                            </a>
                            <div id="modal1" class="modal">
                              <div class="modal-content">
                                <div
                                  className="valign-wrapper center-align red-text"
                                  style={{ fontWeight: "bold" }}
                                >
                                  Aktivitas Tidak Memenuhi Rules
                                </div>
                                <table
                                  style={{
                                    display: "block",
                                    overflow: "auto",
                                  }}
                                >
                                  {adminDesc ? (
                                    <tr>
                                      <td>
                                        <div className="valign-wrapper center-align">
                                          <i class="material-icons red-text">
                                            close
                                          </i>
                                          {adminDesc}
                                        </div>
                                      </td>
                                    </tr>
                                  ) : null}
                                  {invalidDesc?.map((value, index) => {
                                    if (value === "manual")
                                      return (
                                        <tr>
                                          <td>
                                            <div className="valign-wrapper center-align">
                                              <i class="material-icons red-text">
                                                close
                                              </i>
                                              Aktivitas berasal dari masukan
                                              secara "Manual" tidak
                                              diperbolehkan
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    if (value === "route")
                                      return (
                                        <tr>
                                          <td>
                                            <div className="valign-wrapper center-align">
                                              <i class="material-icons red-text">
                                                close
                                              </i>
                                              "Rute Aktivitas" tidak ada
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    if (value === "less distance")
                                      return (
                                        <tr>
                                          <td>
                                            <div className="valign-wrapper center-align">
                                              <i class="material-icons red-text">
                                                close
                                              </i>
                                              "Jarak Minimum" tidak terpenuhi
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    if (value === "flagged")
                                      return (
                                        <tr>
                                          <td>
                                            <div
                                              className="valign-wrapper center-align"
                                              style={{ fontWeight: "bold" }}
                                            >
                                              <i class="material-icons red-text">
                                                close
                                              </i>
                                              "Flagged" oleh Strava
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    if (value === "overlaps")
                                      return (
                                        <tr>
                                          <td>
                                            <div className="valign-wrapper center-align">
                                              <i class="material-icons red-text">
                                                close
                                              </i>
                                              Aktivitas "Overlaps" dengan
                                              aktivitas sebelumnya
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                  })}
                                </table>
                              </div>
                              <div class="modal-footer">
                                <a
                                  href="#!"
                                  class="modal-close waves-effect waves-green btn-flat"
                                >
                                  Kembali
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            {value.type === "Run" || value.type === "Walk"
                              ? "Lari"
                              : "Gowes"}
                          </td>
                          <td>
                            <a
                              href={`https://www.strava.com/activities/${value.activity_id}`}
                              target="_blank"
                            >
                              {value.activity_id}
                            </a>
                          </td>
                          <td>{value.activity_name}</td>
                          <td>{zeroPad(value.distance / 1000, 1)}</td>
                          <td>{timeToViewFormat(value.elapsed_time)}</td>
                          <td>
                            {timeToViewFormat(
                              Math.round(
                                1000 / (value.distance / value.moving_time)
                              )
                            )}
                            /Km
                          </td>
                          <td>{zeroPad(value.average_speed * 3.6, 1)}</td>
                          <td>{value.start_date_local}</td>
                        </tr>
                      );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <div
            className="valign-wrapper center-align red-text"
            style={{ fontWeight: "bold" }}
          >
            Aktivitas Tidak Memenuhi Rules
          </div>
          <table
            style={{
              display: "block",
              overflow: "auto",
            }}
          >
            {invalidDesc?.map((value, index) => {
              if (value === "manual")
                return (
                  <tr>
                    <td>
                      <div className="valign-wrapper center-align">
                        <i class="material-icons red-text">close</i>
                        Aktivitas berasal dari masukan secara "Manual" tidak
                        diperbolehkan
                      </div>
                    </td>
                  </tr>
                );
              if (value === "route")
                return (
                  <tr>
                    <td>
                      <div className="valign-wrapper center-align">
                        <i class="material-icons red-text">close</i>
                        "Rute Aktivitas" tidak ada
                      </div>
                    </td>
                  </tr>
                );
              if (value === "less distance")
                return (
                  <tr>
                    <td>
                      <div className="valign-wrapper center-align">
                        <i class="material-icons red-text">close</i>
                        "Jarak Minimum" tidak terpenuhi
                      </div>
                    </td>
                  </tr>
                );
              if (value === "flagged")
                return (
                  <tr>
                    <td>
                      <div
                        className="valign-wrapper center-align"
                        style={{ fontWeight: "bold" }}
                      >
                        <i class="material-icons red-text">close</i>
                        "Flagged" oleh Strava
                      </div>
                    </td>
                  </tr>
                );
              if (value === "overlaps")
                return (
                  <tr>
                    <td>
                      <div className="valign-wrapper center-align">
                        <i class="material-icons red-text">close</i>
                        Aktivitas "Overlaps" dengan aktivitas sebelumnya
                      </div>
                    </td>
                  </tr>
                );
              if (value === "pace")
                return (
                  <tr>
                    <td>
                      <div className="valign-wrapper center-align">
                        <i class="material-icons red-text">close</i>
                        "Pace" aktivitas tidak valid
                      </div>
                    </td>
                  </tr>
                );
              if (value === "speed")
                return (
                  <tr>
                    <td>
                      <div className="valign-wrapper center-align">
                        <i class="material-icons red-text">close</i>
                        "Speed" aktivitas perlu di crosscheck panitia
                      </div>
                    </td>
                  </tr>
                );
            })}
          </table>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Kembali
          </a>
        </div>
      </div>
    </>
  );
};

export default MyActivities;
