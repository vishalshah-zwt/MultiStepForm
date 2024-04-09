import React, { createContext, useEffect, useState } from 'react'

import { useFormik, validateYupSchema } from 'formik';
import PersonalDetails from '../components/PersonalDetails';
import WorkExperience from '../components/WorkExperience';
import PersonalSkills from '../components/PersonalSkills';
import SelfDescription from '../components/SelfDescription';
import { MyContext } from '../context/ContextAPI';
import FormValidation from '../schema/FormValidation';
import Swal from 'sweetalert2';

import "../App.css"


function HomePage() {




    //CONNECTING LOCAL STORAGE STARTED
    const dataOfLocalStorage = JSON.parse(localStorage.getItem('Data'))
    const [activeState, setActiveState] = useState(dataOfLocalStorage?.activeState || 0)



    //FDRMIK STARTED
    const initialValuesVariable = {
        personalDetails: {
            name: dataOfLocalStorage?.personalDetails?.name || '',
            email: dataOfLocalStorage?.personalDetails?.email || '',
            contactNumber: dataOfLocalStorage?.personalDetails?.contactNumber || '',
            gender: dataOfLocalStorage?.personalDetails?.gender || '',
            city: dataOfLocalStorage?.personalDetails?.city || '',
            state: dataOfLocalStorage?.personalDetails?.state || '',
            zipCode: dataOfLocalStorage?.personalDetails?.zipCode || '',
            DOB: dataOfLocalStorage?.personalDetails?.DOB || ''
        },

        cadidateCategory: dataOfLocalStorage?.cadidateCategory || '',
        experienced: dataOfLocalStorage?.experienced || [{ orgName: '', startDate: '', endDate: '', position: '' }],
        personalSkills: {
            field: dataOfLocalStorage?.personalSkills?.field || '',
            skills: dataOfLocalStorage?.selectedSkills || []
        },
        selfDescription: dataOfLocalStorage?.selfDescription?.field || '',
        status: dataOfLocalStorage?.status || {
            personalDetails: { isValidationFired: 0, pointer: true },
            workExperience: { isValidationFired: 0, pointer: false },
            personalSkills: { isValidationFired: 0, pointer: false },
            selfDescription: { isValidationFired: 0, pointer: false },
        },
        isFormSubmitted: dataOfLocalStorage?.isFormSubmitted || false,
        selectedField: dataOfLocalStorage?.selectedField || '',
        selectedSkills: dataOfLocalStorage?.selectedSkills || [],
    }

    const [initialValues, setInitialValues] = useState(initialValuesVariable)

    function backToFirstPage() {

        localStorage.removeItem('Data')
        setFieldValue('personalDetails', {
            name: '',
            email: '',
            contactNumber: '',
            gender: '',
            city: '',
            state: '',
            zipCode: '',
            DOB: ''
        })
        setFieldValue('cadidateCategory', '')
        setFieldValue('experienced', [{ orgName: '', startDate: '', endDate: '', position: '' }])
        setFieldValue('personalSkills', {
            field: '',
            skills: []
        })
        setFieldValue('selfDescription', '')
        setFieldValue('status', {
            personalDetails: { isValidationFired: 0, pointer: true },
            workExperience: { isValidationFired: 0, pointer: false },
            personalSkills: { isValidationFired: 0, pointer: false },
            selfDescription: { isValidationFired: 0, pointer: false }
        })
        setFieldValue('isFormSubmitted', false)
        setFieldValue('selectedField', '')
        setFieldValue('selectedSkills', '')
        setActiveState(0)
    }

    var RegisteredUser = [];
    if (localStorage.getItem('RegisteredUser')) {
        RegisteredUser = JSON.parse(localStorage.getItem('RegisteredUser'));
    }
    const { values, setFieldValue, handleChange, handleSubmit, errors, validateForm, touched, handleReset } = useFormik({
        initialValues,
        validationSchema: FormValidation[activeState],
        onSubmit: (value, action) => {
            setFieldValue(values.isFormSubmitted = true)
            // setFieldValue(values.selfDescription.isValidationFired = (values.selfDescription.isValidationFired + 1))
            localStorage.setItem('Data', JSON.stringify(values))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data Submitted",
                showConfirmButton: false,
                timer: 1500
            });
            RegisteredUser.push(values)
            localStorage.setItem('RegisteredUser', JSON.stringify(RegisteredUser));
            localStorage.removeItem('Data')
            setActiveState(0)
            localStorage.setItem('activeState', JSON.stringify(0));
            backToFirstPage();
            /*  setFieldValue('status', {
                 personalDetails: { isValidationFired: 0, pointer: true },
                 workExperience: { isValidationFired: 0, pointer: false },
                 personalSkills: { isValidationFired: 0, pointer: false },
                 selfDescription: { isValidationFired: 0, pointer: false }
             }) */
        }
    })
    //FDRMIK ENDED







    //EVENT HANDLERS ENDED

    const database = JSON.parse(localStorage.getItem('Data'))

    //LOGS STARTED
    // console.log(dataOfLocalStorage,"LocalStorage")
    console.log(values, "Values")
    // console.log(database, "Database")
    console.log(errors, "Errors")
    console.log(activeState, "ActiveState")


    //LOGS ENDED




    return (
        <div>
            <div className='Navbar'>
                <p className={activeState == 0 ? "active" : ""}>Personal Details</p>
                <p className={activeState == 1 ? "active" : ""}>Work Experience</p>
                <p className={activeState == 2 ? "active" : ""}>Personal Skills</p>
                <p className={activeState == 3 ? "active" : ""}>Self Description</p>
            </div>
            <MyContext.Provider value={{ values, setFieldValue, handleChange, handleSubmit, errors, validateForm, backToFirstPage, dataOfLocalStorage, database, dataOfLocalStorage, touched, handleReset, activeState, setActiveState }}>
                <PersonalDetails />
                <WorkExperience />
                <PersonalSkills />
                <SelfDescription />

                {/* <Experiment/> */}
            </MyContext.Provider>
        </div>
    )
}

export default HomePage