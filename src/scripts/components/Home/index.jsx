import React from 'react'
import Section from './Section'
import {HomeAbout} from './About'
import {HomeAids} from './Aids'
import {HomeBlog} from './Blog'
import IconMenu from './IconMenu'
import Location from './Location'

import ImageSlider from './ImageSlider'

const ImageSliderStyle = {
  height: '60vw',
  maxHeight: '500px'
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Section additionalStyle={ImageSliderStyle} title="Section1" content={ImageSlider}/>
        <IconMenu/>
        <Location/>
        {/*<Section additionalStyle={{height: "25vw"}} title="Section2" content={HomeAbout}/>*/}
      </div>
    )
  }
}
