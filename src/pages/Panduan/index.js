import { Gap } from "../../components";

const { default: Helmet } = require("react-helmet");

const Panduan = () => {
  return (
    <>
      <Helmet>
        <title>Panduan</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card">
            <Gap height={20} />
            <div className="card-content">
              <div className="center" style={styles.title}>
                Tahapan Registrasi Lari & Gowes Online 70 tahun PII
              </div>
              <Gap height={10} />
              <div style={styles.content}>
                <ol>
                  <li>
                    Dari Menu Akun/Registrasi, pilih masuk. Untuk mendaftarkan
                    login baru.
                  </li>
                  <li>
                    Isi alamat email untuk login dan password untuk web event.
                  </li>
                  <li>Sign In.</li>
                  <li>
                    Lengkapi data peserta sesuai jenis peserta (Anggota PII atau
                    bukan).
                  </li>
                  <li>Pilih jenis lomba yang diminati.</li>
                  <li>Kirim data registrasi.</li>
                  <li>Terima email konfirmasi registasi.</li>
                  <li>
                    Cek email untuk mengetahui besar tagihan dan tujuan
                    transfer.
                  </li>
                  <li>
                    Setelah transfer (lengkap dengan 4 digit kode unik), kembali
                    ke web event.
                  </li>
                  <li>Upload bukti transfer.</li>
                  <li>Terima email konfirmasi transfer dan info no e-BIB.</li>
                </ol>
              </div>
              <div className="row">
                <div className="center">
                  <iframe
                    width="375"
                    height="667"
                    src="https://www.youtube.com/embed/wp7PB_MMpXA"
                    title="Panduan_Registrasi_Lari_&_Gowes_Online_2022"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  content: {
    fontSize: 16,
    color: "#616161",
  },
};

export default Panduan;
