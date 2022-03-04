import '../styles/BtnDelete.css';
import iconDelete from '../imgs/delete.png';

function BtnDelete({index, stateArr, setFunction}) {
    function handleClick(e) {
        let tempArr = [...stateArr];
        tempArr.splice(index, 1);
        setFunction(tempArr);
    }

    return(
        <div className='btnDelete' onClick={handleClick}>
            <img src={iconDelete}></img>
        </div>
    )
}

export default BtnDelete;