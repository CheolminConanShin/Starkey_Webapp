import React from 'react'

const styles = {
  container: {
    margin: '10px',
    textAlign: 'center',
    width: '28vw',
    height: '27vw',
    backgroundColor: '#FAF9F4',
    border: '2px solid #E4E3DE',
    color: '#130E32',
    display: 'inline-grid',
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

export default class Location extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <img style={styles.image} src='./image/map.png'/>
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
