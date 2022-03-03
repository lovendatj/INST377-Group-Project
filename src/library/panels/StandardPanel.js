import React from "react";
import PropTypes from "prop-types";
import { _colors as Colors } from '../_colors'

import '../styles/panels.css'

export default class StandardPanel extends React.Component {
    static defaultProps = {
        width: PropTypes.number,
        height: PropTypes.number,
        
        backgroundColor: Colors.primary.main,
    };
    constructor(props) {
        super(props);
        this.state = {
            className = props.className ? props.className : "standard-panel"
        };   
    }

    render() {
        return (
            <div style={{
                ...defaultProps,
                ...this.props
            }}>
                {this.props.children}
            </div>
        );
    }

}