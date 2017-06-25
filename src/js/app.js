import React from "react";
import ReactDOM from "react-dom";

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
    render() {
        return (
            <div id="app-container">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);