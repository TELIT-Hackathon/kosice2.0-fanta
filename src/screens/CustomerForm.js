import React, { useState } from 'react';
import Location from '../components/CustomerForm/Location';
import Surrounding from '../components/CustomerForm/Surrounding';

import "./CustomerForm.scss"


function CustomerForm() {
  const[step, setStep] = useState(0);
  const[data, setData] = useState({});

  const getStep = () => {
    return steps.find(x => x.id === step)?.component;
  }

  const setNextStep = (StepData) => {
    setStep(step + 1);
    setData(...data, ...StepData)

  }

  // const creteFilter = () => {

  // }

  const steps = [
    {
      id: 0,
      name: "Lokácia",
      component: <Location setNextStep={setNextStep}/>
    },
    {
      id: 1,
      name: "Možnosti okolia",
      component: <Surrounding setNextStep={setNextStep}/>
    }
  ]

  return (
    <div className="customer-form">
      <h1>Customer form</h1>
      <div className='stepper'>
        {steps.map(x => 
           <div key={x.id} className={`step ${step === x.id ? "step-selected": ""}`}>
              <h4 >{x.name}</h4>
          </div>
        )}
      </div>
      {getStep()}
      

    </div>
  );
}

export default CustomerForm;
