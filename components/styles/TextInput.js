import styled from 'styled-components'

const TextInput = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  input {
    background: rgba(255, 255, 255, 0.5);
    outline: 0;
    border: 2px solid #1ee494;
    padding: 0 5px;

    height: 40px;
    width: 290px;
    color: white;
    box-sizing: border-box;
    font-size: 14px;
    height: 40px;
    background: rgba(30, 228, 148, 0.7);
    display: flex;
    align-items: center;
  }

  button {
    background: transparent;
    border: 1px solid #1ee494;
    height: 30px;
    width: 70px;
    font-size: 14px;
    box-sizing: border-box;

    cursor: pointer;
    transition: all 0.3s ease;
    justify-content: center;
    height: 40px;
    width: 80px;
    color: white;
    background: rgba(30, 228, 148, 0.7);
    display: flex;
    flex-direction: row;
    align-items: center;
    &:focus {
      outline: none;
    }
    &:hover {
      background: #1ee494;
      color: #fff;
    }
  }
`
export default TextInput
