import React from 'react'

const styles = {
  container: {
    width: '14vw',
    height: '11vw',
    textAlign: 'center',
    display: 'inline-grid',
    paddingBottom: '1vw'
  },
  text: {
    lineHeight: '3vw',
    color: '#E7E7E7',
    fontSize: '2vw',
    fontFamily: 'NanumGothic'
  },
  inheritSize: {
    width: '4vw',
    height: '4vw'
  }
}

const Icon = (content) => {
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

export default Icon
