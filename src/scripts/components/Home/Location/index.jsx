import React from 'react'
import TitleHeader from '../../TitleHeader'
const MediaQuery = require('react-responsive')

const styles = {
    container: {
        margin: '1vw',
        textAlign: 'center',
        width: '28vw',
        height: '27vw',
        backgroundColor: '#FAF9F4',
        border: '2px solid #E4E3DE',
        color: '#130E32',
        display: 'inline-block',
        fontSize: '2vw',
        float: 'left'
    },
    image: {
        margin: '1vw',
        height: '17vw'
    },
    icon: {
        width: '3vw',
        height: '3vw',
        marginRight: '1vw'
    },
    text: {
        marginBottom: '1vw'
    }
}

export class Location extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <img style={styles.image} src='./image/map.jpg'/>
                <div style={styles.text}>
                    <img style={styles.icon} src='./icon/phone.png'/>
                    <a href="tel:031-947-9279">031-947-9279</a>
                </div>
                <div style={styles.text}>
                    <img style={styles.icon} src='./icon/cellphone.png'/>
                    <a href="tel:010-2111-3769">010-2111-3769</a>
                </div>
            </div>
        )
    }
}

const pageStyle = {
    leftSide: {
        padding: '3vw',
        width: '35vw',
        float: 'left',
        color: '#130E32'
    },
    centerText: {
        fontSize: '2.5vw'
    },
    centerTextEnglish: {
        fontSize: '1.7vw',
        marginBottom: '4vw'
    },
    sectionHeader: {
        fontSize: '1.7vw',
        lineHeight: '5vw'
    },
    rightSide: {
        width: '65vw',
        float: 'right'
    },
    image: {
        width: 'inherit'
    }
}

export default class LocationPage extends React.Component {
    render() {
        return (
            <div>
                <TitleHeader text='오시는 길'/>
                <div style={pageStyle.leftSide}>
                    <p style={pageStyle.centerText}>스타키보청기 파주점</p>
                    <p style={pageStyle.centerTextEnglish}>Starkey Paju Center</p>
                    <h style={pageStyle.sectionHeader}>주소</h>
                    <p>경기도 파주시 중앙로 189</p>
                    <p>파워프라자 202호</p>
                    <h style={pageStyle.sectionHeader}>전화번호</h>
                    <p><a href="tel:031-947-9279">031-947-9279</a></p>
                    <p><a href="tel:010-2111-3769">010-2111-3769</a></p>
                </div>
                <div style={pageStyle.rightSide}>
                    <img style={pageStyle.image} src='./image/location.jpg'/>
                </div>
            </div>
        )
    }
}

const mainStyle = {
    container: {
        color: '#3f3f3f',
        marginTop: '70px'
    },
    content: {
        display: 'inline-block',
        marginLeft: '5vw'
    },
    title: {
        fontSize: '17px',
        lineHeight: '32px',
        fontFamily: 'NanumBarunGothicUltraLight'
    },
    address: {
        fontSize: '22px',
        lineHeight: '32px',
        fontFamily: 'NanumBarunGothicBold',
        marginBottom: '15px'
    },
    icon: {
        width: '18px',
        height: '18px',
        marginRight: '20px'
    },
    phone: {
        marginTop: '20px',
        height: '54px',
        lineHeight: '54px',
        textAlign: 'center',
        border: '1px solid #3e3e3e',
        borderRadius: '100px'
    },
    imageWeb: {
        width: '530px',
        display: 'inline-block',
        float: 'right',
        marginRight: '60px'
    },
    imageMobile: {
        width: '39vw',
        display: 'inline-block',
        float: 'right'
    }
}

export var HomeLocation = (
    <div style={mainStyle.container}>
        <div style={mainStyle.content}>
            <div style={mainStyle.title}>
                스타키보청기 파주점
            </div>
            <div style={mainStyle.address}>
                경기도 파주시 중앙로 189<br/>
                파워프라자 202호
            </div>
            <a href="tel:031-947-9279">
                <div style={mainStyle.phone}>
                    <img style={mainStyle.icon} src='./image/NewMenuSection/phone.png'/>
                    031-947-9279
                </div>
            </a>
            <a href="tel:010-2111-3769">
                <div style={mainStyle.phone}>
                    <img style={mainStyle.icon} src='./image/NewMenuSection/phone.png'/>
                    010-2111-3769
                </div>
            </a>
        </div>
        <MediaQuery query='(min-device-width: 420px)'>
            <img style={mainStyle.imageWeb} src="./image/location.jpg"/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 421px)'>
            <img style={mainStyle.imageMobile} src="./image/location.jpg"/>
        </MediaQuery>
    </div>
)
