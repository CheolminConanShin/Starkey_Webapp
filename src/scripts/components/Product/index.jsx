import React from 'react'

const styles = {
  width: '100%',
  height: '86vh'
}

export default class ProductPage extends React.Component {
  render() {
    return(
      <iframe style={styles} src='http://www.starkey.co.kr/product/product/bojung_custom.php'/>
    )
  }
}
