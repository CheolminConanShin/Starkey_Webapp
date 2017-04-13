import React from 'react'
import ResponsiveHeader from './components/ResponsiveHeader'
import Section from './components/Section'

export default class Index extends React.Component {
    render() {
      return(
        <div>
          <ResponsiveHeader/>
          <Section title="Section1"/>
          <Section title="Section2"/>
          <Section title="Section3"/>
          <Section title="Section4"/>
          <Section title="Section5"/>
        </div>
      )
    }
}
