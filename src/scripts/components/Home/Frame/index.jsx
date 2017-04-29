import React from 'react'

const styles = {
    container: {
        height: '100%'
    },
    leftSide: {
        float: 'left',
        padding: '2vw',
        width: 'calc(40% - 4vw)',
        height: 'calc(100%)'
    },
    text: {
        textAlign: 'center',
        fontSize: '2.7vw',
        paddingTop: '1vw'
    },
    description: {
        fontSize: '2vw'
    },
    rightSide: {
        float: 'right',
        padding: '7vw 2vw 7vw 2vw',
        width: 'calc(60% - 4vw)',
        height: 'calc(100%)'
    },
    buttonContainer: {
        width: '100%',
        marginTop: '6%',
        textAlign: 'center',
        lineHeight: '2vw'
    },
    button: {
        fontSize: '2vw'
    },
    image: {
        width: '100%',
        height: '80%'
    }
}

const Frame = (content) => {
    return (
        <div style={styles.container}>
            <div style={styles.leftSide}>
                <img src={content.image} style={styles.image}/>
                <div style={styles.text}>{content.leftText}</div>
            </div>
            <div style={styles.rightSide}>
                <div style={Object.assign({}, styles.text, styles.description)}>{content.rightText}</div>
                <div style={styles.buttonContainer}>
                    <a href={content.buttonUrl}>
                        <button className='btn btn-primary' style={styles.button}>{content.buttonText}</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Frame
