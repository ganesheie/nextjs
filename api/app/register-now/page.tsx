 "use client"
import React, { useState } from 'react'
import PersonalDetail from '../components/ResistrationPage/PersonalDetail'
import TrainStep from '../components/ResistrationPage/TrainStep';
import OrgSearch from '../components/ResistrationPage/OrgSearch';
const Registration = () => {
  const [currentForm,setCurrentForm] = useState("PersonalDetail");
  const handleClick = (event,formName: string) => {
    event.preventDefault();
    console.log("Next Button Clicked" + formName);
    setCurrentForm(formName)
  } 
  return (
  <>
   <TrainStep />
   
   {currentForm ==="PersonalDetail" && (<PersonalDetail handleClick={handleClick}/>)}
   {currentForm ==="OrgSearch" && (<OrgSearch />) }

   
  </>
  )
}

export default Registration;
