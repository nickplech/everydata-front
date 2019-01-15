import React, { Component } from 'react'
import Hero from './Hero'
import PhoneDisplay from './PhoneDisplay'
import Boxes from './Boxes'
import Info from './Info'
import CallToAction from './CallToAction'
import Footer from './Footer'

class HomePage extends Component {
  render() {
    return (
      <>
        <Hero />
        <PhoneDisplay />
        <Info />
        <Boxes />
        <Info />
        <CallToAction />
        <Footer />
      </>
    )
  }
}

export default HomePage
