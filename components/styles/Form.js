import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`

const Form = styled.form`
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1),
    0 6px 10px 5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  background: white;
  z-index: 999;
  padding: 20px;
  margin: 20px 0;
  margin-top: 0px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  position: relative;

  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding-left: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    font-size: 1.5rem;
    border-radius: 5px;

    background: transparent;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-top: 0.8rem;
    &:focus {
      outline: 0;
      border: 2px solid rgba(20, 110, 220, 0.5);
    }
  }

  button,
  input[type='submit'] {
    width: auto;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin-top: 1rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      margin-bottom: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #272ebd 0%,
        #0980cd 50%,
        #272ebd 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`

Form.displayName = 'Form'

export default Form
