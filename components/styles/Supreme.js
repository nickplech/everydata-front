import styled from 'styled-components'

const Supreme = styled.p`
  border: 2px solid ${props => props.theme.blue};
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.blue};
  display: block;
  text-align: center;
  padding: 0px 0px;
  margin: 0 auto;
  font-size: 2.2rem;
`

export default Supreme
