import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getCities,
  getCitiesBySearch,
  getDistricts,
  getProvinces,
  getUser,
  getVillages,
  updateProfile,
} from "../../redux/action";

const Update = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, {});
  });

  useEffect(() => {
    dispatch(getProvinces());
  }, [dispatch]);

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const { provinces } = useSelector((state) => state.provinces);
  const { cities } = useSelector((state) => state.cities);
  const { districts } = useSelector((state) => state.districts);
  const { villages } = useSelector((state) => state.villages);
  const { cities_by_search } = useSelector((state) => state.citiesBySearch);

  const [email = user?.email, setEmail] = useState();
  const [ktaCategory = user?.kta_category, setKtaCategory] = useState();
  const [ktaIdA, setKtaIdA] = useState();
  const [ktaIdB, setKtaIdB] = useState();
  const [ktaIdC, setKtaIdC] = useState();
  const [nik = user?.nik, setNik] = useState();
  const [name = user?.name, setName] = useState();
  const [birthday = user?.birthday, setBirthday] = useState();
  const [gender = user?.gender, setGender] = useState();
  const [phone = user?.phone, setPhone] = useState();
  const [address = user?.address, setAddress] = useState();
  const [provinceCode = user?.province_code, setProvinceCode] = useState();
  const [cityCode = user?.city_code, setCityCode] = useState();
  const [districtCode = user?.district_code, setDistrictCode] = useState();
  const [villageCode = user?.village_code, setVillageCode] = useState();
  const [postCode = user?.post_code, setPostCode] = useState();
  const [job = user?.job, setJob] = useState();
  const [college = user?.college, setCollege] = useState();
  const [collegeLocation = user?.college_location, setCollegeLocation] =
    useState();
  const [major = user?.major, setMajor] = useState();
  const [graduateAt = user?.graduate_at, setGraduateAt] = useState();
  const [jerseySize = user?.jersey_size, setJerseySize] = useState();
  const [errors, setErrors] = useState([]);

  const [isDisplayKtaForm, setIsDisplayKtaForm] = useState(false);

  const store = (e) => {
    e.preventDefault();

    if (!isDisplayKtaForm) {
      const form = {
        kta_category: ktaCategory,
        nik,
        name,
        gender,
        birthday,
        phone,
        address,
        province_code: provinceCode,
        city_code: cityCode,
        district_code: districtCode,
        village_code: villageCode,
        post_code: postCode,
        job,
        college,
        college_location: collegeLocation,
        major,
        graduate_at: graduateAt,
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
        kta_category: ktaCategory,
        kta_id: `${ktaIdA}.${ktaIdB}.${ktaIdC}`,
        nik,
        name,
        gender,
        birthday,
        phone,
        address,
        province_code: provinceCode,
        city_code: cityCode,
        district_code: districtCode,
        village_code: villageCode,
        post_code: postCode,
        job,
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
        <div className="col m6 offset-m3 l6 offset-l3">
          <div className="card">
            <div className="card-content">
              <span class="card-title center">Form Biodata</span>
              <div className="row">
                <div className="input-field col s12">
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="a"
                        name="kta-category"
                        onChange={(e) => {
                          setKtaCategory(e.target.value);
                          setIsDisplayKtaForm(true);
                        }}
                      />
                      <span>Anggota PII sudah lunas iuran 2022</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="b"
                        name="kta-category"
                        onChange={(e) => {
                          setKtaCategory(e.target.value);
                          setIsDisplayKtaForm(true);
                        }}
                      />
                      <span>Anggota PII belum lunas iuran 2022</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="c"
                        name="kta-category"
                        onChange={(e) => {
                          setKtaCategory(e.target.value);
                          setIsDisplayKtaForm(false);
                        }}
                      />
                      <span>Sarjana Teknik/Setara</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="d"
                        name="kta-category"
                        onChange={(e) => {
                          setKtaCategory(e.target.value);
                          setIsDisplayKtaForm(false);
                        }}
                      />
                      <span>Umum (Kuota Terbatas)</span>
                    </label>
                  </div>
                  <div className="red-text">{errors?.kta_category}</div>
                </div>
              </div>
              <hr />
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
                  {isDisplayKtaForm ? (
                    <div className="input-field col s12">
                      <div>No KTA PII</div>
                      <div className="row">
                        <div className="col s2">
                          <input
                            type="text"
                            value={ktaIdA}
                            onChange={(e) => setKtaIdA(e.target.value)}
                          />
                        </div>
                        <div className="col s2">
                          <input
                            type="text"
                            value={ktaIdB}
                            onChange={(e) => setKtaIdB(e.target.value)}
                          />
                        </div>
                        <div className="col s4">
                          <input
                            type="text"
                            value={ktaIdC}
                            onChange={(e) => setKtaIdC(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="red-text">{errors?.kta_id}</div>
                    </div>
                  ) : null}
                  <div className="input-field col s12">
                    <input
                      type="text"
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                    />
                    <label>NIK</label>
                    <div className="red-text">{errors?.nik}</div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>
                      Note : Informasi "NIK" dan "Tanggal Lahir" dibutuhkan
                      untuk validasi pengelompokan usia peserta. Data kami jaga
                      kerahasiaannya.
                    </div>
                  </div>
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
                    <div>Jenis Kelamin</div>
                    <div className="row">
                      <div className="col">
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
                      <div className="col">
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
                    </div>
                    <div className="red-text">{errors?.gender}</div>
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="date"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                    <label>Tanggal Lahir</label>
                    <div className="red-text">{errors?.birthday}</div>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>
                      Note : Informasi "NIK" dan "Tanggal Lahir" dibutuhkan
                      untuk validasi pengelompokan usia peserta. Data kami jaga
                      kerahasiaannya.
                    </div>
                  </div>
                  <div className="input-field col s12">
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label>Telp / Whatsapp</label>
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
                    <div style={{ fontSize: 12, fontWeight: 600 }}>
                      Note: Alamat diisi dengan sebenar-benarnya untuk
                      menghindari kesalahan pengiriman racepack dan medali
                      FINISHER
                    </div>
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
                  {isDisplayKtaForm ? null : (
                    <>
                      <div className="input-field col s12">
                        <input
                          type="text"
                          value={college}
                          onChange={(e) => setCollege(e.target.value)}
                        />
                        <label>Asal Perguruan Tinggi / Universitas</label>
                        <div className="red-text">{errors?.college}</div>
                      </div>
                      <div class="input-field col s12">
                        <div>Lokasi Perguruan Tinggi / Universitas</div>
                        <div className="row">
                          <div className="col s4">
                            <input
                              type="text"
                              placeholder="Cari lokasi ..."
                              onChange={(e) => {
                                dispatch(getCitiesBySearch(e.target.value));
                              }}
                            />
                          </div>
                          <div className="col s8">
                            <select
                              value={collegeLocation}
                              onChange={(e) => {
                                setCollegeLocation(e.target.value);
                              }}
                            >
                              <option value="" disabled selected>
                                Pilih Lokasi
                              </option>
                              {cities_by_search?.map((value, index) => (
                                <option value={value.code}>{value.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="red-text">
                          {errors?.college_location}
                        </div>
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
                        <div>Tahun Lulus</div>
                        <input
                          type="number"
                          min="1945"
                          max="2022"
                          step="1"
                          value={graduateAt}
                          onChange={(e) => setGraduateAt(e.target.value)}
                        />
                        <div className="red-text">{errors?.graduate_at}</div>
                      </div>
                    </>
                  )}
                  <div className="input-field col s12">
                    <div>Ukuran Jersey</div>
                    <div className="row">
                      <div className="col">
                        <label>
                          <input
                            type="radio"
                            value="xxs"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>XXS</span>
                        </label>
                      </div>
                      <div className="col">
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
                      <div className="col">
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
                      <div className="col">
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
                      <div className="col">
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
                      <div className="col">
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
                      <div className="col">
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
                      <div className="col">
                        <label>
                          <input
                            type="radio"
                            value="3xl"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>3XL</span>
                        </label>
                      </div>
                      <div className="col">
                        <label>
                          <input
                            type="radio"
                            value="4xl"
                            name="jerseySize"
                            onChange={(e) => {
                              setJerseySize(e.target.value);
                            }}
                          />
                          <span>4XL</span>
                        </label>
                      </div>
                    </div>
                    <div className="red-text">{errors?.jersey_size}</div>
                  </div>
                  <img
                    src="images/sizeChart.png"
                    className="responsive-img"
                    alt="sizeChart"
                  />
                  <div className="input-field col s12 center">
                    <button
                      type="submit"
                      className="waves-effect waves-light btn"
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
