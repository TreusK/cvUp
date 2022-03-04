import '../styles/FormExperience.css';

function FormExperience({setFunction, expState, setEditing, editing, current}) {
    function handleSubmit(e) {   
        if(editing == false) {
            e.preventDefault();
            let tempObj = {};
            let formData = new FormData(e.target);
            for (let elem of formData.entries()) {
                tempObj[elem[0]] = elem[1];
            }
            setFunction([...expState].concat([tempObj]))
            e.target.reset();
        } else {
            e.preventDefault();
            let tempObj = {};
            let tempArr = [...expState];
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
        editingObj = {...expState[current]};
    } else {
        editingObj = {
            company: '',
            jobTitle: '',
            jobDescription: '',
        }
    };

    return(
        <div id='formContainer'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div id='expForm'>
                    <label htmlFor='company'>Company Name</label>
                    <input type='text' id='company' name='company' defaultValue={editingObj.company}/>
                    <label htmlFor='jobTitle'>Job Title</label>
                    <input type='text' id='jobTitle' name='jobTitle' defaultValue={editingObj.jobTitle}/>
                    <label htmlFor='jobDescription'>Job Description</label>
                    <input type='text' id='jobDescription' name='jobDescription' defaultValue={editingObj.jobDescription}/>

                    <button id='submitBtn' className='btn'>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default FormExperience;