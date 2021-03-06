import styled, { keyframes } from 'styled-components'

const DropDown = styled.div`
  position: absolute;

  display: flex;
  flex-flow: column;
  width: 100%;
  z-index: 5;
  border: 1px solid ${props => props.theme.lightgrey};
  max-height: 50vh;
  overflow-y: scroll;
`

const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  background: ${props => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  font-size: 1.2rem;
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${props => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
`

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-left: 20px;
    border: 0;
    border-radius: 5px;
    width: 240px;
    font-size: 1.4rem;
    outline: none;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`

export { DropDown, DropDownItem, SearchStyles }
