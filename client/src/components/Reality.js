import Meeseeks from './Meeseeks'

function Reality(props) {

    const meeseeks = props.value;
    
    return (
        <div className='Reality'>
            { meeseeks.map((meeseek) => <Meeseeks key={meeseek._id} value={meeseek} />)}    
        </div>
    );
  }

export default Reality;