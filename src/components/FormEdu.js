import '../styles/FormEdu.css';

function FormEdu({setFunction, eduState}) {
    function handleSubmit(e) {   
        e.preventDefault();
        let tempObj = {};
        let formData = new FormData(e.target);
        for (let elem of formData.entries()) {
            tempObj[elem[0]] = elem[1];
        }
        setFunction({
            ...eduState,
            eduArr: eduState.eduArr.concat(tempObj)
        });
        e.target.reset();
    }

    return(
        <div id='formContainer'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div id='eduForm'>
                    <label htmlFor='schoolName'>School Name</label>
                    <input type='text' id='schoolName' name='schoolName'/>
                    <label htmlFor='titleAquired'>Title</label>
                    <input type='text' id='titleAquired' name='titleAquired'/>

                    <button id='submitBtn' className='btn'>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default FormEdu;