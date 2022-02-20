

function FormSummary({setFunction}) {
    function handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let summary = formData.get('summary');
        setFunction(summary);
    }
    return(
        <div id='formContainer' onSubmit={handleSubmit}>
            <form>
                <label htmlFor='summary'>Write a summary of yourself</label>
                <textarea id='summary' name='summary'></textarea>

                <button id='submitBtn' className='btn'>SUBMIT</button>
            </form>
        </div>
    )
}

export default FormSummary;