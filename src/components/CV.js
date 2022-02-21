import '../styles/CV.css';
import BtnEdit from './BtnEdit';
import BtnDelete from './BtnDelete';

function CV({formsObj}) {
    return(
        <div id='cv'>
            <div id='topInfo'>
                <div id='generalContainer' className='block'>
                    <p id='phone'>{formsObj.general.phone}</p>
                    <p id='birthday'>{formsObj.general.birthday}</p>
                    <p id='email'>{formsObj.general.email}</p>
                    
                    <h3>{formsObj.general.firstName.toUpperCase() + ' ' + formsObj.general.lastName.toUpperCase()}</h3>
                    <BtnEdit color='w'/>
                </div>
            </div>
            <div id='bottomInfo'>
                <div id='summaryBlock' className='block'>
                    <h4>Summary</h4>
                    <p>{formsObj.summary}</p>
                    <BtnEdit />
                </div>
                 
                <h4 id='eduH4'>Education</h4>
                    {formsObj.edu.eduArr.map(elem => 
                        <div className='educationBlock block'>
                            <p>{elem.schoolName}</p>
                            <p>--{elem.title}</p>
                            <div className='btnsContainer'>
                                <BtnEdit />
                                <BtnDelete />
                            </div>
                            
                        </div>)}

                <h4 id='expH4'>Experience</h4>
                    {formsObj.experience.expArr.map(elem => 
                        <div className='experienceBlock block'>
                            <p>{elem.company}</p>
                            <p>--{elem.jobTitle}</p>
                            <p>--{elem.jobDescription}</p>
                            <div className='btnsContainer'>
                                <BtnEdit />
                                <BtnDelete />
                            </div>
                        </div>)}
                
                <div id='skillsBlock' className='block'>
                    <h4>Extra Skills</h4>
                    <ul>
                        {formsObj.general.skills.map(elem => 
                            <li>{elem}</li>)}
                    </ul>
                    <BtnEdit />
                </div>
                
            </div>
        </div>
    )
}

export default CV;