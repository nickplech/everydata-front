import React from 'react'
import Faq from '../components/Faq'
import TakeMyMoney from '../components/TakeMyMoney'

const pricing = () => {
  return (
    <div>
      <TakeMyMoney>
        {' '}
        <button>Express</button>
      </TakeMyMoney>

      <button>Classic</button>
      <button>HIPAA</button>
      <Faq />
    </div>
  )
}

export default pricing
