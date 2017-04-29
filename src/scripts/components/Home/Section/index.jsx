import React from 'react'

const styles = {
    width: '100%',
    backgroundColor: '#FAF9F4'
}

export default class Section extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={Object.assign({}, styles, this.props.additionalStyle)}>
                {this.props.content}
            </div>
        )
    }
}
