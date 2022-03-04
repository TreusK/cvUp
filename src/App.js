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
    birthday: '1991-03-29',
    email: 'johnsmith777@gmail.com',
    phone: '+011 123456 789',
    skills: ['Intermediate Japanese', 'Top English', 'Amazing dacing steps'],
  })
  //education info state
  const [edu, setEdu] = useState([
    {schoolName: 'Michigan Highschool', title: 'HS Diploma'}, 
    {schoolName: 'Harvard', title: 'Expert in cakes'}
  ]);
  //work exp info state
  const [experience, setExperience] = useState([
    {company: 'Family Business', jobTitle: 'Glorified Asistant', jobDescription: 'Cook meals, clean the house, mow the lawn, take care of the pets'},
    {company: 'McDonalds', jobTitle: 'Burger Maker', jobDescription: 'Cook and cleaning duties'},
    {company: 'Google', jobTitle: 'CEO', jobDescription: 'Make sure everything works as intended'}
  ])
  //summary state
  const [summary, setSummary] = useState('loremloremlorem loremlorem loremloremlorem loremlorem loremloremlorem loremlorem loremloremlorem loremlorem loremloremlorem loremlorem loremloremlorem loremlorem ');
  //tabs state
  const [tabs, setTabs] = useState('tabCvPreview');
  //editing state
  const [editing, setEditing] = useState(false);
  //current index for sub edits
  const [current, setCurrent] = useState();

  ////////////////////////////////////Functions////////////////////////////////////

  //Event function to render the correct tab on click
  function handleTabClick(e) {
    if(editing) {
      alert('Please finish the current edit first');
    } else {
      setTabs(e.target.id);
    }
  }

  //Function to change to X tab when editing that sections data from th CV preview
  function editTab(tabToGoTo) {
    setEditing(true);
    setTabs(tabToGoTo);
  }

  ////////////////////////////////////Return////////////////////////////////////
  return (
    <div className="App">
      <header className='App-header'>
        CV Project
      </header>
      <Tabs handleTabClick={handleTabClick}/>
      <Main editing={editing} 
            tabs={tabs} 
            editTab={editTab} 
            formsObj={{general, summary, edu, experience, current}} 
            setsObj={{setGeneral, setSummary, setEdu, setExperience, setEditing, setCurrent}}/>
    </div>
  );
}

export default App;

//Header component
//Idea: Hacer un "editing" state true/false. Cuand osubmiteas, lo pones falso siempre. Pero cuando editas lo pones en verdader. 
//y las formas lo toman; si es verdadro populan los valores con un objeto q saco del estado, sino, con nada (algo tipo 
// value={editing && obj.value})
