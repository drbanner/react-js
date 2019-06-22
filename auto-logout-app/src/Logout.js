import React, {Fragment} from 'react';




class Logout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {logginStatus: true};
        this.events = [
            "load",
            "mousemove",
            "mousedown",
            "click",
            "scroll",
            "keypress"
        ];

        this.warn = this.warn.bind(this);
        this.logout = this.logout.bind(this);
        this.resetTimeout = this.resetTimeout.bind(this);

        for (var i in this.events) {
            window.addEventListener(this.events[i], this.resetTimeout);
        }

        this.setTimeout();
    }

    clearTimeout() {
        if (this.warnTimeout) clearTimeout(this.warnTimeout);

        if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
    }

    setTimeout() {
        this.warnTimeout = setTimeout(this.warn, 16 * 1000);

        this.logoutTimeout = setTimeout(this.logout, 30 * 1000);
    }

    resetTimeout() {
        this.clearTimeout();
        this.setTimeout();
    }

    warn() {
        console.log("You will be logged out automatically in 1 minute.");
    }

    logout() {
        // Send a logout request to the API
        window.location = "https://www.youtube.com";
        this.setState({logginStatus: false});
        // this.destroy(); // Cleanup
    }

    destroy() {
        this.clearTimeout();

        for (var i in this.events) {
            window.removeEventListener(this.events[i], this.resetTimeout);
        }
    }
    render() {
        return (
            <Fragment>
            </Fragment>
        );
    }

}

export default Logout;


