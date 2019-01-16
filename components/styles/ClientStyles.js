import styled from 'styled-components'

const ClientStyles = styled.div`
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }

  .buttonList {
    text-align: left;
    display: grid;
    width: 100%;

    align-items: center;

    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    & > * {
      background: white;
      border: 1px solid grey;
      font-size: 1.3rem;
      &:hover {
        background: rgba(100, 100, 240, 0.4);
      }
    }
  }
  p,
  a {
    padding-left: 10px;
  }
  button {
    height: 28px;
    max-width: 100px;
    cursor: pointer;
    &:hover {
      background: rgba(100, 100, 240, 0.4);
    }
  }
`

export default ClientStyles
