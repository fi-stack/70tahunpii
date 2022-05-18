import Helmet from "react-helmet";
import { Gap } from "../../components";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <div className="card">
        <Gap height={20} />
        <div className="card-content">
          <div className="center" style={styles.title}>
            Gallery
          </div>
          <Gap height={10} />
          <div className="center" style={styles.subTitle}>
            Untuk berbelanja mechandise di Tokopedia, bisa langsung klik di
            gambar merchandise yang diinginkan
          </div>
          <Gap height={10} />
          <hr />
          <h5>Merchandise</h5>
          <div className="row" style={styles.content}>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/etalase/merchandise-lari-gowes-online-hut-70-tahun-pii">
                    <img
                      src="images/gallery/jerseyHadiah.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/jersey-lari-finisher-hut-70-tahun-pii-xxs">
                    <img
                      src="images/gallery/merchandiseFinisherJersey.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/jersey-gowes-finisher-hut-70-tahun-pii-l">
                    <img
                      src="images/gallery/finisherGowes.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/jersey-mtb-hut-70-tahun-pii-xxs">
                    <img
                      src="images/gallery/jerseySepedaMTB.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/jersey-roadbike-hut-70-tahun-pii-l">
                    <img
                      src="images/gallery/jerseySepedaRB.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/poloshirt-hut-70-tahun-pii-l">
                    <img
                      src="images/gallery/poloshirt.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/topi-sepeda-hut-70-tahun-pii">
                    <img
                      src="images/gallery/topiSepeda.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/buff-versi-gelap-hut-70-tahun-pii">
                    <img
                      src="images/gallery/buffHitam.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/buff-versi-terang-hut-70-tahun-pii">
                    <img
                      src="images/gallery/buffTerang.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h5>Racepack</h5>
          <div className="row" style={styles.content}>
            <div className="col s12 m6 l4">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="https://www.tokopedia.com/portalsepeda/etalase/merchandise-lari-gowes-online-hut-70-tahun-pii">
                    <img
                      src="images/gallery/racepack.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h5>E-Poster</h5>
          <div className="row" style={styles.content}>
            <div className="col s12 m6">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="#">
                    <img
                      src="images/gallery/ePoster.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card orange lighten-5 center">
                <div className="card-content">
                  <a href="#">
                    <img
                      src="images/gallery/ePosterLite.png"
                      className="responsive-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h5>Spanduk</h5>
          <div className="red-text">
            *Klik Gambar untuk mengunduh/download Spanduk
          </div>
          <div className="row" style={styles.content}>
            <div className="col s12 l6">
              <a href="https://drive.google.com/drive/folders/1tyeb4fOaSOimrBhxnme4xiNwtSBWRMdc?usp=sharing">
                <div className="card orange lighten-5 center">
                  <div className="card-content">
                    <img
                      src="images/gallery/spandukStart.png"
                      className="responsive-img"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col s12 l6">
              <a href="https://drive.google.com/drive/folders/1tyeb4fOaSOimrBhxnme4xiNwtSBWRMdc?usp=sharing">
                <div className="card orange lighten-5 center">
                  <div className="card-content">
                    <img
                      src="images/gallery/spandukFinish.png"
                      className="responsive-img"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <hr />
          <h5>Video Technical Meeting</h5>
          <div className="row" style={styles.content}>
            <div className="card">
              <div className="row">
                <div className="center">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ntQcIEFBAqI"
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
  subTitle: {
    fontSize: 16,
    color: "#616161",
  },
  content: {
    fontSize: 16,
    color: "#616161",
  },
};

export default Gallery;
