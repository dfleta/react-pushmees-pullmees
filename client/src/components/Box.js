import { useEffect, useState } from 'react';
import mees_box from '../images/mees_box.png';
import '../App.css';
import Reality from './Reality'


function Box(boxOwner) {

    const [box, setBox] = useState(null);
    const [meeseeks, setMeeseeks] = useState([]);

    useEffect(() => {
        fetch(`/box/${boxOwner.value}`)
            .then((res) => (res.json()))
            .then((data) => setBox(data))
            .catch(() => console.log("fetch box NOTOK"))
    }, [])

    function createMeeseeks() {
        fetch("/box/pressButton")
            .then((res) => res.json())
            .then((mr_mees) => setMeeseeks([...meeseeks, mr_mees]))
            .catch(() => console.log("pressButton NOTOK"))
    }

    return (
        <div className="Box">
            <header className="App-header">
                <img src={mees_box} className="App-logo" alt="mr meeseeks box" />
                <p>{!box ? "OKNOTOK" : box.name}</p>
                <button onClick={createMeeseeks} id="pressButton">Press Button</button>
                <Reality value={meeseeks} />
            </header>
        </div>
    );
}

export default Box;