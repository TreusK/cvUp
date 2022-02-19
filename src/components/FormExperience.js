import '../styles/FormExperience.css';

function FormExperience({setFunction, expState}) {
    function handleSubmit(e) {   
        e.preventDefault();
        let tempObj = {};
        let formData = new FormData(e.target);
        for (let elem of formData.entries()) {
            tempObj[elem[0]] = elem[1];
        }
        setFunction({
            ...expState,
            expArr: expState.expArr.concat(tempObj)
        });
        e.target.reset();
    }

    return(
        <div id='formContainer'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div id='expForm'>
                    <label htmlFor='companyName'>Company Name</label>
                    <input type='text' id='companyName' name='companyName'/>
                    <label htmlFor='jobTitle'>Job Title</label>
                    <input type='text' id='jobTitle' name='jobTitle'/>
                    <label htmlFor='jobDescription'>Job Description</label>
                    <input type='text' id='jobDescription' name='jobDescription'/>

                    <button id='submitBtn' className='btn'>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default FormExperience;