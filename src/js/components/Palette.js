import React from 'react';

export default class Palette extends React.Component {
    constructor() {
        super();
    }

    

    render() {
        return(
            <div className = "palette">
                <h2>Your Palette</h2>
                {this.props.colorArray}
            </div>
        );
    }
}