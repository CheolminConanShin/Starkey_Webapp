import React from 'react'

const styles = {
  image: {
    width: '67.5vw',
    height: '22vw'
  }
}

const Photo = (content) => {
    return(
      <img style={styles.image} src={content.imageUrl}/>
    )
}

export default Photo
