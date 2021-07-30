import React from "react";

export class RoomBookingForm extends React.PureComponent{
    render() {
        if (!this.props.open) {
            return null
        }
        const {handleChange, handleSubmit} = this.props
            return (
                <div>
                    <form className="forms" onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                id="name"
                                onChange={handleChange}/>
                        </label>
                        <label>
                            Phone:
                            <input
                                type="tel"
                                id="phone"
                                onChange={handleChange}/>
                        </label>
                        <label>
                            Start time of booking:
                            <input
                                type="datetime-local"
                                id="startTimeOfBooking"
                                onChange={handleChange}/>
                        </label>
                        <label>
                            End time of booking:
                            <input
                                type="datetime-local"
                                id="endTimeOfBooking"
                                onChange={handleChange}/>
                        </label>
                        <input
                            type="submit"/>
                    </form>
                </div>
            );

    }
}