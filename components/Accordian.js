import React, { Fragment } from 'react'

import posed from 'react-pose'
import styled from 'styled-components'

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

const StyledAccordian = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0;
  padding: 0;

  #root {
    display: flex;
    flex-direction: column;
    width: 400px;
    color: white;
    font-family: 'PT Sans', Helvetica, sans-serif;
  }

  h1 {
    margin-bottom: 20px;
    color: Black;
    text-align: center;
  }
  h2 {
    margin: 0;
    color: white;
    font-size: 16px;
    width: 50%;
  }

  .title {
    cursor: pointer;
    background-image: linear-gradient(
      -180deg,
      rgba(100, 100, 240, 1) 0%,
      rgba(100, 160, 220, 1) 300px
    );
    padding: 10px 20px;
  }

  .content {
    overflow: hidden;
    font-size: 18px;
    background: rgba(240, 240, 240, 0.7);
    color: black;
    width: 50%;
  }

  .content-wrapper {
    padding: 20px 20px;
  }
`
const Plus = styled.div`
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: white;
  border: 2px solid white;
  border-radius: 50%;
  margin-right: 40px;
  .plus {
    display: inline-flex;

    text-align: center;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    color: purple;
    font-size: 25px;
    margin-bottom: 2px;
    margin-right: 0px;
  }
`

class Accordian extends React.Component {
  state = { open: false }

  render() {
    const { open } = this.state

    return (
      <StyledAccordian>
        <h1>Frequently Asked Questions</h1>
        {this.props.data.map(({ title, content }, i) => (
          <Fragment key={i}>
            <h2
              className="title"
              onClick={() => this.setState({ open: open === i ? false : i })}
            >
              <Plus>
                <span className="plus">{open === i ? '-' : '+'}</span>
              </Plus>
              {title}
            </h2>
            <Content className="content" pose={open === i ? 'open' : 'closed'}>
              <div className="content-wrapper">{content}</div>
            </Content>
          </Fragment>
        ))}
      </StyledAccordian>
    )
  }
}

export default Accordian