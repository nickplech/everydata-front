import React from 'react'
import Faq from '../components/Faq'
import PricingDisplay from '../components/PricingDisplay'
import TakeMyMoney from '../components/TakeMyMoney'
import Footer from '../components/Footer'

const pricing = () => {
  return (
    <div>
      <PricingDisplay />
      <Faq />
      <Footer />
    </div>
  )
}

export default pricing
