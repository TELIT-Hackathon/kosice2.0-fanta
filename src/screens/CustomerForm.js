// import React, { useState } from 'react';
import { useState, cloneElement } from "react";
import HouseLocation from '../components/CustomerForm/HouseLocation';
import Roommate from '../components/CustomerForm/Roommate';
import "./CustomerForm.scss"
import { useNavigate } from "react-router-dom";
import Profile from "../components/CustomerForm/Profile";
import { useFirebaseAuth } from '../FirebaseAuthContext'
import { firestore, setUserData } from "../firebase";


function CustomerForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const user = useFirebaseAuth();

  const getStep = () => {
    const stepComponent = steps.find(x => x.id === step)?.component
    return cloneElement(stepComponent, { setNextStep: setNextStep });
  }

  const saveUser = (userData) => {
    let newData = {}
    for (var item in userData) {
      if (userData[item] !== '') {
        newData = { ...newData, [item]: userData[item] }
      }
    }
    setUserData(firestore, user.uid, newData)
    navigate("/");
  }

  const setNextStep = (StepData) => {
    const newStep = step + 1
    const newData = { ...data, ...StepData }
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
