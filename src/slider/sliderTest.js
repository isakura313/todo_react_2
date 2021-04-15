import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const imgs = [
  "https://cdn.getyourguide.com/img/country/58de1486a0b8d.jpeg/88.jpg",
  "https://i.pinimg.com/originals/63/84/c9/6384c9307df4c18576e564ab90d8e1f6.png",
];
const cssStyles ={
  width: "900px",
  margin: "0 auto"
}

const imgItems = imgs.map((img_src) => (
  <div>
    <img  style ={cssStyles} src={img_src} alt=''/>
  </div>
));

export default function Sli() {
  var settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <Slider {...settings}>
      {imgItems}
    </Slider>
  );
}
