var React = require('react');
var Slider = require('react-slick');

const styles = {
    container: {
      margin: "0 auto",
      padding: 20,
      width: "70%",
      height: "calc(100% - 40px)",
      color: "#333",
      background: "#FFE8DD"
  }
}

const settings = {
  dots: true,
  adaptiveHeight: true,
  autoplay: true
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
