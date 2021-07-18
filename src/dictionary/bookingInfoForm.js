export const Form = ({open, handleChange}) => {
    if(open)
    {
        return (
            <div>
                <form className="forms">
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
                        type="submit"
                        value="Send"/>
                </form>
            </div>
        );
    }
    return null;
}