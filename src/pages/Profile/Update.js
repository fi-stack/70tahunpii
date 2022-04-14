import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getCities,
  getDistricts,
  getProvinces,
  getUser,
  getVillages,
  updateProfile,
} from "../../redux/action";
import { Helmet } from "react-helmet";

const Update = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  });

  useEffect(() => {
    dispatch(getProvinces());
  }, [dispatch]);

  const { user } = useSelector((state) => state.user);

  const { provinces } = useSelector((state) => state.provinces);
  const { cities } = useSelector((state) => state.cities);
  const { districts } = useSelector((state) => state.districts);
  const { villages } = useSelector((state) => state.villages);

  const [idMemberPII = user?.id_member_pii, setIdMemberPII] = useState();
  const [name = user?.name, setName] = useState();
  const [birthplace = user?.birthplace, setBirthplace] = useState();
  const [birthday = user?.birthday, setBirthday] = useState();
  const [gender = user?.gender, setGender] = useState();
  const [email = user?.email, setEmail] = useState();
  const [phone = user?.phone, setPhone] = useState();
  const [nik = user?.nik, setNik] = useState();
  const [address = user?.address, setAddress] = useState();
  const [provinceCode = user?.province_code, setProvinceCode] = useState();
  const [cityCode = user?.city_code, setCityCode] = useState();
  const [districtCode = user?.district_code, setDistrictCode] = useState();
  const [villageCode = user?.village_code, setVillageCode] = useState();
  const [postCode = user?.post_code, setPostCode] = useState();
  const [job = user?.job, setJob] = useState();
  const [college = user?.college, setCollege] = useState();
  const [major = user?.major, setMajor] = useState();
  const [jerseySize = user?.jersey_size, setJerseySize] = useState();
  const [errors, setErrors] = useState([]);

  const [isMemberPII, setIsMemberPII] = useState(false);
  const [isDisplayForm, setIsDisplayForm] = useState(false);

  const navigate = useNavigate();

  const store = (e) => {
    e.preventDefault();

    if (isMemberPII === "true") {
      const form = {
        id_member_pii: idMemberPII,
        name,
        birthplace,
        birthday,
        gender,
        email,
        phone,
        nik,
        address,
        province_code: provinceCode,
        city_code: cityCode,
        district_code: districtCode,
        village_code: villageCode,
        post_code: postCode,
        job,
        college,
        major,
        jersey_size: jerseySize,
      };

      updateProfile(form, user?.id)
        .then((res) => {
          toast.success(res.message);
          dispatch(getUser());
          navigate("/dashboard");
        })
        .catch((err) => {
          if (err.data) {
            setErrors(err.data);
          } else {
            toast.error(err.message);
          }
        });
    } else {
      const form = {
        name,
        birthplace,
        birthday,
        gender,
        email,
        phone,
        nik,
        address,
        province_code: provinceCode,
        city_code: cityCode,
        district_code: districtCode,
        village_code: villageCode,
        post_code: postCode,
        job,
        college,
        major,
        jersey_size: jerseySize,
      };

      updateProfile(form, user?.id)
        .then((res) => {
          toast.success(res.message);
          dispatch(getUser());
          navigate("/dashboard");
        })
        .catch((err) => {
          if (err.data) {
            setErrors(err.data);
          } else {
            toast.error(err.message);
          }
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>Profile Update</title>
      </Helmet>
      <div className="row">
        <div className="col m6 offset-m3 l4 offset-l4">
          <div className="card">
            <div className="card-content">
              <span class="card-title center">Form Biodata</span>
              <div className="row">
                <div className="input-field col s12">
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="true"
                        name="isMemberPII"
                        onChange={(e) => {
                          setIsMemberPII(e.target.value);
                          setIsDisplayForm(true);
                        }}
                      />
                      <span>Anggota PII</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="false"
                        name="isMemberPII"
                        onChange={(e) => {
                          setIsMemberPII(e.target.value);
                          setIsDisplayForm(true);
                        }}
                      />
                      <span>Calon Anggota PII</span>
                    </label>
                  </div>
                  <div className="red-text">{errors?.gender}</div>
                </div>
              </div>
              <hr />
              {isDisplayForm ? (
                <form onSubmit={store}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled
                      />
                    </div>
                    {isMemberPII === "true" ? (
                      <div className="input-field col s12">
                        <input
                          type="text"
                          value={idMemberPII}
                          onChange={(e) => setIdMemberPII(e.target.value)}
                        />
                        <label>KTA Anggota PII</label>
                      </div>
                    ) : null}
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label>Nama Lengkap</label>
                      <div className="red-text">{errors?.name}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={nik}
                        onChange={(e) => setNik(e.target.value)}
                      />
                      <label>NIK</label>
                      <div className="red-text">{errors?.nik}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={birthplace}
                        onChange={(e) => setBirthplace(e.target.value)}
                      />
                      <label>Tempat Lahir</label>
                      <div className="red-text">{errors?.birthplace}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                      />
                      <label>Tanggal Lahir</label>
                      <div className="red-text">{errors?.birthday}</div>
                    </div>
                    <div className="input-field col s12">
                      <div>Jenis Kelamin</div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="male"
                            name="gender"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                          />
                          <span>Laki - Laki</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="female"
                            name="gender"
                            onChange={(e) => {
                              setGender(e.target.value);
                            }}
                          />
                          <span>Perempuan</span>
                        </label>
                      </div>
                      <div className="red-text">{errors?.gender}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <label>Phone</label>
                      <div className="red-text">{errors?.phone}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <label>Alamat</label>
                      <div className="red-text">{errors?.address}</div>
                    </div>
                    <div class="input-field col s12">
                      <select
                        value={provinceCode}
                        onChange={(e) => {
                          setProvinceCode(e.target.value);
                          dispatch(getCities(e.target.value));
                        }}
                      >
                        <option value="" disabled selected>
                          Pilih Provinsi
                        </option>
                        {provinces?.map((value, index) => (
                          <option value={value.code}>{value.name}</option>
                        ))}
                      </select>
                      <label>Provinsi</label>
                      <div className="red-text">{errors?.province_code}</div>
                    </div>
                    <div class="input-field col s12">
                      <select
                        value={cityCode}
                        onChange={(e) => {
                          setCityCode(e.target.value);
                          dispatch(getDistricts(e.target.value));
                        }}
                      >
                        <option value="" disabled selected>
                          Pilih Kota
                        </option>
                        {cities?.map((value, index) => (
                          <option value={value.code}>{value.name}</option>
                        ))}
                      </select>
                      <label>Kota / Kecamatan</label>
                      <div className="red-text">{errors?.city_code}</div>
                    </div>
                    <div class="input-field col s12">
                      <select
                        value={districtCode}
                        onChange={(e) => {
                          setDistrictCode(e.target.value);
                          dispatch(getVillages(e.target.value));
                        }}
                      >
                        <option value="" disabled selected>
                          Pilih Kecamatan
                        </option>
                        {districts?.map((value, index) => (
                          <option value={value.code}>{value.name}</option>
                        ))}
                      </select>
                      <label>Kecamatan</label>
                      <div className="red-text">{errors?.district_code}</div>
                    </div>
                    <div class="input-field col s12">
                      <select
                        value={villageCode}
                        onChange={(e) => {
                          setVillageCode(e.target.value);
                        }}
                      >
                        <option value="" disabled selected>
                          Pilih Desa
                        </option>
                        {villages?.map((value, index) => (
                          <option value={value.code}>{value.name}</option>
                        ))}
                      </select>
                      <label>Desa</label>
                      <div className="red-text">{errors?.village_code}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={postCode}
                        onChange={(e) => setPostCode(e.target.value)}
                      />
                      <label>Kode Pos</label>
                      <div className="red-text">{errors?.post_code}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                      />
                      <label>Pekerjaan</label>
                      <div className="red-text">{errors?.job}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={college}
                        onChange={(e) => setCollege(e.target.value)}
                      />
                      <label>Asal Perguruan Tinggi</label>
                      <div className="red-text">{errors?.college}</div>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                      />
                      <label>Jurusan</label>
                      <div className="red-text">{errors?.major}</div>
                    </div>
                    <div className="input-field col s12">
                      <div>Ukuran Jersey</div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="xs"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>XS</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="s"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>S</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="m"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>M</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="l"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>L</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="xl"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>XL</span>
                        </label>
                      </div>
                      <div>
                        <label>
                          <input
                            type="radio"
                            value="xxl"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>XXL</span>
                        </label>
                      </div>
                      <div className="red-text">{errors?.jersey_size}</div>
                    </div>
                    <img
                      src="images/sizeChart.png"
                      className="responsive-img"
                    />
                    <div className="input-field col s12 center">
                      <button
                        type="submit"
                        className="waves-effect waves-light btn"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
