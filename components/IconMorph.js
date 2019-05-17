import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  max-width: 1300px;
  margin: 30px auto 100px auto;
`
const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 70px auto 20px auto;
  width: 90%;

  h1 {
    line-height: 3.2rem;

    padding: 5px 20px;
    cursor: pointer;
    color: rgba(20, 110, 240, 1);
    font-size: 3rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
  }
  p {
    margin: 0 auto;
    text-transform: uppercase;
    color: rgba(20, 20, 20, 0.7);
  }
`
const Circle = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`
const StyledBody = styled.div`
  padding-bottom: 20px;

  flex-flow: column;
  justify-content: stretch;
  align-items: center;

  display: flex;
  h5 {
    margin-bottom: 3px;
    font-size: 16px;
    margin-top: 10px;
  }
  .lead {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    line-height: 2.2rem;
    max-width: 300px;
    text-align: center;
    font-weight: 200;
    margin-top: 0;
  }
  a {
    display: flex;
    border: none;
    text-align: center;
    width: auto;
    overflow: visible;
    background: transparent;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    background: transparent;
    transition: 0.3s;
    outline: none;
    color: white;
    padding: 10px 0;
    cursor: pointer;

    font-size: 1.7rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`

const text = ['1', '2', '3']

const textColor = [
  'rgba(20, 110, 240, .6)',
  'rgba(20, 110, 240, .8)',
  'rgba(20, 110, 240, 1)',
]

const text2 = [
  'Refreshingly Simple Text Message Appointment Reminders',
  'Spend less time scheduling and more time doing what you do best',
  'Perfect Collection of business tools to help you grow',
]

class IconMorph extends React.Component {
  render() {
    return (
      <>
        <HeaderTitle>
          <h1>
            Current 2019 Databases &amp; Data Feeds&mdash;Build Your
            Perfect List
          </h1>
        </HeaderTitle>
        <Grid>
          <StyledBody>
            <Circle style={{ background: `${textColor[0]}` }}>
              <a>{text[0]}</a>
            </Circle>
            <h5>Brief Consultation</h5>
            <p className="lead">
              Start with a brief marketing consultation &amp; determine your
              targeted demographics
            </p>
          </StyledBody>
          <StyledBody>
            <Circle style={{ background: `${textColor[1]}` }}>
              <a>{text[1]}</a>
            </Circle>
            <h5>Free Sample List</h5>
            <p className="lead">
              Receive a free test list containing your targeted demographics
            </p>
          </StyledBody>
          <StyledBody>
            <Circle style={{ background: `${textColor[2]}` }}>
              <a>{text[2]}</a>
            </Circle>
            <h5>Sign Up &amp; Convert</h5>
            <p className="lead">
              Sign up with us and receive lists that convert on a regular basis
            </p>
          </StyledBody>
        </Grid>
      </>
    )
  }
}

export default IconMorph
