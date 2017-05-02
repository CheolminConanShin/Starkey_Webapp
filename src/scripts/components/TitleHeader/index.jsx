import React from 'react'

const header = {
    container: {
        color: '#130E32'
    },
    header: {
        width: '100%',
        height: '113px',
        lineHeight: '113px',
        paddingRight: '70px',
        fontSize: '2.5vw',
        textAlign: 'center',
        display: 'inline-block',
        backgroundColor: '#3dbdb6'
    }
}

export default class TitleHeader extends React.Component {
    render() {
        return (
            <div style={header.container}>
                <h style={header.header}>{this.props.text}</h>
            </div>
        )
    }
}
