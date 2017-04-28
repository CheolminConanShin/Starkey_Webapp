import React from 'react'
import CenterPhoto from '../CenterPhoto'

const styles = {
  container: {
    width: '14vw',
    height: '11vw',
    textAlign: 'center',
    display: 'inline-block',
    paddingBottom: '1vw'
  },
  text: {
    lineHeight: '3vw',
    color: '#E7E7E7',
    fontSize: '2vw',
    fontFamily: 'NanumBarunGothicBold'
  },
  inheritSize: {
    width: '4vw',
    height: '4vw'
  }
}

export const CameraIcon = (content) => {
  return (
    <div style={styles.container}>
      <a onClick={content.clickEvent}>
        <img style={styles.inheritSize} src={content.imageUrl}/>
        <div style={styles.text}>
          {content.text}
        </div>
      </a>
    </div>
  )
}

export const Icon = (content) => {
  return (
    <div style={styles.container}>
      <a href={content.url}>
        <img style={styles.inheritSize} src={content.imageUrl}/>
        <div style={styles.text}>
          {content.text}
        </div>
      </a>
    </div>
  )
}
