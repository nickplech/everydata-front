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

const handleClick = e => {
  e.preventDefault()
}
const SubscriptionManagement = () => {
  return (
    <Inner>
      <Form>
        <fieldset>
          <TakeMyMoney>
            <SickButton className="button" onClick={handleClick}>
              Express Account
            </SickButton>
          </TakeMyMoney>
          <SickButton className="button" onClick={handleClick}>
            Classic Account
          </SickButton>
          <SickButton className="button" onClick={handleClick}>
            HIPAA Compliance
          </SickButton>
        </fieldset>
      </Form>
    </Inner>
  )
}

export default SubscriptionManagement
