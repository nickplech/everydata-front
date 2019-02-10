import styled from 'styled-components'

const CloseButton = styled.button`
  background: transparent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  padding-bottom: 6px;
  border: 1px solid red;
  position: absolute;
  z-index: 20;
  left: 5px;
  top: 5px;
  .child {
    position: absolute;
    justify-self: center;
    display: flex;
    color: red;
    font-size: 3rem;
    padding-left: 0px;
  }
`

export default CloseButton
