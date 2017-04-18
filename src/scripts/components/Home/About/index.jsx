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
    image: {
      width: '100%'
    },
    description: {
      fontSize: '3vw',
      color: '#130E32',
      marginLeft: '7vw',
      marginTop: '5vw'
    }
}

export default class About extends React.Component {
  render() {
    return (
      <div>
        <img style={styles.image} src='./image/aboutHead.jpg' />
        <div style={styles.description}>
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
  }
}
