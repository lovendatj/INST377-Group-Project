import React, { useState } from "react";
import PropTypes from "prop-types";
import { _colors as Colors } from '../_colors'

import '../styles/input.css'

export default class IntputField extends React.Component{
    static defaultProps = {
        width: PropTypes.number,
        height: PropTypes.number,
        className = PropTypes.string | "standard-input-field",

        backgroundColor: Colors.primary.main,
    }
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultText | "Input Field"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        /* Trigger additional stuff here */
        event.preventDefault();
    }

    return (
        <input style={{
            ...defaultProps,
            ...this.props,
        }} onChange={this.handleChange} onSubmit={this.handleSubmit}>
            {this.props.children}
        </input> 
    );
} 