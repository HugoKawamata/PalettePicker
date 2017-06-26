import React from "react";

import ExportText from "./ExportText";
import Palette from "./Palette";
import Picker from "./Picker";
import Preview from "./Preview";

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            activeColor: {hex: "#14ff90"},
            palette: [],
            previewColors: {
                headerBG: {backgroundColor: "#ddd"},
                navbarBG: {backgroundColor: "#999"},
                heroTextBG: {backgroundColor: "#999"},
                heroImageBG: {backgroundColor: "#333"},
                colsBG: {backgroundColor: "#999"}
            }
        };
    }

    addToPalette(color, name) {
        var newPal = this.state.palette;
        newPal.push({color: color, name: name});
        this.setState({
            activeColor: this.state.activeColor,
            palette: newPal,
            previewColors: this.state.previewColors
        });
    }

    removeFromPalette(i) {
        var newPal = this.state.palette;
        newPal.splice(i, 1);
        this.setState({
            activeColor: this.state.activeColor,
            palette: newPal,
            previewColors: this.state.previewColors
        });
    }

    handleChangeComplete(color) {
        this.setState({activeColor: color, palette: this.state.palette, previewColors: this.state.previewColors});
    }

    grabColor(i) {
        const color = this.state.palette[i].color;
        this.setState({activeColor: color, palette: this.state.palette, previewColors: this.state.previewColors})
    }

    changePreviewColor(element) {
        var newPreviewCols = this.state.previewColors;
        switch (element) {
            case "header":
                newPreviewCols.headerBG = {backgroundColor: this.state.activeColor.hex};
                this.setState(
                    {
                        activeColor: this.state.activeColor,
                        palette: this.state.palette,
                        previewColors: newPreviewCols
                    }
                );
                break;
            case "navbar":
                newPreviewCols.navbarBG = {backgroundColor: this.state.activeColor.hex};
                this.setState(
                    {
                        activeColor: this.state.activeColor,
                        palette: this.state.palette,
                        previewColors: newPreviewCols
                    }
                );
                break;
            case "heroText":
                newPreviewCols.heroTextBG = {backgroundColor: this.state.activeColor.hex};
                this.setState(
                    {
                        activeColor: this.state.activeColor,
                        palette: this.state.palette,
                        previewColors: newPreviewCols
                    }
                );
                break;
            case "heroImage":
                newPreviewCols.heroImageBG = {backgroundColor: this.state.activeColor.hex};
                this.setState(
                    {
                        activeColor: this.state.activeColor,
                        palette: this.state.palette,
                        previewColors: newPreviewCols
                    }
                );
                break;
            case "cols":
                newPreviewCols.colBG = {backgroundColor: this.state.activeColor.hex};
                this.setState(
                    {
                        activeColor: this.state.activeColor,
                        palette: this.state.palette,
                        previewColors: newPreviewCols
                    }
                );
                break;
        }
    }

    render() {
        const colorArray = [];
        var spotColor;
        for (let i = 0; i < this.state.palette.length; i++) {
            spotColor = {backgroundColor: this.state.palette[i].color.hex};
            colorArray.push(
                <div key = {i.toString()} className = "palette-color">
                    <div className = "color">
                        <div className = "spot" style = {spotColor} onClick = {() => this.grabColor(i)}></div>
                        <div className = "colorName">
                            ${this.state.palette[i].name}: {this.state.palette[i].color.hex};
                        </div>
                    </div>
                    <div className = "remove-color-button" onClick = {() => this.removeFromPalette(i)}>
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
            );
        }
        return (
            <div className = "main">
                <Picker 
                    backgroundColor = {this.state.activeColor}
                    handleChangeComplete = {(color) => this.handleChangeComplete(color)}
                    addToPalette = {(color, name) => this.addToPalette(color, name)}
                />
                <Palette
                    colorArray = {colorArray}
                    palette = {this.state.palette}
                />
                <Preview 
                    activeColor = {this.state.activeColor}
                    previewColors = {this.state.previewColors}
                    changePreviewColor = {(element) => this.changePreviewColor(element)}
                />
            </div>
        );
    }
}