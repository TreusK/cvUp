

function FormSummary({setFunction, summState, editing, setEditing}) {
    function handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let summary = formData.get('summary');
        setFunction(summary);
        setEditing(false);
    }

    //Create an string to fill the form with values (if editing) or empty (if not editing)
    let editingStr;
    if(editing) {
        editingStr = summState;
    } else {
        editingStr = '';
    }

    return(
        <div id='formContainer' onSubmit={handleSubmit}>
            <form>
                <label htmlFor='summary'>Write a summary of yourself</label>
                <textarea id='summary' name='summary' defaultValue={editingStr}></textarea>

                <button id='submitBtn' className='btn'>SUBMIT</button>
            </form>
        </div>
    )
}

export default FormSummary;