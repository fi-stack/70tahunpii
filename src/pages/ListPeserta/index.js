import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Gap } from "../../components";
import { getListParticipantDetailsByType } from "../../redux/action";

const ListPeserta = () => {
  const { type } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListParticipantDetailsByType(type));
  }, [type]);

  const [page, setPage] = useState();
  const [search, setSearch] = useState();

  const { list_participant_details_by_type } = useSelector(
    (state) => state.listParticipantDetailsByType
  );

  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  return (
    <>
      <Helmet>
        <title>List Peserta</title>
      </Helmet>
      <div className="col s12 m8">
        <div className="card">
          <div className="card-content">
            <span class="card-title">
              List Peserta {type === "run" ? "Lari" : "Gowes"}
            </span>
            <span class="badge teal lighten-5">
              <b>Total : {list_participant_details_by_type?.total}</b>
            </span>
            <div className="row">
              <div class="input-field col s6 l4">
                <input
                  type="text"
                  onChange={(e) => {
                    dispatch(
                      getListParticipantDetailsByType(type, e.target.value)
                    );
                    setSearch(e.target.value);
                  }}
                />
                <label>Cari Ebib</label>
              </div>
            </div>
            <table style={{ display: "block", overflow: "auto" }}>
              <thead>
                <tr>
                  <th>Athlete</th>
                  <th>Ebib</th>
                  <th>Nama</th>
                  <th>Gender</th>
                  <th>Kategori Usia</th>
                  <th>Tim</th>
                </tr>
              </thead>
              <tbody>
                {list_participant_details_by_type.data?.map((value, index) => (
                  <tr key={index}>
                    <td>
                      <div className="valign-wrapper center-align">
                        {value?.athlete ? (
                          <>
                            <img
                              src={value.athlete?.profile_picture}
                              className="circle"
                              style={{ width: "30px", marginRight: "5px" }}
                            />
                            <a
                              href={`https://www.strava.com/athletes/${value.athlete_id}`}
                              target="_blank"
                            >
                              {value.athlete_id}
                            </a>
                          </>
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
                      </div>
                    </td>
                    <td>{value.ebib}</td>
                    <td>{value.user?.name}</td>
                    <td>
                      {value.user?.gender === "male"
                        ? "Laki-Laki"
                        : "Perempuan"}
                    </td>
                    <td>
                      <b>
                        {(() => {
                          if (getAge(value.user?.birthday) <= 35) {
                            return "0 - 35 Tahun";
                          } else if (
                            getAge(value.user?.birthday) >= 36 &&
                            getAge(value.user?.birthday) <= 50
                          ) {
                            return "36 - 50 Tahun";
                          } else {
                            return "51 Tahun ke atas";
                          }
                        })()}
                      </b>
                    </td>
                    <td>{value.team?.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Gap height={15} />
            <div className="center">
              {list_participant_details_by_type?.links?.map((value, index) =>
                value.active ? (
                  <button
                    className="waves-effect waves-light btn"
                    onClick={() => {
                      dispatch(
                        getListParticipantDetailsByType(
                          type,
                          search,
                          value.url.split("=")[1]
                        )
                      );
                      setPage(value.url.split("=")[1]);
                    }}
                  >
                    {value.label}
                  </button>
                ) : (
                  <button
                    className="waves-effect waves-light teal lighten-5 btn grey-text"
                    onClick={() => {
                      dispatch(
                        getListParticipantDetailsByType(
                          type,
                          search,
                          value.url.split("=")[1]
                        )
                      );
                      setPage(value.url.split("=")[1]);
                    }}
                  >
                    {(() => {
                      if (value.label === "&laquo; Previous") {
                        return "Prev";
                      } else if (value.label === "Next &raquo;") {
                        return "Next";
                      } else {
                        return value.label;
                      }
                    })()}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPeserta;
