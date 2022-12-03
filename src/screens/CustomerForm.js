// import React, { useState } from 'react';
import { useState, useEffect } from "react";
import Location from '../components/CustomerForm/Location';
import { db, getAccomadation } from '../firebase'
import "./CustomerForm.scss"


function CustomerForm() {



  const[step, setStep] = useState(0);

  const getStep = () => {
    return steps.find(x => x.id === step)?.component;
  }

  const setNextStep = () => {
    setStep(step + 1);
  }

  const steps = [
    {
      id: 0,
      name: "Lokácia",
      component: <Location setNextStep={setNextStep}/>
    },
    {
      id: 1,
      name: "Možnosti okolia",
      component: <Location />
    }
  ]

  return (
    <div className="customer-form">
      <h1>Customer form</h1>
      <div className='stepper'>
        {steps.map(x => 
           <div key={x.id} className={`step ${step >= x.id ? "step-selected": ""}`}>
              <h4 >{x.name}</h4>
          </div>
        )}
      </div>
      {getStep()}
      

    </div>
  );
}

export default CustomerForm;
