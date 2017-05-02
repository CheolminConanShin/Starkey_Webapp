import React from 'react'
import TitleHeader from '../../TitleHeader'
const MediaQuery = require('react-responsive')

const styles = {
    container: {
        fontFamily: 'NanumBarunGothicBold',
        display: 'inline-block',
        width: '100%',
        padding: '3vw 15vw'
    },
    imageCenter: {
        width: '55vw',
        height: '30vw',
        display: 'inline-block',
        float: 'right'
    },
    imageCEO: {
        width: '43vw',
        height: '30vw',
        display: 'inline-block',
        float: 'left'
    },
    linkCenter: {
        width: '55vw',
        padding: '2vw',
        fontSize: '2vw',
        textAlign: 'center',
        float: 'right'
    },
    linkCEO: {
        width: '43vw',
        padding: '2vw',
        fontSize: '2vw',
        textAlign: 'center',
        float: 'left'
    },
    title: {
        fontSize: '3vw',
        color: '#282344',
        fontWeight: 'bold'
    },
    description: {
        fontSize: '2vw',
        color: '#130E32',
    },
    ceoDescription: {
        fontSize: '2vw',
        color: '#130E32',
    },
    ceoHistory: {
        fontSize: '1.5vw',
        color: '#130E32',
        marginTop: '5vw',
        textAlign: 'right'
    }
}

const centerContent = (
    <div style={Object.assign({}, styles.container)}>
        <div style={styles.description}>
            <p style={styles.title}>센터 인사말</p>
            <p>파주 스타키 보청기는 고객님들께 최고 품질의 보청기를</p>
            <p>저렴한 가격으로 모시며 최상의 서비스로 만족드리기 위해</p>
            <p>최선을 다하겠습니다.</p>
            <br></br>
            <p>파주 스타키 보청기는 파주 유일의 스타키 보청기 전문센터 입니다.</p>
            <p>보청기는 정확한 검사와 처방이 필요합니다.</p>
            <p>꼭 내방하시어 무료상담 받아보시길 권유드립니다.</p>
            <p>감사합니다.</p>
        </div>
    </div>
)

const ceoContent = (
    <div style={Object.assign({}, styles.container)}>
        <div style={styles.ceoDescription}>
            <p style={styles.title}>원장 인사말</p>
            <p>눈이 안보이면 사물과 멀어지고 귀가 안들리면 사람과 멀어진다는 말이 있습니다.</p>
            <p>귀가 잘 안들리는 난청의 불편을 잘 표현한 말이라 생각합니다.</p>
            <p>저희 스타키 보청기 파주센터는 이러한 불편에 공감하고</p>
            <p>그 불편을 해소하기 위하여 도움을 드리고자 합니다.</p>
            <br></br>
            <p>보청기는 백 프로 완전한 기계는 아니지만 난청인들에게는 최선의 방법입니다.</p>
            <p>최선과 정직 이 2가지의 마음으로 고객을 내 가족처럼 생각하고 모시겠습니다.</p>
            <p>저희 파주 스타키를 선택하신 난청인과 그 가족 여러분께</p>
            <p>최선의 선택이 될 것을 약속드립니다.</p>
        </div>
        <div style={styles.ceoHistory}>
            <p>원장 소개 </p>
            <p>한림대학원 청각학과 석사과정</p>
            <p>청능사</p>
            <p>부산 동아대학교 졸업</p>
            <p>삼성 중학교 교사 역임</p>
        </div>
    </div>
)

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ceoContent
        }
        this.changeContentCEO = this.changeContentCEO.bind(this)
        this.changeContentCenter = this.changeContentCenter.bind(this)
    }

    changeContentCEO() {
        this.setState({
            content: ceoContent
        })
    }

    changeContentCenter() {
        this.setState({
            content: centerContent
        })
    }

    render() {
        return (
            <div>
                <TitleHeader text='우리센터를 소개합니다'/>
                <div>
                    <a onClick={this.changeContentCEO}><img style={styles.imageCEO} src='./image/about.png'/></a>
                    <a onClick={this.changeContentCenter}><img style={styles.imageCenter} src='./image/aboutHead.jpg'/></a>
                </div>
                <div>
                    <a onClick={this.changeContentCenter}
                       style={Object.assign({}, styles.containerCenter, styles.linkCenter)}>센터인사말 보기</a> <a
                    onClick={this.changeContentCEO} style={Object.assign({}, styles.containerCEO, styles.linkCEO)}>원장인사말
                    보기</a>
                </div>
                {this.state.content}
            </div>
        )
    }
}

const mainStyle = {
    container: {
        margin: '90px 6vw',
        fontFamily: 'NanumBarunGothicUltraLight',
        color: '#4a4a4a'
    },
    description: {
        display: 'table'
    },
    descriptionWeb: {
        fontSize: '17px',
        display: 'inline-block',
        marginRight: '100px',
        float: 'left'
    },
    descriptionMobile: {
        fontSize: '17px',
        display: 'inline-block',
        float: 'left'
    },
    imageWeb: {
        display: 'inline-block',
        marginTop: '10px',
        float: 'left',
        width: '20vw'
    },
    imageMobile: {
        display: 'inline-block',
        marginTop: '80px',
        float: 'left',
        width: '15vw'
    },
    bibliography: {
        marginTop: '40px'
    },
    bold: {
        fontFamily: 'NanumBarunGothic'
    }
}

const mainContent = (
    <div>
        눈이 안보이면 사물과 멀어지고 귀가 안들리면<br/>
        사람과 멀어진다는 말이 있습니다.<br/>
        귀가 잘 안들리는 난청의 불편을 잘 표현한 말이라 생각합니다.<br/>
        저희 스타키 보청기 파주센터는 이러한 불편에 공감하고<br/>
        그 불편을 해소하기 위하여 도움을 드리고자 합니다.<br/>
        <br/>
        보청기는 백프로 완전한 기계는 아니지만<br/>
        난청인들에게는 최선의 방법입니다.<br/>
        최선과 정직 이 2가지의 마음으로<br/>
        고객을 내 가족처럼 생각하고 모시겠습니다.<br/>
        저희 파주 스타키를 선택하신 난청인과 그 가족 여러분께<br/>
        최선의 선택이 될 것을 약속드립니다.
    </div>
)

export var HomeAbout = (
    <div style={mainStyle.container}>
        <MediaQuery style={mainStyle.description} query='(min-device-width: 420px)'>
            <div style={mainStyle.descriptionWeb}>
                {mainContent}
            </div>
            <img style={mainStyle.imageWeb} src="./image/NewMenuSection/about.png" />
        </MediaQuery>
        <MediaQuery style={mainStyle.description} query='(max-device-width: 421px)'>
            <div style={mainStyle.descriptionMobile}>
                {mainContent}
            </div>
            <img style={mainStyle.imageMobile} src="./image/NewMenuSection/about.png" />
        </MediaQuery>
        <div style={mainStyle.bibliography}>
            <h style={mainStyle.bold}>원장 소개</h><br/>
            한림대학원 청각학과 석사과정<br/>
            청능사<br/>
            부산 동아대학교 졸업<br/>
            삼성 중학교 교사 역임
        </div>
    </div>
)