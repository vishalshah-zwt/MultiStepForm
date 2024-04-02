import React, { createContext } from 'react'

import { useFormik } from 'formik';
import PersonalDetails from '../components/PersonalDetails';
import WorkExperience from '../components/WorkExperience';
import PersonalSkills from '../components/PersonalSkills';
import SelfDescription from '../components/SelfDescription';
import { MyContext } from '../context/ContextAPI';
function HomePage() {

    
    //FDRMIK STARTED
    const initialValues ={
        personalDetails:{
            name:'',
            email:'',
            contactNumber:'',
            gender:'',
            city:'',
            state:'',
            zipCode:''
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

    const {values,setFieldValue,handleChange} = useFormik({
        initialValues,

    })
    //FDRMIK ENDED

    console.log(values)
    return (
        <div>
            <MyContext.Provider value={{ values, setFieldValue, handleChange }}>
               <PersonalDetails />
               <WorkExperience />
               <PersonalSkills />
               <SelfDescription />
            </MyContext.Provider>
        </div>
    )
}

export default HomePage