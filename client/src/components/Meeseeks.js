import React from 'react';
import mr_meeseeks from '../images/mr_meeseeks.png'

function Meeseeks(clon) {

    console.log(clon.value);

    let {messageOnCreate, messageOnRequest, _id} = clon.value;

    console.log(messageOnCreate);

    return (
        <div className="Meeseeks">
            <header className="Meeseeks-header">
                <img src={mr_meeseeks} className="App-logo" alt="mr meeseeks" />
                <p>{!messageOnCreate ? "OKNOTOK" : messageOnCreate}</p>
            </header>
        </div>
    );
}

export default Meeseeks;