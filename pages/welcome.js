import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Submitted = styled.p`
  color: white;
  text-align: center;
  background: #36b37e;
  margin-top: 100px;
  font-size: 22px;
  padding: 25px 15px;
  a {
    color: white;
    padding-bottom: 3px;
    border-bottom: 3px solid white;
  }
`
const Welcome = () => {
  return (
    <div>
      <Submitted>
        Welcome to Perfect Day Reminders, Please{' '}
        <Link href="/login">
          <a>Login Here</a>
        </Link>{' '}
        to Begin Your Free Trial
      </Submitted>
    </div>
  )
}

export default Welcome
