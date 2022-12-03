// import React, { useState } from 'react';
import { useState, cloneElement } from "react";
import HouseLocation from '../components/CustomerForm/HouseLocation';
import Surrounding from '../components/CustomerForm/Surrounding';
import Roommate from '../components/CustomerForm/Roommate';
import "./CustomerForm.scss"
import { useNavigate } from "react-router-dom";

function CustomerForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const navigate = useNavigate();


  const getStep = () => {
    const stepComponent = steps.find(x => x.id === step)?.component
    return cloneElement(stepComponent, { setNextStep: setNextStep });
  }

  const setNextStep = (StepData) => {
    const newStep = step + 1
    const newData = { ...data, ...StepData }
    if (newStep === 3) {
      navigate("/results", { state: { filterList: newData } });
    }
    setStep(newStep);
    setData(newData);
  }

  const steps = [
    {
      id: 0,
      name: "Lokácia",
      component: <HouseLocation />
    },
    {
      id: 1,
      name: "Možnosti okolia",
      component: <Surrounding />
    },
    {
      id: 2,
      name: "Spolubývajúci",
      component: <Roommate />
    }
  ]

  return (
    <div className="customer-form">
      <h1>Customer form</h1>
      <div className='stepper'>
        {steps.map(x =>
          <div key={x.id} className={`step ${step >= x.id ? "step-selected" : ""}`}>
            <h4 >{x.name}</h4>
            <div className="step-bottom"></div>
          </div>
        )}
      </div>
      {getStep()}


    </div>
  );
}

export default CustomerForm;
