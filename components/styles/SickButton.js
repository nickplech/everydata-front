import styled from 'styled-components'

const SickButton = styled.button`
  background: rgba(30, 110, 240, 1);
  color: white;
  font-weight: 800;
  border: 0;
  margin: 0 auto;
  border-radius: 5px;

  font-size: 2rem;
  padding: 0.5rem 1.2rem;
  font-size: 1.8rem;
  display: inline-block;
  transition: all 0.5s;
  outline: none;
  cursor: pointer;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
  &[disabled] {
    opacity: 0.5;
  }
  &:hover {
    background: rgba(30, 110, 240, 0.9);
  }
  &:active {
    box-shadow: none;
  }
`

export default SickButton
