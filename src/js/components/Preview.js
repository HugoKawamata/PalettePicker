import React from "react";

export default class Preview extends React.Component {
    render() {
        return (
            <div className="preview-container">
                <div className="preview">
                    <div className="preview-header">
                        Logo | Site Name
                    </div>
                    <div className="preview-navbar">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                    <div className="preview-body">
                        <div className="preview-hero">
                            <div className="preview-hero-text">
                                <h3>Title.</h3>
                                Lorem ipsum dolor sit amet.
                            </div>
                            <div className="preview-hero-image"></div>
                        </div>
                        <div className="preview-cols">
                            <div className="preview-col-1 preview-col">
                            </div>
                            <div className="preview-col-2 preview-col">
                            </div>
                            <div className="preview-col-3 preview-col">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}