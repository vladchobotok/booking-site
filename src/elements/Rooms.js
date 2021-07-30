import React from "react";
import * as roomsConstants from "../dictionary/roomsConstants";
import firebase from "firebase";
import {RoomBookingForm} from "./RoomBookingForm";
import {SignInForm} from "./SignInForm";

export class Rooms extends React.PureComponent {
    state = {
        selectedTable: 0,
        email: '',
        password:'',
        isAccountCreated: false,
        name: '',
        phone: '',
        startTimeOfBooking: '',
        endTimeOfBooking: '',
        isTimeTaken: false,
    }

    handleChange = ({target: {value, id}}) => {
        console.log('target', id, value);
        this.setState({
            [id]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        try {
            const {selectedTable, name, phone, startTimeOfBooking, endTimeOfBooking, isTimeTaken} = this.state;

            if (!startTimeOfBooking) {
                alert('You need to select start time of booking!')
                return false
            }

            console.log("Is this time already taken?: " + isTimeTaken);

            firebase.database().ref().child('booking/table_' + selectedTable + "/").once("child_added").then( function(snapshot) {
                snapshot.forEach(function(data) {
                    if(data.child(startTimeOfBooking).exists()){
                        this.setState({isTimeTaken: true});
                        alert("lala");
                    }
                    if(data.val().startTimeOfBooking <= startTimeOfBooking && data.val().endTimeOfBooking > startTimeOfBooking ){
                        this.setState({isTimeTaken: true});
                        alert("yayaya");
                    }
                }.bind(this));
            }.bind(this));

            console.log("Is this time already taken?: " + isTimeTaken);

            if(isTimeTaken){
                alert('This time is already taken!')
                return false;
            }
            else{
                firebase.database().ref('booking/table_' + selectedTable + '/' + startTimeOfBooking).push({
                    name,
                    phone,
                    startTimeOfBooking,
                    endTimeOfBooking
                })

                let ref = firebase.database().ref('booking/table_' + selectedTable + '/' + startTimeOfBooking);
                ref.once("value").then(function(snapshot) {
                    console.log("Number of children in db: " + snapshot.numChildren());
                });
            }

        } catch (e) {
            console.error(e)
        } finally {
            this.setState({isTimeTaken: false})
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

    createAccount = (event) => {

        event.preventDefault()
        try {
            const {email, password} = this.state;
            if (!password) {
                alert('You need to make a password!')
                return false
            }
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    this.setState({isAccountCreated: true});
                })
                .catch((error) => {
                    console.log(error)
                });

            // so as not to forget
            // make form with buttons "Create New Account", "Sign in"
            // fetchSignInMethodsForEmail();
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    let user = userCredential.user;
                    this.setState({isAccountCreated: true});
                })
                .catch((error) => {
                    console.log(error)
                });

        } catch (e) {
            console.error(e)
        }
        return false
    }

    render() {
        console.log(this.state);
        const {isAccountCreated, email} = this.state;
        return (
            <div>
                {
                    isAccountCreated ?
                        (
                            <div>
                                <div className="welcome">
                                    <h4>Hello, {email.split('@')[0]}</h4>
                                </div>
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
                        )
                        :
                        (
                            <SignInForm handleChange={this.handleChange} createAccount={this.createAccount}/>
                        )
                }
            </div>
        );
    }
}