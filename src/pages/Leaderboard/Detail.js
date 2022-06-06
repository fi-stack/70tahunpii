import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import M from "materialize-css/dist/js/materialize.min.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAthleteActivities } from "../../redux/action";
import { Gap } from "../../components";
import { toast } from "react-toastify";

const Detail = () => {
  const { type } = useParams();
  const { athleteId } = useParams();

  const elems = document.querySelectorAll(".modal");
  M.Modal.init(elems, {});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAthleteActivities(athleteId, type));
  }, [athleteId]);

  const { athlete_activities } = useSelector(
    (state) => state.athleteActivities
  );

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
        <title>Activities {athleteId}</title>
      </Helmet>
      <div className="col s12 m8">
        <div className="card">
          <div className="card-content">
            <span class="card-title">
              <div className="valign-wrapper center">
                <img
                  src={athlete_activities.profile_picture}
                  className="circle"
                  style={{ width: "30px", marginRight: "5px" }}
                />
                <a
                  href={`https://www.strava.com/athletes/${athleteId}`}
                  target="_blank"
                >
                  {athleteId}
                </a>
              </div>
            </span>
            <div>Nama : {athlete_activities?.name}</div>
            <div>Ebib : {athlete_activities?.ebib}</div>
            {type === "run" ? (
              <div>
                Total Aktivitas Lari : {athlete_activities?.activities_count}
              </div>
            ) : (
              <div>
                Total Aktivitas Gowes : {athlete_activities?.activities_count}
              </div>
            )}
            <Gap height={15} />
            <a href={`/leaderboard/${type}`}>Kembali ke Leaderboard</a>
            <Gap height={25} />
            <div className="red-text">
              *klik icon Validasi untuk info lebih detail
            </div>
            <table style={{ display: "block", overflow: "auto" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Validasi</th>
                  <th>Activity</th>
                  <th>Activity Name</th>
                  <th>Jarak (Km)</th>
                  <th>Elapsed Time</th>
                  <th>{type === "run" ? "Pace" : "Avg Speed (Km/h)"}</th>
                  <th>Tanggal / Waktu</th>
                </tr>
              </thead>
              <tbody>
                {athlete_activities?.activities?.map((value, index) => {
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
                        {type === "run" ? (
                          <td>
                            {timeToViewFormat(
                              Math.round(
                                1000 / (value.distance / value.moving_time)
                              )
                            )}
                            /Km
                          </td>
                        ) : (
                          <td>{zeroPad(value.average_speed * 3.6, 1)}</td>
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
                        {type === "run" ? (
                          <td>
                            {timeToViewFormat(
                              Math.round(
                                1000 / (value.distance / value.moving_time)
                              )
                            )}
                            /Km
                          </td>
                        ) : (
                          <td>{zeroPad(value.average_speed * 3.6, 1)}</td>
                        )}
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
                                setInvalidDesc(JSON.parse(value.invalid_desc));
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
                                            secara "Manual" tidak diperbolehkan
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
                                  if (value === "pace")
                                    return (
                                      <tr>
                                        <td>
                                          <div className="valign-wrapper center-align">
                                            <i class="material-icons red-text">
                                              close
                                            </i>
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
                                            <i class="material-icons red-text">
                                              close
                                            </i>
                                            "Speed" aktivitas perlu di
                                            crosscheck panitia
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
                        {type === "run" ? (
                          <td>
                            {timeToViewFormat(
                              Math.round(
                                1000 / (value.distance / value.moving_time)
                              )
                            )}
                            /Km
                          </td>
                        ) : (
                          <td>{zeroPad(value.average_speed * 3.6, 1)}</td>
                        )}
                        <td>{value.start_date_local}</td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
