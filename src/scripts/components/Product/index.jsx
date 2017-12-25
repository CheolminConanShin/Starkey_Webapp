import React from 'react'
import TitleHeader from '../TitleHeader'
import $ from 'jquery'
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

// const url = 'https://unblockallwebsite.com/open.php?u=dR8mQBKVXlpKmZ%2FNgrmTK47gnIXwy3BWYc66YsYXV8S9o3YXU0o4qFafXrwB0%2F5Rm5gsokaT&b=4&f=norefer'
// const url = 'https://www.google.co.kr/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwjputKvnJXUAhUFp5QKHfrXA4wQFggmMAA&url=http%3A%2F%2Fwww.starkey.co.kr%2Fproduct%2Fproduct%2Fbojung_custom.php&usg=AFQjCNEER08qF03t-xurnvU99a3SEzi2tA&sig2=65jlSiQ2Ln-Pv5BMikzJaQ'
// const url = 'https://server4.kproxy.com/servlet/redirect.srv/swq/swl/sjqxfpjj/spqr/p1/product/product/bojung_custom.phphttps://server4.kproxy.com/servlet/redirect.srv/swq/swl/sjqxfpjj/spqr/p1/product/product/bojung_custom.php'

export default class ProductPage extends React.Component {
    render() {
        window.location='http://www.starkey.co.kr/product/product/bojung_custom.php'
    }
}
//
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