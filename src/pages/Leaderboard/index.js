import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Gap } from "../../components";
import { getLeaderboards } from "../../redux/action";

const Leaderboard = () => {
  const { type } = useParams();

  M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {});
  M.Modal.init(document.querySelectorAll(".modal"), {});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaderboards(type));
  }, [type]);

  const [gender, setGender] = useState();
  const [rangeAge, setRangeAge] = useState("x");
  const [titleButton, setTitleButton] = useState(
    `Semua Peserta ${type === "run" ? "Lari" : "Gowes"}`
  );

  const { leaderboards } = useSelector((state) => state.leaderboards);

  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  var rows = [];

  {
    leaderboards?.map((value) => {
      if (rangeAge === "a") {
        if (
          value.participant_details[0]?.type === type &&
          value.user?.gender === gender &&
          getAge(value.user?.birthday) <= 35
        ) {
          rows.push(value);
        }
      }
      if (rangeAge === "b") {
        if (
          value.participant_details[0]?.type === type &&
          value.user?.gender === gender &&
          getAge(value.user?.birthday) >= 36 &&
          getAge(value.user?.birthday) <= 50
        ) {
          rows.push(value);
        }
      }
      if (rangeAge === "c") {
        if (
          value.participant_details[0]?.type === type &&
          value.user?.gender === gender &&
          getAge(value.user?.birthday) >= 51
        ) {
          rows.push(value);
        }
      }
      if (rangeAge === "x") {
        if (value.participant_details[0]?.type === type) {
          rows.push(value);
        }
      }
    });
  }

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

  function searchTable() {
    var input;
    var saring;
    var status;
    var tbody;
    var tr;
    var td;
    var i;
    var j;
    input = document.getElementById("input");
    saring = input.value.toUpperCase();
    tbody = document.getElementsByTagName("tbody")[0];
    tr = tbody.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if (td[j].innerHTML.toUpperCase().indexOf(saring) > -1) {
          status = true;
        }
      }
      if (status) {
        tr[i].style.display = "";
        status = false;
      } else {
        tr[i].style.display = "none";
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Leaderboard</title>
      </Helmet>
      <div className="col s12 m8">
        <div className="card">
          <div className="card-content">
            <span class="card-title">
              Leaderboard Individu {type === "run" ? "Lari" : "Gowes"}{" "}
            </span>
            <a
              class="dropdown-trigger btn"
              href="#"
              data-target="dropdownLeaderboard"
            >
              {titleButton}
            </a>
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
            <ul id="dropdownLeaderboard" class="dropdown-content">
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setRangeAge("x");
                    setTitleButton(
                      `Semua Peserta ${type === "run" ? "Lari" : "Gowes"}`
                    );
                  }}
                >
                  {`Semua Peserta ${type === "run" ? "Lari" : "Gowes"}`}
                </a>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setGender("male");
                    setRangeAge("a");
                    setTitleButton("Laki-Laki 0 - 35 Tahun");
                  }}
                >
                  Laki-Laki 0 - 35 Tahun
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setGender("male");
                    setRangeAge("b");
                    setTitleButton("Laki-Laki 36 - 50 Tahun");
                  }}
                >
                  Laki-Laki 36 - 50 Tahun
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setGender("male");
                    setRangeAge("c");
                    setTitleButton("Laki-Laki 51 Tahun ke atas");
                  }}
                >
                  Laki-Laki 51 Tahun ke atas
                </a>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setGender("female");
                    setRangeAge("a");
                    setTitleButton("Perempuan 0 - 35 Tahun");
                  }}
                >
                  Perempuan 0 - 35 Tahun
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setGender("female");
                    setRangeAge("b");
                    setTitleButton("Perempuan 36 - 50 Tahun");
                  }}
                >
                  Perempuan 36 - 50 Tahun
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  onClick={() => {
                    setGender("female");
                    setRangeAge("c");
                    setTitleButton("Perempuan 51 Tahun ke atas");
                  }}
                >
                  Perempuan 51 Tahun ke atas
                </a>
              </li>
            </ul>
            <div className="row">
              <div className="input-field col s12 m8 l4">
                <input type="text" id="input" onChange={() => searchTable()} />
                <label>Cari...</label>
              </div>
            </div>
            <table style={{ display: "block", overflow: "auto" }} id="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Athlete</th>
                  <th>Ebib</th>
                  <th>Nama Lengkap</th>
                  <th>Total Aktivitas</th>
                  <th>Total Jarak (Km)</th>
                  <th>Elapsed Time</th>
                  <th>Lihat</th>
                </tr>
              </thead>
              <tbody>
                {rows?.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="valign-wrapper center-align">
                        <img
                          src={value.profile_picture}
                          className="circle"
                          style={{ width: "30px", marginRight: "5px" }}
                        />
                        <a
                          href={`https://www.strava.com/athletes/${value.athlete_id}`}
                          target="_blank"
                        >
                          {value.athlete_id}
                        </a>
                      </div>
                    </td>
                    <td>{value.participant_details[0]?.ebib}</td>
                    <td>{value.user?.name}</td>
                    <td>{value.activities_count}</td>
                    <td>{zeroPad(value.activities_sum_distance / 1000, 1)}</td>
                    <td>
                      {timeToViewFormat(value.activities_sum_elapsed_time)}
                    </td>
                    <td>
                      {value.activities_count_not_valid === 0 ? (
                        <Link
                          to={`/leaderboard/${type}/${value.athlete_id}`}
                          className="waves-effect waves-light btn modal-trigger"
                          href="#modal1"
                        >
                          <i class="material-icons">remove_red_eye</i>
                        </Link>
                      ) : (
                        <Link
                          to={`/leaderboard/${type}/${value.athlete_id}`}
                          className="waves-effect waves-light btn red lighten-1 modal-trigger"
                          href="#modal1"
                        >
                          <i class="material-icons">remove_red_eye</i>
                        </Link>
                      )}
                    </td>
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

export default Leaderboard;
