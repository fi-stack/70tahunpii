import Helmet from "react-helmet";

const Hadiah = () => {
  return (
    <>
      <Helmet>
        <title>Hadiah</title>
      </Helmet>
      <div className="row center-align">
        <img src="images/kategoriPemenang.png" className="responsive-img" />
      </div>
      <div className="row center-align">
        <img src="images/doorprize.png" className="responsive-img" />
      </div>
    </>
  );
};

export default Hadiah;
