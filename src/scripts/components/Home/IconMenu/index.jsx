import React from 'react'
import Icon from './Icon'

const styles = {
  container: {
    lineHeight: '5vw',
    textAlign: 'center',
    backgroundColor: '#130E32'
  },
  quickMenu: {
    color: '#E7E7E7',
    fontSize: '2.5vw',
    display: 'inline-grid',
    marginRight: '1vw'
  },
  companyName: {
    color: '#317fb7',
    fontSize: '2vw',
    display: 'inline-grid',
    marginLeft: '1vw'
  },
  icons: {
    textAlign: 'center',
    lineHeight: '7vw',
    backgroundColor: '#282344'
  }
}

export default class IconMenu extends React.Component {
  render() {
    const eventIcon = Icon({imageUrl: './icon/event.png', text: '공지사항', url: '#'})
    const introIcon = Icon({imageUrl: './icon/center.png', text: '센터소개', url: '/#/about'})
    const centerIcon = Icon({imageUrl: './icon/camera.png', text: '센터미리보기', url: '#'})
    const hearingAidIcon = Icon({imageUrl: './icon/hearingaid.png', text: '제품소개', url: '#'})
    const blogIcon = Icon({imageUrl: './icon/blog.png', text: '블로그', url: '#'})
    const mapIcon = Icon({imageUrl: './icon/map.png', text: '연락처/위치', url: '#'})
    const storyIcon = Icon({imageUrl: './icon/story.png', text: '사용자후기', url: '#'})
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
