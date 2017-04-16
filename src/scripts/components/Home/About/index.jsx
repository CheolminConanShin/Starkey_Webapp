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

export default class About extends React.Component {
  render() {
    return (
      <div>About</div>
    )
  }
}
