import '../styles/Tabs.css';

function Tabs({handleTabClick}) {

    return(
        <div id='tabsContainer'>
            <div id='tabGeneral' className='tabStyle' onClick={handleTabClick}>General</div>
            <div id='tabEdu' className='tabStyle' onClick={handleTabClick}>Education</div>
            <div id='tabExp' className='tabStyle' onClick={handleTabClick}>Work Experience</div>
            <div id='tabCvPreview' className='tabStyle' onClick={handleTabClick}>PREVIEW</div>
        </div>
    )
}

export default Tabs;