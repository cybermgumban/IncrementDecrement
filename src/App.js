import React from 'react';
import { Component } from 'react'
import Screen from './component/Screen'
import Button from './component/Button'
import { connect } from 'react-redux'
import { addCounter, subtractCounter, resetCounter } from './actions/action'

class App extends Component {  

  handleButtonClick = (props) => {
    return () => {
      return ( props === "+" ? (this.props.addCounter()) : (this.props.subtractCounter()) )
    }
  }

  handleResetButton = () => {
    return () => {
      return this.props.resetCounter()
    }
  }

    render (){
      return (
        <div className='center'>
          <div>
            <Screen total={this.props.total}/>
          </div>
          <div>
            <Button sign='-' handleButtonClick={this.handleButtonClick("-")}/>
            <Button sign='+' handleButtonClick={this.handleButtonClick("+")}/>
          </div>
          <div>
            <Button sign='Reset' handleButtonClick={this.handleResetButton()}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCounter: () => { dispatch (addCounter() )},
    subtractCounter: () => { dispatch (subtractCounter() )},
    resetCounter: () => { dispatch (resetCounter() )}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)