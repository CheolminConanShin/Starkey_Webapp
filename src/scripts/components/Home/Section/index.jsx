import React from 'react'

const styles = {
    container: {
        width: '100%',
        padding: '50px 150px 160px 150px',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'NanumBarunGothic',
        fontSize: '25px',
        color: '#3f3f3f',
        marginBottom: '10px'
    }
}

export default class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={Object.assign({}, styles.container, this.props.additionalStyle)}>
                <div style={styles.title}>{this.props.title}</div>
                <hr></hr>
                {this.props.content}
            </div>
        )
    }
}
