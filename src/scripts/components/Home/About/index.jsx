import React from 'react'
import Frame from '../Frame'

const content = {
  image: './image/About.png',
  leftText: '센터 소개',
  rightText: '"센터모습을 미리 만나보세요"',
  buttonText: '센터 둘러보기',
  buttonUrl: '/#about'
}

export var HomeAbout = (
  Frame(content)
)

const styles = {
    container: {
      fontFamily: 'NanumGothic'
    },
    containerCenter: {
      backgroundColor: '#FAF9F4'
    },
    containerCEO: {
      backgroundColor: '#F4F4F4'
    },
    imageCenter: {
      width: '55vw',
      height: '30vw',
      display: 'inline-grid'
    },
    imageCEO: {
      width: '43vw',
      height: '30vw',
      display: 'inline-grid',
      float: 'right'
    },
    linkCenter: {
      width: '55vw',
      padding: '2vw',
      textAlign: 'center',
      float: 'left'
    },
    linkCEO: {
      width: '43vw',
      padding: '2vw',
      textAlign: 'center',
      float: 'right'
    },
    title: {
      fontSize: '3.5vw',
      color: '#282344',
      fontWeight: 'bold'
    },
    description: {
      fontSize: '3vw',
      color: '#130E32',
      marginLeft: '7vw',
      marginTop: '5vw'
    },
    ceoDescription: {
      fontSize: '2.5vw',
      color: '#130E32',
      marginLeft: '7vw',
      marginTop: '5vw'
    },
    ceoHistory: {
      fontSize: '2vw',
      color: '#130E32',
      marginRight: '7vw',
      marginTop: '5vw',
      textAlign: 'end'
    }
}

const centerContent = (
  <div style={Object.assign({}, styles.container, styles.containerCenter)}>
    <div style={styles.description}>
      <p style={styles.title}>센터 인사말</p>
      <p>파주 스타키 보청기는 고객님들께 최고 품질의 보청기를</p>
      <p>저렴한 가격으로 모시며 최상의 서비스로 만족드리기 위해</p>
      <p>최선을 다하겠습니다.</p>
    </div>
    <div style={styles.description}>
      <p>파주 스타키 보청기는 파주 유일의 스타키 보청기 전문센터 입니다.</p>
      <p>보청기는 정확한 검사와 처방이 필요합니다.</p>
      <p>꼭 내방하시어 무료상담 받아보시길 권유드립니다.</p>
      <p>감사합니다.</p>
    </div>
  </div>
)

const ceoContent = (
  <div style={Object.assign({}, styles.container, styles.containerCEO)}>
    <div style={styles.ceoDescription}>
      <p style={styles.title}>원장 인사말</p>
      <p>난청으로 인하여 고생하시는 분들이 많음을 알게된 후,</p>
      <p>청능학에 매료되어 보청기 사업을 5년전 이곳 파주에서 시작하게 되었습니다.</p>
      <p>어린이로부터 연세가 드신분까지 난청으로 인하여 고생하시는 분들께,</p>
      <p>원하는 소리를 연구하여 제공 및 고장난 보청기를 즉시 수리하는 파주 유일의 센터로서</p>
      <p>자리메김을 하기위하여 현재도 대학원에서 청능학을 이수중에 있습니다.</p>
      <p>파주지역 유일의 스타키 보청기만을 취급하는 센터로써의 자부심과 더불어</p>
      <p>지역사회의 일원으로 늘 이웃과 함께하는 그리고 고객에게 중심으로 다가가는</p>
      <p>그런 센터를 만들고자 최선을 다하겠습니다.</p>
    </div>
    <div style={styles.ceoHistory}>
      <p>원장 소개 </p>
      <p>전문 청능사 </p>
      <p>동아대학교 사범대학 졸업 </p>
      <p>한림대학교 부설 준 청능사 과정 수료 </p>
      <p>한림대학교 부설 청능사 과정 수료 </p>
      <p>한림대학교 사회복지대학원 청각학(석사) 이수중</p>
    </div>
  </div>
)

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: centerContent
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
        <div>
          <a onClick={this.changeContentCenter}><img style={styles.imageCenter} src='./image/aboutHead.jpg' /></a>
          <a onClick={this.changeContentCEO}><img style={styles.imageCEO} src='./image/about.png' /></a>
        </div>
        <div>
          <a  onClick={this.changeContentCenter} style={Object.assign({}, styles.containerCenter, styles.linkCenter)}>센터인사말 보기</a> <a  onClick={this.changeContentCEO} style={Object.assign({}, styles.containerCEO, styles.linkCEO)}>원장인사말 보기</a>
        </div>
        {this.state.content}
      </div>
    )
  }
}
