import '../styles/BtnDelete.css';
import iconDelete from '../imgs/delete.png';

function BtnDelete() {
    function clock(e) {
        console.log(e.target);
    }

    return(
        <div className='btnDelete' onClick={clock}>
            <img src={iconDelete}></img>
        </div>
    )
}

export default BtnDelete;