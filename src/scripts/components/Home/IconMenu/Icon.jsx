import React from 'react'

const styles = {
  container: {
    width: '12vw',
    textAlign: 'center',
    display: 'inline-grid'
  },
  text: {
    lineHeight: '10px',
    color: '#E7E7E7',
    fontFamily: 'NanumGothic',
    paddingBottom: '10px'
  }
}

const Icon = (content) => {
  return (
    <div style={styles.container}>
      <a href="#">
        <img src={content.imageUrl}/>
        <div style={styles.text}>
          {content.text}
        </div>
      </a>
    </div>
  )
}

export default Icon
