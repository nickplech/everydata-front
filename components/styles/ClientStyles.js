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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    & > * {
      background: white;

      &:hover {
        background: rgba(20, 110, 240, 0.4);
      }
    }
  }
  p,
  a {
    padding-left: 10px;
  }
  button {
    padding: 6px 0;
    cursor: pointer;
    &:hover {
      background: rgba(20, 110, 240, 0.4);
    }
  }
`

export default ClientStyles
