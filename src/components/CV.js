import '../styles/CV.css';

function CV({formsObj}) {
    return(
        <div id='cv'>
            <div id='topInfo'>
                <p id='phone'>{formsObj.general.phone}</p>
                <p id='birthday'>{formsObj.general.birthday}</p>
                <p id='email'>{formsObj.general.email}</p>
                
                <h3>{formsObj.general.firstName.toUpperCase() + ' ' + formsObj.general.lastName.toUpperCase()}</h3>
            </div>
            <div id='bottomInfo'>
                <h4>Summary</h4>
                <p>loremloremloremmmmmmmmmmmmmmmmmmmmmmm loremloremloremmmmmmmmmmmmmmmmmmmmmmm loremloremloremmmmmmmmmmmmmmmmmmmmmmm loremloremloremmmmmmmmmmmmmmmmmmmmmmm</p>
                
                <h4 id='eduH4'>Education</h4>
                    {formsObj.edu.eduArr.map(elem => 
                        <div className='educationBlock'>
                            <p>{elem.schoolName}</p>
                            <p>--{elem.title}</p>
                        </div>)}

                <h4 id='expH4'>Experience</h4>
                    {formsObj.experience.expArr.map(elem => 
                        <div className='experienceBlock'>
                            <p>{elem.company}</p>
                            <p>--{elem.jobTitle}</p>
                            <p>--{elem.jobDescription}</p>
                        </div>)}
                
                <h4>Extra Skills</h4>
                <ul>
                    {formsObj.skills.map(elem => <li>{elem}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default CV;