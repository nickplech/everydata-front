import styled from 'styled-components'

const ClientStyles = styled.div`
  border-bottom: 1px solid grey;

  height: 30px;
  &:hover {
    background: rgba(20, 110, 240, 0.4);
  }
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
      /* background: white; */
    }
  }
  p,
  a {
    padding-left: 10px;
    margin: 0;
  }
  button {
    padding: 2px 0;
    border-radius: 5px;
    margin: 0 10px;
    border: none;
    font-size: 14px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:active {
      outline: none;
    }
    &:hover {
      background: rgba(20, 110, 220, 0.5);
    }
  }
`

export default ClientStyles
