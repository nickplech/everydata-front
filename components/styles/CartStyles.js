import styled from 'styled-components'

const CartStyles = styled.div`
  padding: 40px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  max-width: 700px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 90;
  display: grid;
  grid-template-rows: 40vh auto;
  overflow-y: scroll;
  ${props => props.open && `transform: translateX(0);`};
  header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
  footer {
    border-top: 5px solid ${props => props.theme.black};
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .exy {
    cursor: pointer;
    opacity: 0.6;
    outline: none;
  }
`

export default CartStyles
