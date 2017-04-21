import React from 'react'

const pageStyle = {
  container: {
    color: '#130E32'
  },
  header: {
    width: '100%',
    fontSize: '4vw',
    padding: '2vw',
    textAlign: 'center',
    display: 'inline-grid',
    backgroundColor: '#FAF9F4'
  }
}

export default class Board extends React.Component {
  render() {
    return(
      <div style={pageStyle.container}>
        <h style={pageStyle.header}>준비 중 입니다...</h>
      </div>
    )
  }
}
