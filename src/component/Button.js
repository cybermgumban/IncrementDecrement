import React from 'react'
import { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <span>
                <button onClick={this.props.handleButtonClick}>
                    { this.props.sign }
                </button>
            </span>
        )
    }
}

export default Button