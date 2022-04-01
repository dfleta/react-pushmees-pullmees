import React from 'react';
import Meeseeks from './Meeseeks';

function PressButton() {

    // hook
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/box//pressButton")
            .then((res) => res.json())
            .then((mr_mees) => setData(mr_mees)) // pasar la propiedad o el objeto
    }, [])

    return (
        <div className="PressButton">
            <header className="Press-header">
                <Meeseeks value={data}/>
                {/* <p>{!data ? "OKNOTOK" : data.messageOnCreate}</p>*/}
            </header>
        </div>
    );
}

export default PressButton;