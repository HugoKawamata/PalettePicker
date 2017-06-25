import React from 'react';
import { SketchPicker } from 'react-color';

export default class Picker extends React.Component {

    render() {
        var style = {backgroundColor: this.props.backgroundColor.hex};
        return (
            <div className = "picker" style = {style}>
                <SketchPicker
                    color = {this.props.backgroundColor}
                    onChangeComplete = {(color) => this.props.handleChangeComplete(color)}
                />
            </div>
        );
    }
}