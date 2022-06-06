import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import { getLeaderboardTeams } from "../../redux/action";

const Team = () => {
  const { type } = useParams();

  const dispatch = useDispatch();

  var elems = document.querySelectorAll(".modal");
  M.Modal.init(elems, {});

  const [listMember, setListMember] = useState([]);

  useEffect(() => {
    dispatch(getLeaderboardTeams(type));
  }, [type]);

  const { leaderboard_teams } = useSelector((state) => state.leaderboardTeams);

  function compare(a, b) {
    if (a.distance_team < b.distance_team) {
      return 1;
    }
    if (a.distance_team > b.distance_team) {
      return -1;
    }
    return 0;
  }

  leaderboard_teams.sort(compare);

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
        <title>Leaderboard Tim</title>
      </Helmet>
      <div className="col s12 m8">
        <div className="card">
          <div className="card-content">
            <span class="card-title">
              Leaderboard Tim {type === "run" ? "Lari" : "Gowes"}
            </span>
            <Gap height={15} />
            <div>
              <ul>
                <li>Jadwal Sinkronisasi Strava Sesi 1 : 12:00 s.d 14:00</li>
                <li>Jadwal Sinkronisasi Strava Sesi 2 : 18:00 s.d 20:00</li>
                <li>
                  Sinkronisasi Strava akan mengambil 30 aktivitas terakhir
                </li>
                <li>
                  Data akan berubah selama masa lomba berlangsung hingga
                  validasi pemenang.
                </li>
              </ul>
            </div>
            <table style={{ display: "block", overflow: "auto" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Tim</th>
                  <th>Total Aktivitas</th>
                  <th>Total Jarak (Km)</th>
                  <th>Elapsed Time</th>
                  <th>Lihat</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard_teams?.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.activity_team}</td>
                    <td>{zeroPad(value.distance_team / 1000, 1)}</td>
                    <td>{timeToViewFormat(value.elapsed_time_team)}</td>
                    <td>
                      <a
                        className="waves-effect waves-light btn modal-trigger"
                        href="#modal1"
                        onClick={() => {
                          setListMember([...value.participant_details]);
                        }}
                      >
                        <i class="material-icons">remove_red_eye</i>
                      </a>
                    </td>
                    <div id="modal1" className="modal">
                      <div className="modal-content">
                        <table>
                          <thead>
                            <tr>
                              <th>Athlete</th>
                              <th>Ebib</th>
                              <th>Nama</th>
                              <th>Total Aktivitas</th>
                              <th>Total Jarak (Km)</th>
                              <th>Elapsed Time</th>
                              <th>Gender</th>
                              <th>Lihat</th>
                            </tr>
                          </thead>
                          <tbody>
                            {listMember?.map((value, index) => (
                              <tr key={index}>
                                <td>
                                  {value?.athlete ? (
                                    <a
                                      href={`https://www.strava.com/athletes/${value?.athlete_id}`}
                                    >
                                      {value?.athlete_id}
                                    </a>
                                  ) : (
                                    <a href="#">
                                      <i
                                        className="material-icons red-text"
                                        onClick={() => {
                                          alert(
                                            `${value?.user?.name} belum melakukan koneksi Strava`
                                          );
                                          window.location.reload();
                                        }}
                                      >
                                        error
                                      </i>
                                    </a>
                                  )}
                                </td>
                                <td>{value?.ebib}</td>
                                <td>{value?.user?.name}</td>
                                <td>
                                  {value?.athlete ? (
                                    value?.athlete?.activities_count
                                  ) : (
                                    <a href="#">
                                      <i
                                        className="material-icons red-text"
                                        onClick={() => {
                                          alert(
                                            `${value?.user?.name} belum melakukan koneksi Strava`
                                          );
                                          window.location.reload();
                                        }}
                                      >
                                        error
                                      </i>
                                    </a>
                                  )}
                                </td>
                                <td>
                                  {value?.athlete ? (
                                    zeroPad(
                                      value?.athlete?.activities_sum_distance /
                                        1000,
                                      1
                                    )
                                  ) : (
                                    <a href="#">
                                      <i
                                        className="material-icons red-text"
                                        onClick={() => {
                                          alert(
                                            `${value?.user?.name} belum melakukan koneksi Strava`
                                          );
                                          window.location.reload();
                                        }}
                                      >
                                        error
                                      </i>
                                    </a>
                                  )}
                                </td>
                                <td>
                                  {value?.athlete ? (
                                    timeToViewFormat(
                                      value?.athlete
                                        ?.activities_sum_elapsed_time
                                    )
                                  ) : (
                                    <a href="#">
                                      <i
                                        className="material-icons red-text"
                                        onClick={() => {
                                          alert(
                                            `${value?.user?.name} belum melakukan koneksi Strava`
                                          );
                                          window.location.reload();
                                        }}
                                      >
                                        error
                                      </i>
                                    </a>
                                  )}
                                </td>
                                <td>
                                  {value?.user?.gender === "male"
                                    ? "Laki-Laki"
                                    : "Perempuan"}
                                </td>
                                {value?.athlete?.activities_count_not_valid ===
                                0 ? (
                                  <td>
                                    <Link
                                      to={`/leaderboard/${type}/${value.athlete_id}`}
                                      className="waves-effect waves-light btn modal-trigger"
                                      href="#modal1"
                                    >
                                      <i class="material-icons">
                                        remove_red_eye
                                      </i>
                                    </Link>
                                  </td>
                                ) : (
                                  <td>
                                    <Link
                                      to={`/leaderboard/${type}/${value.athlete_id}`}
                                      className="waves-effect waves-light btn red lighten-1 modal-trigger"
                                      href="#modal1"
                                    >
                                      <i class="material-icons">
                                        remove_red_eye
                                      </i>
                                    </Link>
                                  </td>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="modal-footer">
                        <a
                          href="#!"
                          className="modal-close waves-effect waves-green btn-flat"
                        >
                          Tutup
                        </a>
                      </div>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
