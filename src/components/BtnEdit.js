import '../styles/BtnEdit.css';
import iconEdit from '../imgs/edit.png';
import iconEditWhite from '../imgs/editWhite.png';

function BtnEdit({color, goToTab, editTab, index, setCurrent}) {

    function handleClick(e) {
        editTab(goToTab);
        setCurrent(index);
    }

    let blackOrWhite;
    (color == 'w') ? blackOrWhite=iconEditWhite : blackOrWhite=iconEdit;

    return(
        <div className='btnEdit' onClick={handleClick}>
            <img src={blackOrWhite}></img>
        </div>
    )
}

export default BtnEdit;