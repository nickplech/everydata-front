import React from 'react'
import TakeMyMoney from './TakeMyMoney'
import styled from 'styled-components'
import Form from './styles/Form'
import SickButton from './styles/SickButton'

const Inner = styled.div`
  text-align: center;
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem 0;
  padding-top: 0;
  .dates {
    font-family: montserrat, sans-serif;
    text-transform: uppercase;
    opacity: 0.5;
    &:focus {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
  .button {
    margin: 0 20px;
  }
`

const ORDER_DATA = [
  {
    title: 'Express Account',
    id: '1',
    price: 2999,
  },
  {
    title: 'Classic Account',
    id: 'plan_EW7xrpDzOE9d5I',
    price: 3999,
  },

  {
    title: 'HIPAA Compliant',
    id: '3',
    price: 1000,
  },
]
const handleClick = e => {
  e.preventDefault()
}

const SubscriptionManagement = () => {
  return (
    <Inner>
      <Form>
        <fieldset>
          {ORDER_DATA.map((buttons, i) => {
            return (
              <TakeMyMoney
                key={i}
                title={buttons.title}
                price={buttons.price}
                plan={buttons.id}
              >
                <SickButton className="button" onClick={handleClick}>
                  {buttons.title}
                </SickButton>
              </TakeMyMoney>
            )
          })}
        </fieldset>
      </Form>
    </Inner>
  )
}

export default SubscriptionManagement
