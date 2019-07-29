import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from '@fortawesome/free-solid-svg-icons';


class SplashPage extends Component {
    render() {
        return (
            <div className="splash-container">
                <div className="splash-text">
                    <div className="my-name">Fuzzy Jones</div>
                    <div className="job-position">Web Developer</div>
                    {/* <div className="enter">
                        <span className="enter-icon"><FontAwesomeIcon icon={faWalking} /></span>
                        <span className="enter-text">  ENTER</span>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default SplashPage;