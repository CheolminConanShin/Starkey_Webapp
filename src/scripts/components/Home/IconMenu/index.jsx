import React from 'react'
import {Icon, CameraIcon} from './Icon'

const styles = {
    container: {
        lineHeight: '5vw',
        textAlign: 'center',
        backgroundColor: '#130E32'
    },
    quickMenu: {
        color: '#E7E7E7',
        fontSize: '2.5vw',
        display: 'inline-block',
        marginRight: '1vw'
    },
    companyName: {
        color: '#317fb7',
        fontSize: '2vw',
        display: 'inline-block',
        marginLeft: '1vw'
    },
    icons: {
        textAlign: 'center',
        lineHeight: '7vw',
        backgroundColor: '#282344'
    }
}

export default class IconMenu extends React.Component {
    constructor(props) {
        super(props)
        this.showGallery = this.props.showGallery
    }

    render() {
        const eventIcon = Icon({imageUrl: './icon/event.png', text: '공지사항', url: '/#/event'})
        const introIcon = Icon({imageUrl: './icon/center.png', text: '센터소개', url: '/#/about'})
        const centerIcon = CameraIcon({imageUrl: './icon/camera.png', text: '센터미리보기', clickEvent: this.showGallery})
        const hearingAidIcon = Icon({imageUrl: './icon/hearingaid.png', text: '제품소개', url: '/#/product'})
        const blogIcon = Icon({imageUrl: './icon/blog.png', text: '블로그', url: 'http://blog.naver.com/starkeypaju'})
        const mapIcon = Icon({imageUrl: './icon/map.png', text: '연락처/위치', url: '/#/location'})
        const storyIcon = Icon({imageUrl: './icon/story.png', text: '질문하기', url: '/#/board'})
        return (
            <div>
                <div style={styles.container}>
                    <div style={styles.quickMenu}>QUICK MENU</div>
                    <div style={styles.companyName}>스타키보청기 파주센터</div>
                </div>
                <div style={styles.icons}>
                    {eventIcon}
                    {introIcon}
                    {centerIcon}
                    {hearingAidIcon}
                    {blogIcon}
                    {mapIcon}
                    {storyIcon}
                </div>
            </div>
        )
    }
}
