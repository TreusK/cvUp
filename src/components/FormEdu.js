import '../styles/FormEdu.css';

function FormEdu({setFunction, eduState, setEditing, editing, current}) {
    function handleSubmit(e) {   
        if(editing == false) {
            e.preventDefault();
            let tempObj = {};
            let formData = new FormData(e.target);
            for (let elem of formData.entries()) {
                tempObj[elem[0]] = elem[1];
            }
            setFunction([...eduState].concat([tempObj]))
            e.target.reset();
        } else {
            e.preventDefault();
            let tempObj = {};
            let tempArr = [...eduState];
            let formData = new FormData(e.target);
            for (let elem of formData.entries()) {
                tempObj[elem[0]] = elem[1];
            }
            tempArr.splice(current, 1, tempObj);
            setFunction(tempArr);

            e.target.reset();
            setEditing(false);
        }
    }

    //Create an obj to fill the form with values (if editing) or empty (if not editing)
    let editingObj;
    if(editing) {
        editingObj = {...eduState[current]};
    } else {
        editingObj = {
            schoolName: '',
            title: '',
        }
    };

    return(
        <div id='formContainer'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div id='eduForm'>
                    <label htmlFor='schoolName'>School Name</label>
                    <input type='text' id='schoolName' name='schoolName' defaultValue={editingObj.schoolName}/>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' name='title' defaultValue={editingObj.title}/>

                    <button id='submitBtn' className='btn'>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default FormEdu;