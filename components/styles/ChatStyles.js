import styled from 'styled-components'

const StyledChat = styled.div`
  transform: translateY(93.5%);
  transition: all 0.5s;
  ${props => props.open && `transform: translateY(0);`};
  width: 340px;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  position: fixed;
  margin: 0;
  z-index: 999;
  right: 20px;
  bottom: 0;
  p {
    margin: 0;
    display: inline-block;
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    background-color: rgba(30, 228, 148, 0.7);
    color: #fff;
    margin: 0;
    height: 40px;
    font-weight: 300;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chats {
    box-sizing: border-box;
    padding: 0 20px;
    margin: 10px 0 0;
    height: 510px;
    overflow-y: scroll;
  }

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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    left: 0px;
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

export default StyledChat
