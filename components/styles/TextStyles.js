import styled from 'styled-components'

const TextStyles = styled.div`
  .chat {
    background: rgba(255, 255, 255, 0.8);
    position: relative;
    padding: 5px 13px;
    font-size: 14px;
    border-radius: 10px;
    list-style: none;
    float: left;
    clear: both;
    margin: 10px 0;
    max-width: 200px;
  }

  img {
    width: 25px;
    height: 25px;

    border-radius: 50%;
    position: absolute;
    top: -10px;

    left: -10px;
  }

  .right {
    float: right;
    clear: both;
  }

  a {
    text-decoration: none;
    color: #3498db;
  }
`

export default TextStyles
