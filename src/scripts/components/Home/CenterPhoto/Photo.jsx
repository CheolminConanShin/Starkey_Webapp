import React from 'react'

const styles = {
    image: {
        width: 'inherit',
        height: '21vw'
    }
}

const Photo = (content) => {
    return (
        <img style={styles.image} src={content.imageUrl}/>
    )
}

export default Photo
