var React = require('react');
var Slider = require('react-slick');

const styles = {
    container: {
        margin: "0 auto",
        padding: 0,
        width: '80%'
    }
}

const settings = {
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    fade: false,
    draggable: false
};

const ImageSlider = (
    <div style={styles.container}>
        <Slider {...settings}>
            <div><img src='./image/StarkeyLogo.jpg'/></div>
            <div><img src='./image/parentsday.jpg'/></div>
            <div><img src='./image/OutstandingCenter.png'/></div>
            <div><img src='./image/AidIncrease.png'/></div>
        </Slider>
    </div>
)

export default ImageSlider
