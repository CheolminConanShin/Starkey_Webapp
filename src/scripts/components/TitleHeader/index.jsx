import React from 'react'

const header = {
  container: {
    color: '#130E32'
  },
  header: {
    width: '100%',
    fontSize: '3vw',
    padding: '1vw',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#FAF9F4'
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
