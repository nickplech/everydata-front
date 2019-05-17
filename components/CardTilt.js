import React from 'react'
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
  li {
    @import url('https://fonts.googleapis.com/css?family=Audiowide|Orbitron|Rajdhani|VT323');
    color: white;
    font-size: 16px;
    margin: 2px 0 2px 15px;
    font-family: 'VT323', monospace;
  }
`

const Wrap = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background: rgba(221, 224, 226, 0.6);
  padding: 0 70px 100px 70px;
  .space {
    perspective: 1500px;
    width: 525px;
  }

  .card {
    position: relative;
    border-radius: 8px;
    background: #32325d;
    width: 625px;
    margin-left: 40px;
    transform: rotate3d(0.5, 0.866, 0, 15deg) rotate(-1deg);
    box-shadow: -27.1px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
      -16.2px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
  }

  .code-snippet {
    padding: 15px 10px;
  }

  .card-shine {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      to top right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.5) 70%,
      #fff
    );
    pointer-events: none;
    opacity: 0.2;
  }
  h4 {
    @import url('https://fonts.googleapis.com/css?family=Audiowide|Orbitron|Rajdhani|VT323');
    color: white;
    font-size: 18px;
    text-align: center;
    margin: 2px 0 2px 0px;
    font-family: 'VT323', monospace;
  }

`

const dataFilters1 = [
  'Business Owners',
  'Homeowners',
  'Cell Phones or Landlines',
  'Emails and Faxes',
  'DNC and Suppressions',
  'Net Worth Investors',
  'Travel and Vacation',
]

const dataFilters2 = [
  'Opportunity Seekers',
  'Credit and Debt Data',
  'Hispanic and African American ',
  'Real Estate and Insurance Agents',
  'Career and Financial',
  'Instagram and Facebook',
  'Interests, hobbies and Lifestyles',
]

const CardTilt = () => {
  return (
    <Wrap>
      <div className="space">
        <div className="card">
          <div className="card-shine" />
          <div className="code-snippet">
            <h4>Select from Our Data Filters</h4>
            <Flex>
            <ul>
              {dataFilters1.map(filter => (
                <li key={filter}>{filter}</li>
              ))}
            </ul>
            <ul>
              {dataFilters2.map(filter => (
                <li key={filter}>{filter}</li>
              ))}
            </ul>
            </Flex>
          </div>
        </div>
      </div>
    </Wrap>
  )
}

export default CardTilt
