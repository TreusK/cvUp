import '../styles/Main.css';
import FormGen from './FormGen';
import FormEdu from './FormEdu';
import FormExperience from './FormExperience';
import CV from './CV';

function Main({tabs, formsObj, setsObj}) {
    return(
        <div id='Main'>
            {(tabs == 'tabGeneral') && <FormGen setFunction={setsObj.setGeneral} />}
            {(tabs == 'tabEdu') && <FormEdu setFunction={setsObj.setEdu} eduState={formsObj.edu}/>}
            {(tabs == 'tabExp') && <FormExperience setFunction={setsObj.setExperience} expState={formsObj.experience}/>}
            {(tabs == 'tabCvPreview') && <CV formsObj={formsObj}/>}
        </div>
    )
}

export default Main