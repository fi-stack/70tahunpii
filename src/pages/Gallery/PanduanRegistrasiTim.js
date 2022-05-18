import React from "react";
import Helmet from "react-helmet";
import { Gap } from "../../components";

const PanduanRegistrasiTim = () => {
  return (
    <>
      <Helmet>
        <title>Panduan Registrasi Tim</title>
      </Helmet>
      <div className="row">
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card">
            <Gap height={20} />
            <div className="card-content">
              <div className="center" style={styles.title}>
                Panduan Registrasi Tim Lari & Gowes Online 70 tahun PII
              </div>
              <Gap height={10} />
              <div style={styles.content}>
                Halaman ini adalah fasilitas untuk mendaftarkan sebuah tim yang
                terdiri dari 5 orang.
                <ol>
                  <li>Masuk/Sign In Pada Web</li>
                  <li>Masuk ke halaman Dashboard</li>
                  <li>Klik tombol Registrasi Tim</li>
                  <li>
                    Isi Form Registrasi Tim dengan Lengkap. Terdiri dari Nama
                    Tim, Tipe (Lari / Gowes) dan Avatar Tim. Pembuat tim
                    otomatis akan menjadi Kapten Tim (Leader)
                  </li>
                  <li>
                    Jika sudah terdaftar, (Leader) melakukan penambahan anggota
                    tim dengan memasukan nomor E-Bib peserta.
                  </li>
                  <li>Selesai</li>
                </ol>
              </div>
              <div className="row">
                <div className="center">
                  <iframe
                    width="375"
                    height="667"
                    src="https://www.youtube.com/embed/vMhcASQk_zA"
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

export default PanduanRegistrasiTim;
