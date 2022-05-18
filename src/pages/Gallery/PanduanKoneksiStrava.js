import React from "react";
import Helmet from "react-helmet";
import { Gap } from "../../components";

const PanduanKoneksiStrava = () => {
  return (
    <>
      <Helmet>
        <title>Panduan Koneksi Strava</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card">
            <Gap height={20} />
            <div className="card-content">
              <div className="center" style={styles.title}>
                Panduan Koneksi Strava Lari & Gowes Online 70 tahun PII
              </div>
              <Gap height={10} />
              <div style={styles.content}>
                Bagi peserta yang sudah mendapatkan E-Bib dapat menghubungkan
                akun peserta event dengan akun strava-nya. Caranya :
                <ol>
                  <li>Masuk/Sign In Pada Web</li>
                  <li>Masuk ke halaman Dashboard</li>
                  <li>
                    Klik tombol Hubungkan Strava, akan diarahkan ke halaman
                    strava.com
                  </li>
                  <li>
                    Jika diminta login pada Strava, lakukan login sesuai akun
                    strava yang akan digunakan pada event 70 Tahu PII.
                  </li>
                  <li>
                    Akan ada permintaan authorize dari Strava, maka Klik
                    Authorize.
                  </li>
                  <li>
                    Konfirmasi Koneksi Strava Berhasil akan tampil, lalu klik
                    kembali ke dashboard.
                  </li>
                  <li>
                    Tanda peserta telah terhubung dengan akun strava adalah pada
                    tombol akan bertuliskan "STRAVA TERHUBUNG (nama peserta)
                  </li>
                  <li>Selesai</li>
                </ol>
              </div>
              <div className="row">
                <div className="center">
                  <iframe
                    width="375"
                    height="667"
                    src="https://www.youtube.com/embed/GXaPGeHytdQ"
                    title="YouTube video player"
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

export default PanduanKoneksiStrava;
