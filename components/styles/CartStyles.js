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
  grid-template-rows: 60vh auto;
  overflow-y: scroll;
  ${props => props.open && `transform: translateX(0);`};
  header {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid black;
    overflow: hidden;
  }
  footer {
    display: grid;
    grid-template-columns: 1fr;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`

export default CartStyles
