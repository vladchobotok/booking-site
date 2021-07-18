import React from "react";
import * as roomsConstants from "../dictionary/roomsConstants";
import firebase from "firebase";
import {RoomBookingForm} from "./RoomBookingForm";

export class Rooms extends React.PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            tableFormsState: Array(6).fill(false),
            selectedTable: 0,
            name: '',
            phone: '',
            startTimeOfBooking: '',
            endTimeOfBooking: '',
        };
    }

    handleChange = ({target: {value, id}}) => {
        console.log('target', id, value);
        this.setState({
            [id]: value,
        })
    }

    handleSubmit = () => {
        const {name, phone, startTimeOfBooking, endTimeOfBooking} = this.state;
        const db = firebase.database()
        db.ref(name).push(phone);
        db.ref(name).push(startTimeOfBooking, endTimeOfBooking);
    }

    handleClick = (id) => {
        this.setState({selectedTable: id});
        let buttons = this.state.tableFormsState.slice();
        buttons[id-1] = !buttons[id-1];
        this.setState({tableFormsState: buttons});
    }

    MakeButton = (id) => {
        return (
            <div>
                <input type="button" value={roomsConstants.DICT_ROOMS[id-1].title} onClick={() => this.handleClick(id)}/>
                <RoomBookingForm open={this.state.tableFormsState[id-1]}
                    handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <div className="room1">
                    <h5>Room 1</h5>
                    <div className="room1-button-row">
                        {this.MakeButton(1)}
                        {this.MakeButton(2)}
                    </div>
                    <div className="room1-button-row">
                        {this.MakeButton(3)}
                        {this.MakeButton(4)}
                    </div>
                </div>
                <div className="room2">
                    <h5>Room 2</h5>
                    {this.MakeButton(5)}
                </div>
                <div className="conferenceRoom">
                    <h5>Conference Room</h5>
                    {this.MakeButton(6)}
                </div>
            </div>
        );
    }
}