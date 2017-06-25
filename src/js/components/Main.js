import React from "react";

import Picker from "./Picker";
import Palette from "./Palette";

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            activeColor: {hex: "#14ff90"},
            palette: []
        };
    }

    addToPalette(color, name) {
        var newPal = this.state.palette;
        newPal.push({color: color, name: name});
        this.setState({
            activeColor: this.state.activeColor,
            palette: newPal
        });
    }

    removeFromPalette(i) {
        var newPal = this.state.palette;
        newPal.splice(i, 1);
        this.setState({
            activeColor: this.state.activeColor,
            palette: newPal
        })
    }

    handleChangeComplete(color) {
        this.setState({activeColor: color, palette: this.state.palette});
    }


    render() {
        const colorArray = [];
        var spotColor;
        for (let i = 0; i < this.state.palette.length; i++) {
            spotColor = {backgroundColor: this.state.palette[i].color.hex};
            colorArray.push(
                <div key = {i.toString()} className = "palette-color">
                    <div className = "spot" style = {spotColor}></div>
                    <div className = "colorName">
                        {this.state.palette[i].color.hex}: {this.state.palette[i].name}
                    </div>
                    <div className = "remove-color-button" onClick = {() => this.removeFromPalette(i)}></div>
                </div>
            );
        }
        return (
            <div>
                <Picker 
                    backgroundColor = {this.state.activeColor}
                    handleChangeComplete = {(color) => this.handleChangeComplete(color)}
                    addToPalette = {(color, name) => this.addToPalette(color, name)}
                />
                <Palette
                    colorArray = {colorArray}
                />
            </div>
        );
    }
}