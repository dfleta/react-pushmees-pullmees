import Meeseeks from './Meeseeks'

function Reality(props) {

    const meeseeks = props.value;
    
    return (
        <div className='Reality'>
            <header className="Component-header">
                { meeseeks.map((meeseek) => <Meeseeks key={meeseek._id} value={meeseek} />)}    
            </header>
        </div>
    );
  }

export default Reality;