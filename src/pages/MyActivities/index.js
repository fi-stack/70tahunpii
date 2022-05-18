import { useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import { getAthleteByUserId } from "../../redux/action/athlete";

const MyActivities = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAthleteByUserId(user?.id));
  }, [user]);

  const { athlete_by_user_id } = useSelector((state) => state.athleteByUserId);

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
              {athlete_by_user_id?.activities?.map((value, index) => {
                if (value.valid)
                  return (
                    <a
                      href={`https://www.strava.com/activities/${value.activity_id}`}
                      target="_blank"
                    >
                      <div className="card" key={index}>
                        <div className="card-content">
                          <div>
                            {value.activity_name}{" "}
                            <b>{zeroPad(value.distance / 1000, 1)} Km</b>{" "}
                            {value.type}{" "}
                            <i class="material-icons teal-text center">
                              check_circle
                            </i>
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#616161",
                            }}
                          >
                            {timeToViewFormat(value.elapsed_time)}
                          </div>
                          <div style={{ fontSize: 11, color: "#616161" }}>
                            {value.start_date_local}
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                else
                  return (
                    <a
                      href={`https://www.strava.com/activities/${value.activity_id}`}
                      target="_blank"
                    >
                      <div className="card red lighten-4" key={index}>
                        <div className="card-content">
                          <div>
                            {value.activity_name}{" "}
                            <b>{zeroPad(value.distance / 1000, 1)} Km</b>{" "}
                            {value.type}{" "}
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              fontWeight: "bold",
                              color: "#616161",
                            }}
                          >
                            {timeToViewFormat(value.elapsed_time)}
                          </div>
                          <div style={{ fontSize: 11, color: "#616161" }}>
                            {value.start_date_local}
                          </div>
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
                            {JSON.parse(value?.invalid_desc).map(
                              (value, index) => `${value}, `
                            )}
                          </a>
                        </div>
                      </div>
                    </a>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyActivities;
