import React, { useState } from "react";
import './App.css';

const Form = () => (
    <div>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Phone:
                <input type="tel" name="phone" />
            </label>
            <label>
                Start time of booking:
                <input type="datetime-local" name="startTimeOfBooking" />
            </label>
            <label>
                End time of booking:
                <input type="datetime-local" name="endTimeOfBooking" />
            </label>
            <input type="submit" value="Send" />
        </form>
    </div>
)

class Rooms extends React.Component{

    handleOnClick(id) {
        return (
            <Form/>
        );
    }

    renderButton(id){
        let buttonText;
        switch (id) {
            case 1:
            case 2:
            case 3:
                buttonText = "Table " + id;
                break;
            case 4:
                buttonText = "Table " + id + ", minimum booking time - 1 hour";
                break;
            case 5:
                buttonText = "Working room for 5-6 persons. You can book only the whole room, minimum booking time - 1 day";
                break;
            case 6:
                buttonText = "Conference room. Projector is included with the room. 20 guests allowed. Minimum booking time - 2 hours, then - +hour";
                break;
            default:
                buttonText = "Table " + id;
        }
        return (
            <button className="table" onClick={this.handleOnClick.bind(false, id)} id={id} >
            {buttonText}
            </button>
        );
    }

    render(){
        return(
            <div>
                <div className="room1">
                    <h5>Room 1</h5>
                    <div className="room1-button-row1">
                        {this.renderButton(1)}
                        {this.renderButton(2)}
                    </div>
                    <div className="room1-button-row2">
                        {this.renderButton(3)}
                        {this.renderButton(4)}
                    </div>
                </div>
                <div className="room2">
                    <h5>Room 2</h5>
                    {this.renderButton(5)}
                </div>
                <div className="conferenceRoom">
                    <h5>Conference Room</h5>
                    {this.renderButton(6)}
                </div>
            </div>
        );
    }
}

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
