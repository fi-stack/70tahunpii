import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderItem = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="images/ePoster.jpeg" className="responsive-img" />
      </div>
      <div>
        <h3>Slider 2</h3>
      </div>
    </Slider>
  );
};

export default SliderItem;
