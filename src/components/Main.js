import '../styles/Main.css';
import FormGen from './FormGen';
import FormSummary from './FormSummary';
import FormEdu from './FormEdu';
import FormExperience from './FormExperience';
import CV from './CV';

////Main takes 5 props
//editing - To know if a form is being edited and thus filled with values
//tabs - The tabs state
//editTabs - To go to certain tab automatically when editing
//formsObj - An obj formed by the general, education and experience states
//setsObj - An obj formed by the set function of each of those 3 states

function Main({tabs, editing, editTab, formsObj, setsObj}) {
    return(
        <div id='Main'>
            {(tabs == 'tabGeneral') && <FormGen setFunction={setsObj.setGeneral} genState={formsObj.general} setEditing={setsObj.setEditing} editing={editing} />}
            {(tabs == 'tabSummary') && <FormSummary setFunction={setsObj.setSummary} summState={formsObj.summary} setEditing={setsObj.setEditing} editing={editing} />}
            {(tabs == 'tabEdu') && <FormEdu setFunction={setsObj.setEdu} eduState={formsObj.edu} setEditing={setsObj.setEditing} editing={editing} current={formsObj.current} setCurrent={setsObj.setCurrent}/>}
            {(tabs == 'tabExp') && <FormExperience setFunction={setsObj.setExperience} setEditing={setsObj.setEditing} expState={formsObj.experience} editing={editing} current={formsObj.current} setCurrent={setsObj.setCurrent}/>}
            {(tabs == 'tabCvPreview') && <CV formsObj={formsObj} setsObj={setsObj} editTab={editTab} current={formsObj.current} setCurrent={setsObj.setCurrent}/>}
        </div>
    )
}

export default Main