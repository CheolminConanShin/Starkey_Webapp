import React from 'react'
import Section from './Section'
// import {HomeAbout} from './About'
import IconMenu from './IconMenu'
import {Location} from './Location'
import {PreviewPhoto} from './CenterPhoto'
import Gallery from './CenterPhoto/Gallery.jsx'
import ImageSlider from './ImageSlider'

import MenuSection from './MenuSection'
import {ProductMain} from '../Product'

const styles = {
    imageSlider: {
        height: '55vw'
    },
    product: {
        height: '40vw',
        backgroundColor: '#f8f8f8'
    }
}

const DEFAULT_IMAGES = [
    {id: './image/centerPhoto/certification.jpg', caption: '인증받은 전문 청능사', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
    {id: './image/centerPhoto/cozy.jpg', caption: '쾌적한 대기실', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
    {id: './image/centerPhoto/conference.jpg', caption: '전문 상담실', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
    {id: './image/centerPhoto/examine.jpg', caption: '고급장비를 갖춘 검사실', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
    {id: './image/centerPhoto/repair.jpg', caption: '전문 수리도구', orientation: 'landscape', useForDemo: true}, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];

export class Home2 extends React.Component {
    constructor(props) {
        super(props)
        this.showGallery = this.showGallery.bind(this)
    }

    showGallery() {
        this.refs.gallery.openLightbox()
    }

    render() {
        return (
            <div>
                <Section additionalStyle={styles.imageSlider} title="Section1" content={ImageSlider}/>
                <IconMenu showGallery={this.showGallery}/>
                <div>
                    <Location/>
                    <PreviewPhoto onClick={this.showGallery}/>
                </div>
                <div>
                    <Gallery ref="gallery" images={DEFAULT_IMAGES.map(({caption, id, orientation, useForDemo}) => ({
                        src: id,
                        caption,
                        orientation,
                        useForDemo,
                    }))}/>
                </div>
                {/*<Section additionalStyle={{height: "25vw"}} title="Section2" content={HomeAbout}/>*/}
            </div>
        )
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MenuSection/>
                <Section additionalStyle={styles.imageSlider} title="공지사항 / 이벤트" content={ImageSlider}/>
                <Section additionalStyle={styles.product} title="제품소개" content={ProductMain}/>
            </div>
        )
    }
}
