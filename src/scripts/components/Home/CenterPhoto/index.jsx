import React from 'react'
import Photo from './Photo.jsx'
import Gallery from './Gallery.jsx'
import Lightbox from 'react-images'

const styles = {
  container: {
    margin: '10px',
    textAlign: 'center',

    backgroundColor: '#FAF9F4',
    border: '2px solid #E4E3DE',
    display: 'inline-grid',
    float: 'left'
  },
  text: {
    fontSize: '2vw',
    color: '#130E32',
    margin: '1vw'
  }
}

export class PreviewPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.showGallery = this.props.onClick
  }
  render() {
    const prephoto = Photo({imageUrl: './image/preview.png'})
    return (
      <div style={styles.container}>
        <div style={styles.text}>
          센터 미리보기
        </div>
        <a onClick={this.showGallery}>
          {prephoto}
        </a>
      </div>
    )
  }
}

const DEFAULT_IMAGES = [
	{ id: './image/centerPhoto/certification.jpg', caption: '인증받은 전문 청능사', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
	{ id: './image/centerPhoto/cozy.jpg', caption: '쾌적한 대기실', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
	{ id: './image/centerPhoto/conference.jpg', caption: '전문 상담실', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
	{ id: './image/centerPhoto/examine.jpg', caption: '고급장비를 갖춘 검사실', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
	{ id: './image/centerPhoto/repair.jpg', caption: '전문 수리도구', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

export default class CenterPhoto extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
    		<Gallery images={DEFAULT_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
    			src: id,
    			caption,
    			orientation,
    			useForDemo,
    		}))} />
      </div>
    )
  }
}
