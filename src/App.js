import React from "react";
import './App.css';

import {Rooms} from "./elements/Rooms";

class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Rooms/>
            </div>
        );
    }
}

export default App;