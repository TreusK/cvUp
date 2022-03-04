import '../styles/CV.css';
import BtnEdit from './BtnEdit';
import BtnDelete from './BtnDelete';

function CV({formsObj, setsObj, editTab, current, setCurrent}) {
    return(
        <div id='cv'>
            <div id='topInfo'>
                <div id='generalContainer' className='block'>
                    <p id='phone'>{formsObj.general.phone}</p>
                    <p id='birthday'>{formsObj.general.birthday}</p>
                    <p id='email'>{formsObj.general.email}</p>
                    
                    <h3>{formsObj.general.firstName.toUpperCase() + ' ' + formsObj.general.lastName.toUpperCase()}</h3>
                    <BtnEdit color='w' goToTab={'tabGeneral'} editTab={editTab} setCurrent={setCurrent} index={99}/>
                </div>
            </div>
            <div id='bottomInfo'>
                <div id='summaryBlock' className='block'>
                    <h4>Summary</h4>
                    <p>{formsObj.summary}</p>
                    <BtnEdit goToTab={'tabSummary'} editTab={editTab} setCurrent={setCurrent} index={99}/>
                </div>
                 
                <h4 id='eduH4'>Education</h4>
                    {formsObj.edu.map((elem, index) => 
                        <div className='educationBlock block'>
                            <p>{elem.schoolName}</p>
                            <p>--{elem.title}</p>
                            <div className='btnsContainer'>
                                <BtnEdit goToTab={'tabEdu'} index={index} editTab={editTab} setCurrent={setCurrent}/>
                                <BtnDelete index={index} stateArr={formsObj.edu} setFunction={setsObj.setEdu}/>
                            </div>
                            
                        </div>)}

                <h4 id='expH4'>Experience</h4>
                    {formsObj.experience.map((elem, index) => 
                        <div className='experienceBlock block'>
                            <p>{elem.company}</p>
                            <p>--{elem.jobTitle}</p>
                            <p>--{elem.jobDescription}</p>
                            <div className='btnsContainer'>
                                <BtnEdit goToTab={'tabExp'} index={index} editTab={editTab} setCurrent={setCurrent}/>
                                <BtnDelete index={index} stateArr={formsObj.experience} setFunction={setsObj.setExperience}/>
                            </div>
                        </div>)}
                
                <div id='skillsBlock' className='block'>
                    <h4>Extra Skills</h4>
                    <ul>
                        {formsObj.general.skills.map(elem => 
                            <li>{elem}</li>)}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default CV;