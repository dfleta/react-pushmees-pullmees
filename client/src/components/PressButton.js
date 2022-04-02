import { useState } from 'react';
import Meeseeks from './Meeseeks';

function PressButton() {

    const [meeseeks, setMeeseeks] = useState([]);
    
    function createMeeseeks() {
        fetch("/box/pressButton")
            .then((res) => res.json())
            .then((mr_mees) => setMeeseeks([...meeseeks, mr_mees]))
            .catch(() => console.log("pressButton NOTOK"))
    }

    return (
        <div>
            <button className="PressButton" onClick={createMeeseeks}>
                Press Button
                    {/* <Meeseeks value={data}/> */}
                    {/* <p>{!data ? "OKNOTOK" : data.messageOnCreate}</p>*/}
            </button>
            { !meeseeks ? "reality" : meeseeks.map((item) => (<Meeseeks value={item} key={item._id} /> ) ) }
        </div> 
    );
}

export default PressButton;