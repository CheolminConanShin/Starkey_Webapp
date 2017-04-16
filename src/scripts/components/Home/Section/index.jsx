import React from 'react'

const styles = {
  width: '100%',
  backgroundColor: '#FFE8DD',
  border: '1vw solid #FFDDCE',
  borderBottom: '1vw solid #EDC9CA',
  borderRight: '1vw solid #EDC9CA'
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
