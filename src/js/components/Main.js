import React from "react";

import Picker from "./Picker";

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            activeColor: {hex: "#14ff90"}
        };
    }

    handleChangeComplete(color) {
        this.setState({activeColor: color});
    }

    render() {
        return (
            <div>
                <Picker 
                    backgroundColor = {this.state.activeColor}
                    handleChangeComplete = {(color) => this.handleChangeComplete(color)}
                />
            </div>
        );
    }
}