import React from 'react';

export default class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            palette: props.palette
        }
        this.generateScss = this.generateScss.bind(this);
    }

    generateScss() {
        console.log(this.state.palette[0].name);
        var textField = document.createElement('textarea')
        var scss = "";
        for (let i = 0; i < this.state.palette.length; i++) {
            var line = "$";
            line = line.concat(this.state.palette[i].name);
            line = line.concat(": ");
            line = line.concat(this.state.palette[i].color.hex);
            line = line.concat(";");
            
            scss = scss.concat(line);
        }
        textField.innerText = scss;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    render() {
        return(
            <div className = "palette">
                <h2>Your Palette</h2>
                {this.props.colorArray}
                <button className="button is-dark" onClick={this.generateScss}>Copy scss to clipboard</button>
            </div>
        );
    }
}