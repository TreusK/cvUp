import './App.css';
import React, {useState} from 'react';
//Components
import Main from './components/Main';
import Tabs from './components/Tabs';
//Styles
import './styles/skeleton.css';

function App() {
  ////////////////////////////////////States////////////////////////////////////
  //general info state
  const [general, setGeneral] = useState({
    firstName: 'Treus',
    lastName: '',
    age: '',
    email: '',
    phone: '',
  })
  //education info state
  const [edu, setEdu] = useState({
    new: {
      schoolName: '',
      title: '',
    },
    eduArr: [],
  })
  //work exp info state
  const [experience, setExperience] = useState({
    new: {
      company: '',
      jobTitle: '',
      jobDescription: '',
    },
    expArr: [],
  })
  //tabs state
  const [tabs, setTabs] = useState('tabGeneral');

  ////////////////////////////////////Functions////////////////////////////////////

  //Event function to render the correct tab on click
  function handleTabClick(e) {
    setTabs(e.target.id);
  }

  ////////////////////////////////////Return////////////////////////////////////
  return (
    <div className="App">
      <header className='App-header'>
        CV Project
      </header>
      <Tabs handleTabClick={handleTabClick}/>
      <Main tabs={tabs} formsObj={{general, edu, experience}} setsObj={{setGeneral, setEdu, setExperience}}/>
    </div>
  );
}

export default App;

//Header component
//Tabs component, which has 4 clickable tabs (general, edu, exp, preview)
//Main, which renders different things depending on the tab