import React from "react";

export class SignInForm extends React.PureComponent{
    render() {
        const {handleChange, createAccount} = this.props
        return (
            <div>
                <form className="forms" onSubmit={createAccount}>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </div>

        );

    }
}
