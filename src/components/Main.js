import '../styles/Main.css';
import FormGen from './FormGen';
import FormSummary from './FormSummary';
import FormEdu from './FormEdu';
import FormExperience from './FormExperience';
import CV from './CV';

////Main takes 3 props
//tabs - The tabs state
//formsObj - An obj formed by the general, education and experience states
//setsObj - An obj formed by the set function of each of those 3 states

function Main({tabs, formsObj, setsObj}) {
    return(
        <div id='Main'>
            {(tabs == 'tabGeneral') && <FormGen setFunction={setsObj.setGeneral} />}
            {(tabs == 'tabSummary') && <FormSummary setFunction={setsObj.setSummary} />}
            {(tabs == 'tabEdu') && <FormEdu setFunction={setsObj.setEdu} eduState={formsObj.edu}/>}
            {(tabs == 'tabExp') && <FormExperience setFunction={setsObj.setExperience} expState={formsObj.experience}/>}
            {(tabs == 'tabCvPreview') && <CV formsObj={formsObj}/>}
        </div>
    )
}

export default Main