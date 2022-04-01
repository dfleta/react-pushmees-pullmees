import React from 'react';
import mees_box from '../images/mees_box.png';
import '../App.css';


function Box(boxOwner) {

    // hook
    const [box, setBox] = React.useState(null);

    React.useEffect(() => {
        fetch(`/box/${boxOwner.value}`)
            .then((res) => setBox(res.json()))
            .catch(() => console.log("fetch box NOTOK"))
    }, [])

    return (
        <div className="Box">
            <header className="Box-header">
                <img src={mees_box} className="App-logo" alt="mr meeseeks box" />
                <p>{!box ? "OKNOTOK" : box.name}</p>
            </header>
        </div>
    );
}

export default Box;