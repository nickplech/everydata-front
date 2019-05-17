import styled from 'styled-components'

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: flex-end;
  align-items: center;
  margin-left: 25px;
  font-size: 1rem;
  z-index: 0;
  background: rgba(20, 110, 240, 1);
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
    border: none;
    color: white;
    z-index: 5;
    cursor: pointer;
    &:after {
      height: 2px;
      background: white;
      content: '';
      width: 0;
      display: flex;
      align-self: flex-end;
      color: rgba(20, 110, 240, 1);
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
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
  @media (min-width: 1300px) {
    width: 100%;
    justify-content: flex-end;
    font-size: 1.5rem;
  }
`

export default NavStyles
