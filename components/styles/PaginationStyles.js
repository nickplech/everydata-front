import styled from 'styled-components'

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  height: 50px;
  justify-self: center;
  font-size: 10px;
  width: 250px;
  /* margin: 2rem 0; */
  border: 1px solid ${props => props.theme.lightblue};
  border-radius: 25px 25px 25px 25px;
  background: ${props => props.theme.lightblue};
  & > * {
    margin: 0 auto;
    padding: 12px 14px;

    &:last-child {
      border-right: 0;
    }
    &:nth-child(2) {
      border-right: 0;
    }
  }
  a {
    color: white;
  }
  a[aria-disabled='true'] {
    color: ${props => props.theme.lightgrey};
    pointer-events: none;
  }
  .totes {
    background: white;
  }
`

export default PaginationStyles
