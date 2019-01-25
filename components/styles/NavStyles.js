import styled from 'styled-components'

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  z-index: 0;
  position: relative;
  a,
  button {
    padding: 0rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    color: rgba(100, 100, 100, 1);
    z-index: 5;
    cursor: pointer;

    &:after {
      height: 2px;
      background: ${props => props.theme.blue};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 1.3rem;
    }
    @media (max-width: 699px) {
      &:after {
        height: 0;
        background: none;
        content: '';
        width: 0;
        position: absolute;
        transform: none;
        transition: none;
        left: 50%;
        margin-top: 1.3rem;
      }
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
    justify-content: flex-end;
    font-size: 1.5rem;
  }
`

export default NavStyles
