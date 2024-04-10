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
import { object } from 'yup';


function HomePage() {




    //CONNECTING LOCAL STORAGE STARTED
    const dataOfLocalStorage = JSON.parse(localStorage.getItem('Data'))
    const [activeState, setActiveState] = useState(localStorage.getItem('activeState') || 0)



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
            skills: dataOfLocalStorage?.personalSkills?.skills || []
        },
        selfDescription: dataOfLocalStorage?.selfDescription?.field || '',
        status: dataOfLocalStorage?.status || {
            personalDetails: { isValidationFired: 0, pointer: true, isSubmitted: false },
            workExperience: { isValidationFired: 0, pointer: false, isSubmitted: false },
            personalSkills: { isValidationFired: 0, pointer: false, isSubmitted: false },
            selfDescription: { isValidationFired: 0, pointer: false, isSubmitted: false },
        },
        isFormSubmitted: dataOfLocalStorage?.isFormSubmitted || false,

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
            personalDetails: { isValidationFired: 0, pointer: true, isSubmitted: false },
            workExperience: { isValidationFired: 0, pointer: false, isSubmitted: false },
            personalSkills: { isValidationFired: 0, pointer: false, isSubmitted: false },
            selfDescription: { isValidationFired: 0, pointer: false, isSubmitted: false }
        })
        setFieldValue('isFormSubmitted', false)
        setActiveState(0)
        localStorage.removeItem('activeState')
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


        }
    })
    //FDRMIK ENDED



    for (let i in values.status) {
        if (i.isSubmitting == true) {
            console.log(i, "&&&&&&&&&&&&&&")
        }
    }
    const tabbing = async (activePage) => {
        const error = await validateForm()
        if (activePage === 0) {
            if (values?.status?.personalDetails?.isSubmitted === true || values?.status?.personalDetails?.isSubmitting === true) {
                {
                    if (Object.keys(errors).length < 1 || Object.keys(errors).includes('experienced')) {
                        setFieldValue(values.status.personalDetails.pointer = true)
                        setFieldValue(values.status.workExperience.pointer = false)
                        setFieldValue(values.status.personalSkills.pointer = false)
                        setFieldValue(values.status.selfDescription.pointer = false)
                        console.log(values, "********")
                        localStorage.setItem('Data', JSON.stringify(values))
                        setActiveState(0)
                        localStorage.setItem('activeState', JSON.stringify(0))
                    }
                }
            }
        }
        if (activePage === 1) {
            if (values?.status?.workExperience?.isSubmitted === true || values?.status?.workExperience?.isSubmitting === true) {
                {
                    setFieldValue(values.status.personalDetails.pointer = false)
                    setFieldValue(values.status.workExperience.pointer = true)
                    setFieldValue(values.status.personalSkills.pointer = false)
                    setFieldValue(values.status.selfDescription.pointer = false)
                    localStorage.setItem('Data', JSON.stringify(values))
                    setActiveState(1)
                    localStorage.setItem('activeState', JSON.stringify(1))
                }
            }
        }
        /* if (activePage === 2) {
            setFieldValue('status', {
                personalDetails: { isValidationFired: 0, pointer: false },
                workExperience: { isValidationFired: 0, pointer: false },
                personalSkills: { isValidationFired: 0, pointer: true },
                selfDescription: { isValidationFired: 0, pointer: false }
            })
        }
        if (activePage === 3) {
            setFieldValue('status', {
                personalDetails: { isValidationFired: 0, pointer: true },
                workExperience: { isValidationFired: 0, pointer: false },
                personalSkills: { isValidationFired: 0, pointer: false },
                selfDescription: { isValidationFired: 0, pointer: true }
            })
        } */

    }


    const database = JSON.parse(localStorage.getItem('Data'))
    console.log(values, "Values")
    console.log(errors, "Errors")
    console.log(activeState, "ActiveState")
    //LOGS ENDED




    return (
        <div>
            <div className='Navbar'>
                <p className={activeState == 0 ? "active" : ""} onClick={() => tabbing(0)}>Personal Details</p>
                <p className={activeState == 1 ? "active" : ""} onClick={() => tabbing(1)}  >Work Experience</p>
                <p className={activeState == 2 ? "active" : ""} onClick={() => tabbing(2)} >Personal Skills</p>
                <p className={activeState == 3 ? "active" : ""} onClick={() => tabbing(3)} >Self Description</p>
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