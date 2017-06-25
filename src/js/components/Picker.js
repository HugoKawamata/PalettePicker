import React from 'react';
import { SketchPicker } from 'react-color';

export default class Picker extends React.Component {
    constructor() {
        super();
        this.state = {
            colorName: ""
        }
    }

    updateColorName(name) {
        this.setState({colorName: name.target.value});
    }

    render() {
        var style = {backgroundColor: this.props.backgroundColor.hex};
        return (
            <div className = "picker-container" style = {style}>
                <div className = "picker">
                    <SketchPicker
                        color = {this.props.backgroundColor}
                        onChangeComplete = {(color) => this.props.handleChangeComplete(color)}
                    />
                    <div className = "picker-options">
                        <input type = "text" onChange = {(name) => this.updateColorName(name)}/>
                        <button onClick = {
                            (name, color) => this.props.addToPalette(
                                this.props.backgroundColor,
                                this.state.colorName
                            )}
                        >Add To Palette</button>
                    </div>
                </div>
            </div>
        );
    }
}