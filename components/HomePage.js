import React, { Component } from 'react'
import Hero from './Hero'
import Questions from './Questions'
import PhoneDisplay from './PhoneDisplay'
import CardTilt from './CardTilt'
import Info from './Info'
import CallToAction from './CallToAction'
import Profile from './Profile'
import User from './User'
import SingleDay from './SingleDay'
import Footer from './Footer'
import IconMorph from './IconMorph'
import styled from 'styled-components'

const Backgrounder = styled.div`
  width: 100%;
  background: linear-gradient(180deg, rgba(221, 224, 226, 0.6), #fff);
`

class HomePage extends Component {
  render() {
    return (
      <User>
        {({ data: me }) => {
          return (
            <>
              <PhoneDisplay />
              <IconMorph />
              <Info />
              {/* <Hero /> */}
              <CardTilt />
              <Backgrounder>
                <SingleDay me={me} page={this.props.postsPage} />
              </Backgrounder>
              <Profile
                person="Phil Flora, Owner"
                image="../static/img/samplephil.jpg"
                info="14-year call center expert"
                linkedIn="https://www.linkedin.com/in/phil-flora-8841939a/"
              />
              <Info />

              <CallToAction />
              <Footer />
            </>
          )
        }}
      </User>
    )
  }
}

export default HomePage
