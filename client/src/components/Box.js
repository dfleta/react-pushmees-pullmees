import React from 'react';

function Box(boxOwner) {

    // hook
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/box/${boxOwner.value}`)
            .then((res) => res.json())
            .then((box) => setData(box)) // pasar la propiedad o el objeto
    }, [])

    return (
        <div className="Box">
            <header className="Box-header">
                <p>{!data ? "OKNOTOK" : data.name}</p>
            </header>
        </div>
    );
}

export default Box;