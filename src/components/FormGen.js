import '../styles/FormGen.css';

function FormGen({setFunction}) {
    function handleSubmit(e) {
        e.preventDefault();
        let tempObj = {};
        let formData = new FormData(e.target);
        for (let elem of formData.entries()) {
            tempObj[elem[0]] = elem[1];
        }
        setFunction(tempObj)
    }
    return(
        <div id='formContainer'>
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div id='generalForm'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' name='firstName'/>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' name='lastName'/>

                    <label htmlFor='age'>Age</label>
                    <input type='number' id='age' name='age'/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email'/>

                    <label htmlFor='phone'>Phone</label>
                    <input type='tel' id='phone' name='phone'/>

                    <button id='submitBtn' className='btn'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default FormGen;