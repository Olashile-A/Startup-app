import React, { useEffect, useState } from 'react';
import './App.css';
import CheckList from './CheckList';
import { officeSetup } from './helpers';
import {SetupProps } from './model';

const App = () => {

  const [state, setState] = useState<SetupProps[]>(officeSetup)
  const [randomText, setRadomText] = useState<string>("")

  const handleChange = ( event: { target: { checked: boolean; }; },  title: string) => {
    const result = state.map((item) => {

      let tak = item.tasks.map((item) => item.title === title ? {...item, checked: event?.target?.checked} : item)
      const isCheck = tak.some(item => item.checked === false)

      return {...item, tasks: tak, isChecked: isCheck === true ? false : true }
      
    })
    localStorage.setItem('storedItem', JSON.stringify(result))
    setState(result);
  }

  const handledisabled = (id: number) => {
    let disabled = true;
  
    if (id === state[0].id) {
      disabled = false;
    } else {
      state.forEach((section, index) => {
        if (section.id === id) {
          disabled = !state[index - 1].isChecked
        } 
      })
    }
  
    return disabled;
  }
  

  const handleRandomResponse = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json')
    const result = await response.json()
    setRadomText(result.text);
    
  }

  useEffect(() => {
    const allChecked = state.every((item) => item.isChecked === true)
    if(allChecked === true) {
      handleRandomResponse()
    } else {
      
      setRadomText("")
    }
  },[state])

  useEffect(() => {
    const achivedData = localStorage.getItem('storedItem')
    if(!achivedData) {
      setState(officeSetup)
      
    }else{
      setState(JSON.parse(achivedData || "[]"))
    }
  },[])

  return (
    <div className='App'>
      <div className='container'>
        <div className='sub-container'>
          <h2>My Startup Progress</h2>
          {state.map((item, index) => (
            <div key={index} className='mb-5'>
              <CheckList {...item} onChange={handleChange} handledisabled={() =>handledisabled(index)}/>
            </div>
          ))}
          <p>{randomText}</p>
        </div>
      </div>
    </div>
  );
}


export default App;
