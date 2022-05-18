import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { Gap } from "../../components";
import M from "materialize-css/dist/js/materialize.min.js";

const Faq = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  });

  return (
    <>
      <Helmet>
        <title>Faq</title>
      </Helmet>
      <div className="card">
        <Gap height={20} />
        <div className="card-content">
          <div className="center" style={styles.title}>
            Pertanyaan Yang Sering Diajukan
          </div>
          <Gap height={10} />
          <div style={styles.content}>
            <ul class="collapsible">
              <li>
                <div class="collapsible-header">
                  Tanya : Apa itu Lari & Gowes Virtual Online 2022 Insinyur
                  Indonesia Berlari & Bersepeda Di seluruh Negeri?
                </div>
                <div class="collapsible-body">
                  <span>
                    Jawab : Adalah acara lomba berlari dan bersepeda secara
                    online yang dilaksanakan sebagai salah satu aktivitas dari
                    rangkaian Peringatan Hari Ulang Tahun Persatuan Insinyur
                    Indonesia (PII) ke 70 di tahun 2022. Tujuannya untuk
                    mempererat silaturahmi dan kerja sama para insinyur di
                    Indonesia dan mendorong terbentuknya anggota PII yang sehat
                    secara fisik dengan berolahraga lari dan bersepeda.
                    Diharapkan dengan adanya acara ini, PII bisa meningkatkan
                    eksistensi organisasi di mata anggota dan masyarakat umum.
                  </span>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Kapan pendaftaran Lari & Gowes Virtual Online 2022
                  Insinyur Indonesia Berlari & Bersepeda Di seluruh Negeri?
                </div>
                <div class="collapsible-body">
                  <span>Jawab : 19 April 2022 sampai dengan 29 April 2022</span>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Kapan dimulai Lari & Gowes Virtual Online 2022
                  Insinyur Indonesia Berlari & Bersepeda Di seluruh Negeri?
                </div>
                <div class="collapsible-body">
                  <span>Jawab : 14 Mei 2022 sampai 11 Juni 2022 (29 hari)</span>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Dimanakah Lari & Gowes Virtual Online 2022 Insinyur
                  Indonesia Berlari & Bersepeda Di seluruh Negeri akan diadakan?
                </div>
                <div class="collapsible-body">
                  Jawab : Diselenggarakan secara online dengan menggunakan
                  pelacak aktifitas STRAVA
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Jenis sepeda apa yang boleh digunakan?
                </div>
                <div class="collapsible-body">
                  Jawab: Semua jenis sepeda yang dikayuh KECUALI E-bike
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Bagaimana cara pendaftaran Lari & Gowes Virtual Online
                  2022 Insinyur Indonesia Berlari & Bersepeda Di seluruh Negeri
                  ?
                </div>
                <div class="collapsible-body">
                  Jawab : Pendaftaran dapat dilakukan melalui website
                  70tahunpii.portalsepeda.com. Peserta diwajibkan melengkapi
                  biodata dan memilih event yang akan diikuti. Setelah itu akan
                  ada email konfirmasi untuk melakukan pembayaran.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah email yang dipakai untuk pendaftaran bisa
                  menggunakan akun selain gmail?
                </div>
                <div class="collapsible-body">
                  Bisa, selama akun itu masih aktif bisa menerima email
                  konfirmasi pendaftaran dari panitia
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Berapa biaya pendaftaran?
                </div>
                <div class="collapsible-body">
                  Jawab : Rp.150.000 = Untuk anggota aktif Rp.150.000 Rp.250.000
                  = Sarjana Teknik/calon anggota PII Anggota PII yang belum
                  menyelesaikan biaya administrasi PII 2022
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apa saja yang didapat peserta dalam paket pendaftaran?
                </div>
                <div class="collapsible-body">
                  Jawab : Tiap peserta mendapatkan Jersey, Medali Finisher,
                  e-sertifikat
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Bagaimana cara pembayarannya?
                </div>
                <div class="collapsible-body">
                  Jawab : Pembayaran bisa dilakukan transfer bank dengan nomor
                  rekening <b>BCA : 0083764055</b> atas nama Nuansa Cerah
                  Informasi PT, setelah mendapatkan konfirmasi pembayaran
                  melalui email. Kirimkan bukti screenshoot pembayaran di web
                  registrasi pada menu payment status diverifikasi.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Saya memiliki masalah ketika melakukan pembayaran. Apa
                  solusinya?
                </div>
                <div class="collapsible-body">
                  Jawab : Mohon lakukan screenshot atau screen capture pada
                  halaman pembayaran yang bermasalah dan mengirimkannya
                  email helpdesk@portalsepeda.com atau menghubungi nomor
                  helpdesk kami di 0812-2078-3397
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah satu akun email dapat digunakan untuk melakukan
                  registrasi secara berulang kali?
                </div>
                <div class="collapsible-body">
                  Jawab : Satu akun hanya dapat didaftarkan untuk satu (1) orang
                  peserta dan satu (1) email  hanya dapat digunakan untuk
                  membuat satu akun.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Bisakah saya mengubah kategori pendaftaran yang telah
                  dipilih?
                </div>
                <div class="collapsible-body">
                  Jawab : Kategori yang telah dipilih oleh peserta tidak dapat
                  diubah setelah menyelesaikan proses pendaftaran.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Bisakah saya mengubah data pendaftaran?
                </div>
                <div class="collapsible-body">
                  Jawab : Data peserta tidak dapat diubah setelah menyelesaikan
                  proses pendaftaran.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Bisakah saya mengubah ukuran jersey yang telah
                  dipilih?
                </div>
                <div class="collapsible-body">
                  Jawab : Ukuran Jersey yang telah dipilih oleh peserta tidak
                  dapat diubah setelah menyelesaikan proses pendaftaran.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Bisakah saya mengubah nama yang telah teregistrasi?
                </div>
                <div class="collapsible-body">
                  Jawab : Peserta tidak dapat mengubah nama setelah
                  menyelesaikan proses pendaftaran.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apabila saya sudah mendaftar, apakah saya bisa
                  digantikan oleh orang lain?
                </div>
                <div class="collapsible-body">
                  Jawab : Peserta tidak diperkenankan untuk digantikan oleh
                  orang lain.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apabila saya melakukan pembatalan pendaftaran, bisakah
                  saya mendapatkan pengembalian?
                </div>
                <div class="collapsible-body">
                  Jawab : Biaya pendaftaran atau pembelian merchandise yang
                  telah dibayarkan oleh peserta tidak dapat dikembalikan.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Saya tidak mendapatkan email konfirmasi. Apa
                  solusinya?
                </div>
                <div class="collapsible-body">
                  Jawab : Peserta dapat mengirimkan email
                  kepada helpdesk@portalsepeda.com untuk meminta
                  pengiriman email  konfirmasi ulang.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah saya dapat melakukan pendaftaran secara
                  offline?
                </div>
                <div class="collapsible-body">
                  Jawab : Tidak, pendaftaran hanya dapat dilakukan secara online
                  melalui website resmi{" "}
                  <a href="https://70tahunpii.portalsepeda.com">
                    https://70tahunpii.portalsepeda.com
                  </a>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Untuk pembayaran melalui transfer bank, kapan batas
                  maksimum saya melakukan pembayaran?
                </div>
                <div class="collapsible-body">
                  Jawab : Peserta yang memilih metode pembayaran melalui
                  transfer bank wajib melakukan pembayaran dalam waktu 1 x 24
                  jam setelah mendapatkan instruksi pembayaran.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah ada syarat khusus dalam mengikuti acara Lari &
                  Gowes Online 2022 Insinyur Indonesia Berlari & Bersepeda Di
                  seluruh Negeri?
                </div>
                <div class="collapsible-body">
                  Jawab :{" "}
                  <ol type="a">
                    <li>Tidak ada batas usia untuk mengikuti acara ini.</li>
                    <li>Mematuhi seluruh peraturan dan regulasi acara.</li>
                    <li>
                      Mematuhi protokol kesehatan, menjaga jarak, menggunakan
                      masker/buff, sering mencuci tangan dan tidak berhenti
                      ditempat keramaian.
                    </li>
                    <li>
                      Kondisi sehat jasmani dan rohani untuk melakukan
                      aktivitasa lari dan bersepeda di jalan umum.
                    </li>
                    <li>Menyelesaikan jarak selama periode acara</li>
                  </ol>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah saya akan tetap mendapatkan medali finisher
                  jika tidak menyelesaikan lomba?
                </div>
                <div class="collapsible-body">
                  Jawab : Apabila peserta tidak menyelesaikan lari/gowes sejauh
                  70 KM , peserta hanya mendapat jersey dan e-sertifikat saja,
                  tidak mendapatkan medali Finisher.  Pengiriman jersey dan
                  merchandise acara dimulai dari 23 Mei 2022 s/d 28 Mei 2022,
                  biaya pengiriman ditanggung panitia.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah yang harus dipersiapkan dalam acara?
                </div>
                <div class="collapsible-body">
                  Jawab : Pelacak aktivitas yang dipakai adalah Strava. Peserta
                  harus menghubungkan pelacak aktivitas tersebut dengan website
                  <a href="https://70tahunpii.portalsepeda.com">
                    https://70tahunpii.portalsepeda.com
                  </a>
                  . Dan pelacak aktivitas harus dapat dilihat oleh publik.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah pengumpulan jarak untuk event dilakukan dengan
                  mengkoneksikan pelacak aktifitas?
                </div>
                <div class="collapsible-body">
                  Ya. Setiap aktivitas yang dilakukan akan masuk secara otomatis
                  selama periode acara dengan kondisi pelacak aktivitas masih
                  terhubung dengan 70tahunpii.portalsepeda.com.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Bagaimana cara menyambungkan pelacak aktifitas dengan
                  web?
                </div>
                <div class="collapsible-body">
                  Jawab : Berikut langkah-langkahnya:
                  <ul>
                    <li>
                      Silakan login ke akun milik anda melalui website 
                      <a href="https://70tahunpii.portalsepeda.com">
                        https://70tahunpii.portalsepeda.com
                      </a>
                    </li>
                    <li>Klik icon profil Anda di pojok kiri atas.</li>
                    <li>Pilih menu “Strava & Leaderboard”.</li>
                    <li>Pilih salah pelacak aktivitas STRAVA.</li>
                    <li>
                      Ikuti langkah selanjutnya yang tertera halaman tersebut. 
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Bagaimana jika terjadi kendala sehingga aktifitas
                  tidak masuk secara otomatis?
                </div>
                <div class="collapsible-body">
                  Jawab : Berikut langkah-langkahnya
                  <ul>
                    <li>
                      Silakan login ke akun milik anda di website{" "}
                      <a href="https://70tahunpii.portalsepeda.com">
                        https://70tahunpii.portalsepeda.com
                      </a>
                    </li>
                    <li>
                      Klik icon garis 3 di pojok kiri atas untuk pengguna
                      telepon genggam.
                    </li>
                    <li>Pilih menu “Strava & Leaderboard”.</li>
                    <li>Kemudian klik "List Peserta Lari/Gowes"</li>
                    <li>
                      Pastikan koneksi website dengan Strava terhubung dengan
                      akun yang benar, bisa dilihat dari nama strava, foto
                      profil dan kode athlete nya.
                    </li>
                    <li>
                      Penarikan data strava dilakukan secara otomatis oleh
                      sistem, jadi tidak ada proses upload data strava oleh
                      peserta selama race.
                    </li>
                    <li>
                      Jika ada kesulitan mengenai koneksi strava, konsultasikan
                      dengan tim helpdesk.
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah saya bisa mengumpulkan jarak lebih dari 70km
                  untuk lari atau bersepeda?
                </div>
                <div class="collapsible-body">
                  Jawab : Bisa, jarak 70km adalah jarak minimum race untuk
                  mendapatkan Medali Finisher dan e-Sertifikat. Jika akumulasi
                  total jarak tempuh bisa mencapai 170km (untuk lari) atau 700km
                  (untuk gowes), peserta akan mendapatkan free Exclusive T-shirt
                  Finisher Lari 170km/Gowes 700km. Untuk hadiah total jarak
                  tempuh terjauh bisa dilihat lebih lengkap di website
                  <a href="https://70tahunpii.portalsepeda.com/hadiah">
                    https://70tahunpii.portalsepeda.com/hadiah
                  </a>
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Apakah saya dapat melakukan aktifitas di dalam
                  ruangan?
                </div>
                <div class="collapsible-body">
                  Jawab : Tidak, aktivitas lari dan gowes adalah outdoor dengan
                  rute terekam, penggunaan bike trainer/treadmill+aplikasi tidak
                  diperhitungkan.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Dimana saya mendapatkan nomor E-bib? Apakah e-bib
                  wajib dipakai saat beraktifitas?
                </div>
                <div class="collapsible-body">
                  Jawab : Nomor bib dikirimkan bersama email konfirmasi
                  pembayaran atau dapat diunduh melalui akun Anda di website
                  https://70tahunpii.portalsepeda.com.
                  <ul>
                    <li>
                      Silakan login ke website 70tahunPII.portalsepeda.com
                    </li>
                    <li>Klik menu Strava & Leaderboard.</li>
                    <li>
                      Klik tombol “Unduh Bib”, dan ikuti langkah selanjutnya
                      yang tertera pada halaman tersebut.
                    </li>
                  </ul>
                  Nomor bib boleh dipakai saat beraktivitas, namun bukan
                  merupakan suatu keharusan.
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Siapakah Penyelenggara dan pelaksana teknis?
                </div>
                <div class="collapsible-body">
                  Jawab : Diselenggarakan oleh Persatuan Insinyur Indonesia
                  didukung oleh Portal Sepeda sebagai pelaksana teknis
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Dimana saya dapat membeli merchandise?
                </div>
                <div class="collapsible-body">
                  Jawab: Di onlineshop Tokopedia/Portasepeda
                </div>
              </li>
              <li>
                <div class="collapsible-header">
                  Tanya : Siapa yang dapat dihubungi untuk informasi lomba lebih
                  lanjut?
                </div>
                <div class="collapsible-body">
                  Jawab : Email : helpdesk@portalsepeda.com Whatsapp :
                  089690596772 atau 0812-2078-3397 (Senin - Jumat, 09:00-17:00
                  WIB, kecuali hari libur)
                </div>
              </li>
            </ul>
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

export default Faq;
