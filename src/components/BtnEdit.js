import '../styles/BtnEdit.css';
import iconEdit from '../imgs/edit.png';
import iconEditWhite from '../imgs/editWhite.png';

function BtnEdit({color}) {
    let blackOrWhite;
    (color == 'w') ? blackOrWhite=iconEditWhite : blackOrWhite=iconEdit;
    return(
        <div className='btnEdit'>
            <img src={blackOrWhite}></img>
        </div>
    )
}

export default BtnEdit;