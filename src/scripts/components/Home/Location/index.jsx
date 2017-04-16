import React from 'react'

const styles = {
  container: {
    margin: '3px',
    textAlign: 'center',
    width: '30vw',
    height: '30vw',
    backgroundColor: '#FAF9F4',
    border: '2px solid #E4E3DE'
  },
  image: {
    width: '25vw',
    height: '22vw'
  }
}

export default class Location extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <img style={styles.image} src='./image/map.png'/>
      </div>
    )
  }
}
