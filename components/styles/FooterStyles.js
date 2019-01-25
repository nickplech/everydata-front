import styled from 'styled-components'

const FooterStyles = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
  background: rgba(10, 10, 10, 0.8);
  color: ${props => props.theme.offWhite};
  margin: 0;
  padding: 0;
  padding-top: 55px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-self: center;
  font-size: 0.9rem;
  height: 250px;

  a {
    color: ${props => props.theme.offWhite};
    font-size: 1.3rem;
  }
  @media (max-width: 700px) {
    font-size: 11px;
    padding: 20px 10px;
  }
  @media (max-width: 1300px) {
    justify-content: center;
    font-size: 0.8rem;
  }
`

export default FooterStyles
