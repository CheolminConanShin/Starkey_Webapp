import React from 'react'
import Section from './Section'
import {HomeAbout} from './About'
import {HomeAids} from './Aids'
import {HomeBlog} from './Blog'

import ImageSlider from './ImageSlider'

const ImageSliderStyle = {
  height: '50vw',
  maxHeight: '500px'
}

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Section additionalStyle={ImageSliderStyle} title="Section1" content={ImageSlider}/>
        <Section additionalStyle={{height: "25vw"}} title="Section2" content={HomeAbout}/>
        <Section additionalStyle={{height: "25vw"}} title="Section3" content={HomeAids}/>
        <Section additionalStyle={{height: "25vw"}} title="Section4" content={HomeBlog}/>
        <Section additionalStyle={{height: "25vw"}} title="Section5"/>
      </div>
    )
  }
}
