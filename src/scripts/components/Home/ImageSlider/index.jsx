var React = require('react');
var Slider = require('react-slick');

const styles = {
    container: {
      margin: "0 auto",
      padding: 0,
      width: "100%",
      maxWidth: "900px",
      height: "calc(100%)",
      background: "#FAF9F4"
  }
}

const settings = {
  dots: true,
  adaptiveHeight: true,
  autoplay: true,
  arrows: false,
  fade: false,
  draggable: false
};

const ImageSlider = (
  <div style={styles.container}>
    <Slider {...settings}>
      <div><img src='./image/StarkeyLogo.png'/></div>
      <div><img src='./image/OutstandingCenter.png'/></div>
      <div><img src='./image/AidIncrease.png'/></div>
    </Slider>
  </div>
)

export default ImageSlider
