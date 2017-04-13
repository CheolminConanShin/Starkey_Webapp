import React from 'react'

const styles = {
  width: '100%',
  height: '30vh',
  backgroundColor: 'blue'
}

export default class Section extends React.Component {
  render() {
    return (
      <div style={styles}>{this.props.title}</div>
    )
  }
}
