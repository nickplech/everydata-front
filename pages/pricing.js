import React from 'react'
import Faq from '../components/Faq'
import PricingDisplay from '../components/PricingDisplay'
import Questions from '../components/Questions'
import Footer from '../components/Footer'

const pricing = () => {
  return (
    <div>
      <PricingDisplay />
      <Faq />
      <Questions />
      <Footer />
    </div>
  )
}

export default pricing
