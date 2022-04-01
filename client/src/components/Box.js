import React from 'react';
import mees_box from '../images/mees_box.png';
import '../App.css';


function Box(boxOwner) {

    // hook
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/box/${boxOwner.value}`)
            .then((res) => res.json())
            .then((box) => setData(box)) // pasar la propiedad o el objeto
            .catch(() => console.log("fetch box NOTOK"))
    }, [])

    return (
        <div className="Box">
            <header className="Box-header">
                <img src={mees_box} className="App-logo" alt="mr meeseeks box" />
                <p>{!data ? "OKNOTOK" : data.name}</p>
            </header>
        </div>
    );
}

export default Box;