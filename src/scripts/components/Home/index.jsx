import React from 'react'
import Section from './Section'
import {HomeAbout} from './About'
import {HomeAids} from './Aids'
import {HomeBlog} from './Blog'
import IconMenu from './IconMenu'
import Location from './Location'
import CenterPhoto from './CenterPhoto'

import ImageSlider from './ImageSlider'

const styles = {
  imageSlider: {
    height: '60vw',
    maxHeight: '500px'
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Section additionalStyle={styles.imageSlider} title="Section1" content={ImageSlider}/>
        <IconMenu/>
        <div>
          <Location/>
          <CenterPhoto/>
        </div>
        {/*<Section additionalStyle={{height: "25vw"}} title="Section2" content={HomeAbout}/>*/}
      </div>
    )
  }
}
