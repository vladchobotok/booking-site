import React from "react";
import * as roomsConstants from "../dictionary/roomsConstants";
import firebase from "firebase";
import {RoomBookingForm} from "./RoomBookingForm";

export class Rooms extends React.PureComponent {
    state = {
        selectedTable: 0,
        name: '',
        phone: '',
        startTimeOfBooking: '',
        endTimeOfBooking: '',
    }

    handleChange = ({target: {value, id}}) => {
        console.log('target', id, value);
        this.setState({
            [id]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        try {
            const {selectedTable, name, phone, startTimeOfBooking, endTimeOfBooking} = this.state;
            if (!startTimeOfBooking) {
                alert('need to select start')
                return false
            }
            firebase.database().ref('booking/table_' + selectedTable + '/' + startTimeOfBooking).push({
                name,
                phone,
                startTimeOfBooking,
                endTimeOfBooking
            })
        } catch (e) {
            console.error(e)
        }
        return false
    }

    handleClick = (id) => {
        if (id === this.state.selectedTable) return false

        this.setState({
            selectedTable: id,
            name: '',
            phone: '',
            startTimeOfBooking: '',
            endTimeOfBooking: '',
        });
    }

    MakeButton = (id) => {
        return (
            <div>
                <input type="button" value={roomsConstants.DICT_ROOMS[id - 1].title}
                       onClick={() => this.handleClick(id)}/>
                <RoomBookingForm open={id === this.state.selectedTable}
                                 handleChange={this.handleChange} handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }

    render() {
        console.log(this.state);
        return (
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