import styled from 'styled-components'

const SickerButton = styled.button`
  background: rgba(10, 120, 240, 1);
  color: white;
  font-weight: 800;
  border: 0;
  margin: 10px 20px;
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
    background: rgba(230, 10, 40, 0.7);
  }
  &:active {
    box-shadow: none;
  }
`

export default SickerButton
