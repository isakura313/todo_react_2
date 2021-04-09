import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const imgs = [
  "https://i.pinimg.com/originals/8b/e9/e1/8be9e1c438dff0c78ac2f264817a7bc6.jpg",
  "https://www.vinterier.ru/pictures/shop/malenkiiy-peiyzag-kartina-maslom-40x30.JPG",
];

const imgItems = imgs.map((img_src) => (
  <div>
    <img src={img_src} alt=''/>
  </div>
));

export default function Sli() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {imgItems}
    </Slider>
  );
}
