import { Gap } from "../../components";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="row center-align">
        <img src="images/ePoster.png" className="responsive-img" />
      </div>
      <Gap height={15} />
      <div className="card orange lighten-5">
        <Gap height={15} />
        <div className="card-content">
          <div className="center" style={styles.title}>
            Latar Belakang Dan Tujuan
          </div>
          <Gap height={15} />
          <div style={styles.latarBelakangDanTujuan}>
            <ol>
              <li>
                Event Virtual Run & Ride ini dilaksanakan sebagai salah satu
                aktivitas dari rangkaian Peringatan Hari Ulang Tahun Persatuan
                Insinyur Indonesia (PII) ke 70 di tahun 2022.
              </li>
              <li>
                Event Virtual Run & Ride ini bertujuan untuk mempererat
                silaturahmi dan kerja sama para insinyur di Indonesia.
              </li>
              <li>
                Mendorong terbentuknya anggota PII yang sehat secara fisik
                dengan berolahraga lari dan bersepeda.
              </li>
              <li>
                Diharapkan dengan Event Virtual Run & Ride ini, PII bisa
                meningkatkan eksistensi organisasi di mata anggota dan
                masyarakat umum.
              </li>
            </ol>
          </div>
          <Gap height={15} />
        </div>
        <Gap height={15} />
      </div>
      <Gap height={15} />
      <div className="row">
        <Gap height={15} />
        <div className="center" style={styles.title}>
          Info Event
        </div>
        <Gap height={35} />
        <div className="col s6 center">
          <img
            src="images/rewards.png"
            className="responsive-img"
            style={styles.imgRewardRules}
          />
          <div style={styles.rewardRules}>Hadiah</div>
        </div>
        <div className="col s6 center">
          <img
            src="images/rules.png"
            className="responsive-img"
            style={styles.imgRewardRules}
          />
          <div style={styles.rewardRules}>Aturan</div>
        </div>
        <Gap height={15} />
      </div>
      <Gap height={15} />
      <div className="card orange lighten-5">
        <Gap height={15} />
        <div className="card-content">
          <Gap height={15} />
          <div className="center" style={styles.title}>
            Jadwal Kegiatan
          </div>
          <Gap height={35} />
          <img src="images/jadwalKegiatan.png" className="responsive-img" />
        </div>
      </div>
      <Gap height={15} />
      <div className="row center-align">
        <Gap height={15} />
        <div className="center" style={styles.title}>
          Diselenggarakan Oleh
        </div>
        <Gap height={35} />
        <img
          src="images/logoPII.png"
          className="responsive-img"
          style={styles.imgLogoPII}
        />
        <Gap height={15} />
      </div>
    </>
  );
};

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: "#616161",
  },
  latarBelakangDanTujuan: {
    fontSize: 16,
    color: "#616161",
  },
  imgRewardRules: {
    maxWidth: "50%",
  },
  rewardRules: {
    fontSize: 18,
    fontWeight: 600,
    color: "#616161",
  },
  imgLogoPII: {
    maxWidth: "25%",
  },
};

export default Home;
