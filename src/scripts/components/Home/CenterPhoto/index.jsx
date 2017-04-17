import React from 'react'
import Photo from './Photo.jsx'

const styles = {
  container: {
    margin: '10px',
    textAlign: 'center',

    backgroundColor: '#FAF9F4',
    border: '2px solid #E4E3DE',
    display: 'inline-grid',
    float: 'left'
  },
  text: {
    fontSize: '2vw',
    color: '#130E32',
    margin: '1vw'
  }
}

export default class CenterPhoto extends React.Component {
  render() {
    const prephoto = Photo({imageUrl: './image/preview.png'})
    return (
      <div style={styles.container}>
        <div style={styles.text}>
          센터 미리보기
        </div>
        {prephoto}
      </div>
    )
  }
}
