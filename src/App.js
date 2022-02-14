import './App.css';
import React, {useState} from 'react';
//Components
import Form from './components/Form';

function App() {
  //general info state
  const [general, setgeneral] = useState({
    firstName: '',
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

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
