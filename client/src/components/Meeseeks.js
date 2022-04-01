import React from 'react';
import mr_meeseeks from '../images/mr_meeseeks.png'

function Meeseeks(clon) {

    return (
        <div className="Meeseeks">
            <header className="Meeseeks-header">
                <img src={mr_meeseeks} className="App-logo" alt="mr meeseeks" />
                <p>{!clon.value ? "OKNOTOK" : clon.value.messageOnCreate}</p>
            </header>
        </div>
    );
}

export default Meeseeks;