import React from "react";

export default class Preview extends React.Component {
    render() {
        return (
            <div className="preview-container-container">
                <div className="preview-title">
                    <h2>Preview Colors</h2>
                    <h4>Click elements of the mini-website to color them with the active color. You can click the dots in your palette to change the active color.</h4>
                </div>
                <div className="preview-container">
                    <div className="preview">
                        <div className="preview-header" style={this.props.previewColors.headerBG} onClick={() => this.props.changePreviewColor("header")}>
                            Logo | Site Name
                        </div>
                        <div className="preview-navbar" style={this.props.previewColors.navbarBG} onClick={() => this.props.changePreviewColor("navbar")}>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Gallery</li>
                            </ul>
                        </div>
                        <div className="preview-body" >
                            <div className="preview-hero">
                                <div className="preview-hero-text" style={this.props.previewColors.heroTextBG} onClick={() => this.props.changePreviewColor("heroText")}>
                                    <h3>Title.</h3>
                                    Lorem ipsum dolor sit amet.
                                </div>
                                <div className="preview-hero-image" style={this.props.previewColors.heroImageBG} onClick={() => this.props.changePreviewColor("heroImage")}></div>
                            </div>
                            <div className="preview-cols" onClick={() => this.props.changePreviewColor("cols")}>
                                <div className="preview-col-1 preview-col" style={this.props.previewColors.colBG}>
                                </div>
                                <div className="preview-col-2 preview-col" style={this.props.previewColors.colBG}>
                                </div>
                                <div className="preview-col-3 preview-col" style={this.props.previewColors.colBG}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}