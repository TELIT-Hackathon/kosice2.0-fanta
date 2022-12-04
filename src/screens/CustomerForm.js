// import React, { useState } from 'react';
import { useState, cloneElement } from "react";
import HouseLocation from '../components/CustomerForm/HouseLocation';
import Surrounding from '../components/CustomerForm/Surrounding';
import Roommate from '../components/CustomerForm/Roommate';
import "./CustomerForm.scss"
import { useNavigate } from "react-router-dom";
import Profile from "../components/CustomerForm/Profile";

function CustomerForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const navigate = useNavigate();


  const getStep = () => {
    const stepComponent = steps.find(x => x.id === step)?.component
    return cloneElement(stepComponent, { setNextStep: setNextStep });
  }

  const saveUser = (userData) => {
    console.log("Save user data", userData);
    navigate("/");
  }

  const setNextStep = (StepData) => {
    // let list = Object.entries(StepData).map(([_, v]) => { return { key: _, value: v } }).filter(x => x.value !== "")

    const newStep = step + 1
    const newData = {...data, ...StepData}
    if (newStep === 3) {
      saveUser(newData)
    }
    setStep(newStep);
    setData(newData);
  }

  const steps = [
    {
      id: 0,
      name: "Profil",
      component: <Profile />
    },
    {
      id: 1,
      name: "Lokácia",
      component: <HouseLocation />
    },
    
    {
      id: 2,
      name: "Spolubývajúci",
      component: <Roommate />
    }
  ]

  return (
    <div className="customer-form mb-5">
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
