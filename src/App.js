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
    firstName: 'John',
    lastName: 'Smith',
    birthday: '1991-29-03',
    email: 'johnsmith777@gmail.com',
    phone: '+011 123456 789',
  })
  //education info state
  const [edu, setEdu] = useState({
    new: {
      schoolName: '',
      title: '',
    },
    eduArr: [{schoolName: 'Michigan Highschool', title: 'HS Diploma'}, {schoolName: 'Harvard', title: 'Expert in cakes'}],
  })
  //work exp info state
  const [experience, setExperience] = useState({
    new: {
      company: '',
      jobTitle: '',
      jobDescription: '',
    },
    expArr: [{company: 'My dad', jobTitle: 'Glorified Asistant', jobDescription: 'Cook meals, clean the house, mow the lawn, take care of the pets'},
            {company: 'McDonalds', jobTitle: 'Burger Maker', jobDescription: 'Cook and cleaning duties'},
            {company: 'Google', jobTitle: 'CEO', jobDescription: 'Make sure everything works as intended'}],
  })
  //skills info state
  const [skills, setSkills] = useState(['Top level English', 'Intermediate Japanese', 'Amazing dancing steps'])

  //tabs state
  const [tabs, setTabs] = useState('tabCvPreview');

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
      <Main tabs={tabs} formsObj={{general, edu, experience, skills}} setsObj={{setGeneral, setEdu, setExperience}}/>
    </div>
  );
}

export default App;

//Header component
//Tabs component, which has 4 clickable tabs (general, edu, exp, preview)
//Main, which renders different things depending on the tab