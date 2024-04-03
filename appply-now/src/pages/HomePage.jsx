import React, { createContext, useEffect } from 'react'

import { useFormik } from 'formik';
import PersonalDetails from '../components/PersonalDetails';
import WorkExperience from '../components/WorkExperience';
import PersonalSkills from '../components/PersonalSkills';
import SelfDescription from '../components/SelfDescription';
import { MyContext } from '../context/ContextAPI';
function HomePage() {

    
    //FDRMIK STARTED
    const initialValues = {
        personalDetails:{
            name:'',
            email:'',
            contactNumber:'',
            gender:'',
            city:'',
            state:'',
            zipCode:'',
            DOB:''
        },
        workExperience:{
            fresher:'',
            experience:[
                { orgName:'', startDate:'', endDate:'',position:'' }
            ]
        },
        personalSkills:'',
        selfDescription:'',
        pointers:{
            personalDetails:true,
            workExperience:false,
            personalSkills:false,
            selfDescription:false
        }
    }

   
    const {values,setFieldValue,handleChange,handleSubmit} = useFormik({
        initialValues ,

    })
    //FDRMIK ENDED

    const dataOfLocalStorage = JSON.parse(localStorage.getItem('Data'))
    console.log(dataOfLocalStorage,"LocalStorage")
    useEffect(()=>{

      
            if(dataOfLocalStorage)
            {
                setFieldValue(values.personalDetails = dataOfLocalStorage.personalDetails)
                setFieldValue(values.workExperience = dataOfLocalStorage.workExperience)
                setFieldValue(values.personalSkills = dataOfLocalStorage.personalDetails)
                setFieldValue(values.selfDescription = dataOfLocalStorage.selfDescription)
                setFieldValue(values.pointers = dataOfLocalStorage.pointers)
            }
      

    },[])

    console.log(values,"Values")
    return (
        <div>
            <MyContext.Provider value={{ values, setFieldValue, handleChange }}>
               <PersonalDetails />
               <WorkExperience />
               {/* <PersonalSkills />
               <SelfDescription /> */}
            </MyContext.Provider>
        </div>
    )
}

export default HomePage