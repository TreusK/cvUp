import '../styles/FormGen.css';

function FormGen({setFunction, genState, editing, setEditing}) {
    function handleSubmit(e) {
        e.preventDefault();
        let tempObj = {};
        let formData = new FormData(e.target);
        for (let elem of formData.entries()) {
            tempObj[elem[0]] = elem[1];
        }
        tempObj.skills = tempObj.skills.split(', ');
        setFunction(tempObj);
        setEditing(false);
    }

    //Create an obj to fill the form with values (if editing) or empty (if not editing)
    let editingObj;
    if(editing) {
        editingObj = {...genState};
    } else {
        editingObj = {
            firstName: '',
            lastName: '',
            birthday: '',
            email: '',
            phone: '',
            skills: [],
        }
    }

    return(
        <div id='formContainer'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div id='generalForm'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' name='firstName' defaultValue={editingObj.firstName} required/>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' name='lastName' defaultValue={editingObj.lastName} required/>

                    <label htmlFor='birthday'>Birthday</label>
                    <input type='date' id='birthday' name='birthday' defaultValue={editingObj.birthday}/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' defaultValue={editingObj.email} required/>

                    <label htmlFor='phone'>Phone</label>
                    <input type='tel' id='phone' name='phone' defaultValue={editingObj.phone} required/>

                    <label htmlFor='skills'>Name any extra skills, separated by a comma</label>
                    <textarea id='skills' name='skills' defaultValue={editingObj.skills.join(', ')}></textarea>

                    <button id='submitBtn' className='btn'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default FormGen;