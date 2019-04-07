import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import Form from './styles/Form'
import gql from 'graphql-tag'
import chroma from 'chroma-js'
import Select from 'react-select'
import Router from 'next/router'
import Error from './ErrorMessage'

import styled from 'styled-components'
import SickButton from './styles/SickButton'
import SickerButton from './styles/SickerButton'
import Reason from './Reason'
import posed from 'react-pose'

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' },
})

import { ALL_REASONS_QUERY } from './SingleDay'
import { visible } from 'ansi-colors'

const CREATE_REASON_MUTATION = gql`
  mutation CREATE_REASON_MUTATION(
    $name: String!
    $defaultLength: Int
    $provider: String
    $color: String!
  ) {
    createReason(
      name: $name
      defaultLength: $defaultLength
      provider: $provider
      color: $color
    ) {
      id
      defaultLength
      name
      color
    }
  }
`

const Inner = styled.div`
  text-align: left;
  max-width: ${props => props.theme.innerWidth};
  margin: 0 auto;
  padding: 2rem 0;
  padding-top: 0;
  .color {
    margin: 15px 0;
  }
  .dates {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    opacity: 0.5;
    &:focus {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
  .content {
    padding-top: 50px;
    overflow-y: hidden;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 98%;
  }
`
const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
`
const Types = styled.h2`
  display: inline-flex;
`
const AButton = styled.a`
  background: rgba(20, 110, 240, 1);
  border-radius: 50%;
  display: inline-flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  margin: 0px 10px;
  box-shadow: 1px 1px 4px 2px rgba(0, 0, 0, 0.2);
  border: none;
  position: relative;
  z-index: 20;
  cursor: pointer;

  outline: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  &:hover {
    opacity: 0.7;
  }
  .child {
    position: absolute;
    justify-self: center;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 2.3rem;
  }
`

const Submitted = styled.p`
  color: green;
  background: white;
  padding: 15px 15px;
  border-left: 5px solid green;
`
const colourOptions = [
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
  { value: 'ghostwhite', label: 'Ghost White', color: '#F8F8FF' },
  { value: 'black', label: 'Black', color: '#000000' },
]

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})
const colourStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    overflow: visible,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
    }
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
}
class UpdateScheduleSettings extends Component {
  state = {
    name: '',
    defaultLength: 0,
    provider: '',
    selectedOption: '',
    open: false,
  }

  openSlide = () => {
    this.setState({ open: open === true ? false : true })
  }
  handleChange = e => {
    const { name, type, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    this.setState({ [name]: val })
  }
  handleColor = selectedOption => {
    this.setState({ selectedOption: selectedOption })
    console.log(`Option selected:`, selectedOption)
  }
  createReason = async (e, createReasonMutation) => {
    e.preventDefault()
    const res = await createReasonMutation()
    console.log(res)
    this.setState({
      name: '',
      selectedOption: '',
      defaultLength: 0,
      provider: '',
    })
  }

  handleCancelClick = e => {
    e.preventDefault()
    Router.back()
  }

  render() {
    const { open } = this.state
    const selectedOption = this.state.selectedOption
    return (
      <Inner>
        <Query query={ALL_REASONS_QUERY}>
          {({ data, loading, error }) => {
            if (error) return <Error error={error} />
            if (loading) return <p>Loading...</p>
            console.log(data)
            return (
              <Mutation
                mutation={CREATE_REASON_MUTATION}
                update={this.update}
                refetchQueries={[
                  {
                    query: ALL_REASONS_QUERY,
                  },
                ]}
                variables={{
                  ...this.state,
                  color: this.state.selectedOption.color,
                }}
              >
                {(createReason, { loading, error, called }) => {
                  if (!this.state.color)
                    return (
                      <Form onSubmit={e => this.createReason(e, createReason)}>
                        <Error error={error} />
                        {!error && !loading && called && (
                          <Submitted>
                            New Appointment Type Created SuccessFully!
                          </Submitted>
                        )}
                        <fieldset disabled={loading} aria-busy={loading}>
                          <>
                            <Flex>
                              <Types>Appointment Types</Types>
                              {!open && (
                                <AButton onClick={this.openSlide}>
                                  <div className="child">+</div>
                                </AButton>
                              )}
                            </Flex>
                            <Flex style={{ padding: '0' }}>
                              {data.reasons.map(reason => {
                                return (
                                  <Reason key={reason.id} reason={reason} />
                                )
                              })}
                            </Flex>
                            <Content
                              className="content"
                              pose={open === true ? 'open' : 'closed'}
                            >
                              <label htmlFor="name">
                                Name of Appointment Type
                                <input
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Name"
                                  autoComplete="off"
                                  // required
                                  value={this.state.name}
                                  onChange={this.handleChange}
                                />
                              </label>
                              <label>
                                Select Color to Identify Appointment Type
                                <Select
                                  className="color"
                                  styles={colourStyles}
                                  value={selectedOption}
                                  onChange={this.handleColor}
                                  options={colourOptions}
                                />
                              </label>
                              <label htmlFor="defaultLength">
                                Default Length:
                                <input
                                  type="number"
                                  min="0"
                                  max="800"
                                  step="15"
                                  id="defaultLength"
                                  name="defaultLength"
                                  value={this.state.defaultLength}
                                  onChange={this.handleChange}
                                />
                              </label>
                              <label htmlFor="provider">
                                Appointment Belongs to Specific Provider?
                                <input
                                  type="text"
                                  id="provider"
                                  name="provider"
                                  placeholder="provider"
                                  value={this.state.provider}
                                  onChange={this.handleChange}
                                />
                              </label>{' '}
                              <SickButton type="submit">
                                Creat{loading ? 'ing' : 'e'} Type
                              </SickButton>{' '}
                              <SickerButton
                                onClick={() => this.setState({ open: false })}
                              >
                                Close
                              </SickerButton>
                            </Content>
                          </>
                        </fieldset>
                      </Form>
                    )
                }}
              </Mutation>
            )
          }}
        </Query>
      </Inner>
    )
  }
}

export default UpdateScheduleSettings
export { CREATE_REASON_MUTATION }
