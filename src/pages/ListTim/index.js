import M from "materialize-css/dist/js/materialize.min.js";
import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Gap } from "../../components";
import { getListTeamsByType } from "../../redux/action";

const ListTim = () => {
  const { type } = useParams();

  var elems = document.querySelectorAll(".modal");
  M.Modal.init(elems, {});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListTeamsByType(type));
  }, [type]);

  const [page, setPage] = useState();
  const [search, setSearch] = useState();
  const [listMember, setListMember] = useState([]);

  const { list_teams_by_type } = useSelector((state) => state.listTeamsByType);

  return (
    <>
      <Helmet>
        <title>List Tim</title>
      </Helmet>
      <div className="col s12 m8">
        <div className="card">
          <div className="card-content">
            <span className="card-title">
              List Tim {type === "run" ? "Lari" : "Gowes"}
            </span>
            <span className="badge teal lighten-5">
              <b>Total : {list_teams_by_type?.total}</b>
            </span>
            <div className="row">
              <div className="input-field col s6 l4">
                <input
                  type="text"
                  onChange={(e) => {
                    dispatch(getListTeamsByType(type, e.target.value));
                    setSearch(e.target.value);
                  }}
                />
                <label>Cari Tim</label>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Nama Tim</th>
                  <th>Member</th>
                </tr>
              </thead>
              <tbody>
                {list_teams_by_type.data?.map((value, index) => (
                  <tr key={index}>
                    <td>
                      <img src={value.image} width={40} className="circle" />
                    </td>
                    <td>{value.name}</td>
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
                      <div id="modal1" className="modal">
                        <div className="modal-content">
                          <table>
                            <thead>
                              <tr>
                                <th>Athlete</th>
                                <th>Ebib</th>
                                <th>Nama</th>
                                <th>Gender</th>
                              </tr>
                            </thead>
                            <tbody>
                              {listMember?.map((value, index) => (
                                <tr key={index}>
                                  <td>
                                    {value?.athlete_id ? (
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
                                    {value?.user?.gender === "male"
                                      ? "Laki-Laki"
                                      : "Perempuan"}
                                  </td>
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Gap height={15} />
            <div className="center">
              {list_teams_by_type?.links?.map((value, index) =>
                value.active ? (
                  <button
                    className="waves-effect waves-light btn"
                    onClick={() => {
                      dispatch(
                        getListTeamsByType(
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
                        getListTeamsByType(
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

export default ListTim;
