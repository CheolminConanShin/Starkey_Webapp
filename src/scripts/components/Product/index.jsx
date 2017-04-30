import React from 'react'
import TitleHeader from '../TitleHeader'
const MediaQuery = require('react-responsive')
const styles = {
    container: {
        width: '96%',
        height: '78vh',
        overflow: 'hidden',
        position: 'relative',
        marginLeft: '2%'
    },
    iframeWeb: {
        position: 'absolute',
        top: '-300px',
        left: '-8vw',
        width: '114.5vw',
        height: '120vh'
    },
    iframeMobile: {
        position: 'absolute',
        top: '-300px',
        left: '-8vw',
        width: '114.5vw',
        height: '100vh'
    }
}

// const url = 'http://www.starkey.co.kr/product/product/bojung_custom.php'
const url = 'https://unblockallwebsite.com/open.php?u=http%3A%2F%2Fwww.starkey.co.kr%2Fproduct%2Fproduct%2Fbojung_custom.php&b=224&f=norefer'

export default class ProductPage extends React.Component {
    render() {
        return (
            <div>
                <TitleHeader text='제품 소개'/>
                <div style={styles.container}>
                    <MediaQuery query='(min-device-width: 1224px)'>
                        <iframe style={styles.iframeWeb} src={url}></iframe>
                    </MediaQuery>
                    <MediaQuery query='(max-device-width: 1224px)'>
                        <iframe style={styles.iframeMobile} src={url}></iframe>
                    </MediaQuery>
                </div>
            </div>
        )
    }
}

const mainStyle = {
    container: {
        textAlign: 'center',
        marginTop: '70px'
    },
    content: {
        fontFamily: 'NanumBarunGothicUltraLight',
        display: 'inline-block',
        width: '30%',
        verticalAlign: 'top',
        color: '#3f3f3f'
    },
    contentTitle: {
        fontSize: '24px',
        color: '#3f3f3f',
    },
    description: {
        marginTop: '30px'
    },
    bold: {
        fontFamily: 'NanumBarunGothicBold',
    },
    image: {
        width: '120px'
    }
}

export var ProductMain = (
    <div style={mainStyle.container}>
        <div style={mainStyle.content}>
            <div style={mainStyle.contentTitle}>귓속형</div>
            <div style={mainStyle.description}>
                <h style={mainStyle.bold}>외관상 거의 눈에 띄지 않아</h><br/>
                학생 및 직장인 사용시<br/>
                만족감이 큽니다.
            </div>
            <img style={Object.assign({}, mainStyle.image, {marginTop: '40px'})} src="./image/NewMenuSection/product1.png"/>
        </div>
        <div style={mainStyle.content}>
            <div style={mainStyle.contentTitle}>오픈형</div>
            <div style={mainStyle.description}>
                보청기 리시버가<br/>
                외이도 내부에 깊이 장착되므로<br/>
                <h style={mainStyle.bold}>보다 편안하고 선명한 음질</h>을<br/>
                제공합니다.
            </div>
            <img style={Object.assign({}, mainStyle.image, {marginTop: '22px'})} src="./image/NewMenuSection/product2.png"/>
        </div>
        <div style={mainStyle.content}>
            <div style={mainStyle.contentTitle}>귀걸이형</div>
            <div style={mainStyle.description}>
                편안한 착용감과 최대출력으로<br/>
                <h style={mainStyle.bold}>다양한 청력</h>에 적합합니다.
            </div>
            <img style={Object.assign({}, mainStyle.image, {marginTop: '61px'})} src="./image/NewMenuSection/product3.png"/>
        </div>
    </div>
)