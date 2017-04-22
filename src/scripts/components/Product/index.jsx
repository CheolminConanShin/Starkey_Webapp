import React from 'react'
import TitleHeader from '../TitleHeader'
const MediaQuery = require('react-responsive')
const styles = {
  container: {
    width    : '96%',
    height   : '78vh',
    overflow : 'hidden',
    position : 'relative',
    marginLeft: '2%'
  },
  iframeWeb: {
    position : 'absolute',
    top      : '-300px',
    left     : '-8vw',
    width    : '114.5vw',
    height   : '120vh'
  },
  iframeMobile: {
    position : 'absolute',
    top      : '-300px',
    left     : '-8vw',
    width    : '114.5vw',
    height   : '100vh'
  }
}

// const url = 'http://www.starkey.co.kr/product/product/bojung_custom.php'
const url = 'https://unblockallwebsite.com/open.php?u=http%3A%2F%2Fwww.starkey.co.kr%2Fproduct%2Fproduct%2Fbojung_custom.php&b=224&f=norefer'

export default class ProductPage extends React.Component {
  render() {
    return(
      <div>
        <TitleHeader text='제품 소개'/>
        <div style={styles.container}>
          <MediaQuery query='(min-device-width: 1224px)'>
            <iframe style={styles.iframeWeb} src={url}></iframe>
          </MediaQuery>
          <MediaQuery query='(max-device-width: 1224px)'>
            <iframe style={styles.iframeMobile} src={url}></iframe>
          </MediaQuery>
        </div>
      </div>
    )
  }
}
