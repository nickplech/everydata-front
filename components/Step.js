import React from 'react'
import SickButton from './styles/SickButton'
import SVG from './SVG'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Step extends React.Component {
  render() {
    const {
      isActive,
      displayPrevious,
      displayNext,

      component,
      children,
    } = this.props

    if (isActive === false) return null

    return (
      <React.Fragment>
        {component ? React.createElement(component) : children}
        <Previous
          isActive={displayPrevious}
          goToPreviousStep={() => this.props.goToPreviousStep()}
        />
        <Next
          isActive={displayNext}
          goToNextStep={() => this.props.goToNextStep()}
        />
      </React.Fragment>
    )
  }
}

class Next extends React.Component {
  render() {
    const { isActive } = this.props
    if (isActive === false) return null

    return (
      <SickButton
        style={{ float: 'right' }}
        onClick={() => this.props.goToNextStep()}
      >
        Next
      </SickButton>
    )
  }
}

class Previous extends React.Component {
  render() {
    const { isActive } = this.props
    if (isActive === false) return null

    return (
      <a onClick={() => this.props.goToPreviousStep()}>
        <SVG />
      </a>
    )
  }
}

// class Submit extends React.Component {
//   render() {
//     const { isActive } = this.props
//     if (isActive === false) return null

//     return <SickButton type="submit">Submit</SickButton>
//   }
// }

export { Step }
