import React from 'react'
import {HashRouter as Router, Route} from "react-router-dom"
import TitleHeader from '../TitleHeader'

const pageStyle = {
  leftSide: {
    padding: '3vw',
    width: '35vw',
    float: 'left',
    color: '#130E32'
  },
  rightSide: {
    width: '65vw',
    float: 'right'
  },
  link: {
    fontSize: '2vw',
    padding: '1vw'
  },
  image: {
    width: 'inherit'
  }
}

const eventA = {
  image: './image/parentsday.jpg',
  title: '어버이날 이벤트'
}
const eventB = {
  image: './image/AidIncrease.png',
  title: '보청기 지원금 대폭 상승'
}

export default class EventPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imageUrl: './image/parentsday.jpg'
    }
    this.changeImage = this.changeImage.bind(this)
  }

  changeImage(event) {
    this.setState({
      imageUrl: event.image
    })
  }

  render() {
    return(
      <div>
        <TitleHeader text='이벤트 및 공지사항'/>
        <div style={pageStyle.leftSide}>
          <li style={pageStyle.link} value={eventA} onClick={() => this.changeImage(eventA)}>{eventA.title}</li>
          <li style={pageStyle.link} value={eventB} onClick={() => this.changeImage(eventB)}>{eventB.title}</li>
        </div>
        <div style={pageStyle.rightSide}>
          <img style={pageStyle.image} src={this.state.imageUrl}></img>
        </div>
      </div>
    )
  }
}
