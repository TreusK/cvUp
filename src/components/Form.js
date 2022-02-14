import '../styles/Form.css';

function Form() {
    return(
        <div id='formContainer'>
            <form>
                <div id='generalForm'>
                    <label htmlFor='firstName'></label>
                    <input type='text' id='firstName'/>
                    <label htmlFor='lastName'></label>
                    <input type='text' id='lastName'/>
                    <div className='btn'>SUBMIT</div>
                </div>
            </form>
        </div>
    )
}

export default Form;