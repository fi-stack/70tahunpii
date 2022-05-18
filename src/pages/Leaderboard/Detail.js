import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAthleteActivities } from "../../redux/action";
import { Gap } from "../../components";
import { toast } from "react-toastify";

const Detail = () => {
  const { type } = useParams();
  const { athleteId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAthleteActivities(athleteId, type));
  }, [athleteId]);

  const { athlete_activities } = useSelector(
    (state) => state.athleteActivities
  );

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
              Activities{" "}
              <a
                href={`https://www.strava.com/athletes/${athleteId}`}
                target="_blank"
              >
                {athleteId}
              </a>
            </span>
            <div>Nama : {athlete_activities?.name}</div>
            <div>Ebib : {athlete_activities?.ebib}</div>
            <Gap height={15} />
            <a href={`/leaderboard/${type}`}>Kembali ke Leaderboard</a>
            <table style={{ display: "block", overflow: "auto" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Activity</th>
                  <th>Activity Name</th>
                  <th>Jarak (Km)</th>
                  <th>Elapsed Time</th>
                  <th>Tanggal / Waktu</th>
                  <th>Valid</th>
                  <th>Jarak</th>
                  <th>Manual</th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
                {athlete_activities?.activities?.map((value, index) => {
                  if (value.valid)
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
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
                        <td>{value.start_date_local}</td>
                        <td className="center">
                          {value.valid ? (
                            <i class="material-icons teal-text">check_circle</i>
                          ) : (
                            <a href="#">
                              <i
                                class="material-icons red-text"
                                onClick={() =>
                                  toast.error("Silahkan Hubungi Live Chat")
                                }
                              >
                                error
                              </i>
                            </a>
                          )}
                        </td>
                      </tr>
                    );
                  else
                    return (
                      <tr className="red lighten-4" key={index}>
                        <td>{index + 1}</td>
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
                        <td>{value.start_date_local}</td>
                        <td className="center">
                          {value.valid ? (
                            <i class="material-icons teal-text">check_circle</i>
                          ) : (
                            <a href="#">
                              <i
                                class="material-icons red-text"
                                onClick={() =>
                                  toast.error(
                                    `Activity tidak valid sesuai "Rules", jika ada pertanyaan silahkan hubungi live chat`
                                  )
                                }
                              >
                                error
                              </i>
                            </a>
                          )}
                        </td>
                        <td className="center">
                          {JSON.parse(value?.invalid_desc).map(
                            (value, index) => {
                              if (value === "less distance")
                                return (
                                  <a href="#">
                                    <i
                                      class="material-icons red-text"
                                      onClick={() =>
                                        toast.error(
                                          `Activity tidak memenuhi minimal jarak sesuai "Rules", jika ada pertanyaan silahkan hubungi live chat`
                                        )
                                      }
                                    >
                                      close
                                    </i>
                                  </a>
                                );
                            }
                          )}
                        </td>
                        <td className="center">
                          {JSON.parse(value?.invalid_desc).map(
                            (value, index) => {
                              if (value === "manual")
                                return (
                                  <a href="#">
                                    <i
                                      class="material-icons red-text"
                                      onClick={() =>
                                        toast.error(
                                          `Activity tidak valid sesuai "Rules", jika ada pertanyaan silahkan hubungi live chat`
                                        )
                                      }
                                    >
                                      close
                                    </i>
                                  </a>
                                );
                            }
                          )}
                        </td>
                        <td className="center">
                          {JSON.parse(value?.invalid_desc).map(
                            (value, index) => {
                              if (value === "flagged")
                                return (
                                  <a href="#">
                                    <i
                                      class="material-icons red-text"
                                      onClick={() =>
                                        toast.error(
                                          `Activity tidak valid sesuai "Rules", jika ada pertanyaan silahkan hubungi live chat`
                                        )
                                      }
                                    >
                                      close
                                    </i>
                                  </a>
                                );
                            }
                          )}
                        </td>
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
