import React, { Component } from "react";
import PropTypes from "prop-types";
import { _colors as Colors } from '../_colors'

import '../styles/button.css'

export default class StandardButton extends Component{
    static defaultProps = {
        width: PropTypes.number,
        height: PropTypes.number,
        clickHandler: PropTypes.func,
        className: PropTypes.string | "standard-button",
        
        backgroundColor: Colors.button.main,
    };
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultText | "Button"
        };   
    }

    handleClick = () => {
        this.props.clickHandler(/* What ever you want to do*/);
    };

    render() {
        return (
            <button style={{
                ...defaultProps,
                ...this.props,
            }} onClick={this.handleClick}> 
                {this.props.children}
            </button>
        );
    }

}