import React, { useState } from 'react';
import mr_meeseeks from '../images/mr_meeseeks.png'

function Meeseeks(clon) {

    const [deleted, setDeleted] = useState(false);  

    console.log(clon.value);

    let {messageOnCreate, messageOnRequest, _id} = clon.value;

    console.log(messageOnCreate);

    function explode() {
        fetch(`/reality/explode/${_id}`)
            .then((res) => (res.json()))
            .then(console.log(_id + " : " + messageOnRequest[0]))
            .then(setDeleted(true))
            .catch(() => console.log("fetch meeseek NOTOK"))
    }

    return (
        <div className="Meeseeks" onClick={explode}>
            { deleted ? <div></div> :
                <header className="Meeseeks-header">
                    <img src={mr_meeseeks} className="App-logo" alt="mr meeseeks" />
                    <p>{!messageOnCreate ? "OKNOTOK" : messageOnCreate}</p>
                </header>
            }
        </div>
    );
}

export default Meeseeks;