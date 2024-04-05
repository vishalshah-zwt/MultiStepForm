import React, { createContext, useEffect } from 'react'

import { useFormik, validateYupSchema } from 'formik';
import PersonalDetails from '../components/PersonalDetails';
import WorkExperience from '../components/WorkExperience';
import PersonalSkills from '../components/PersonalSkills';
import SelfDescription from '../components/SelfDescription';
import { MyContext } from '../context/ContextAPI';
import FormValidation from '../schema/FormValidation';
import Experiment from '../components/Experiment';
import Swal from 'sweetalert2';
function HomePage() {




    //CONNECTING LOCAL STORAGE STARTED
    const dataOfLocalStorage = JSON.parse(localStorage.getItem('Data'))
    useEffect(() => {

        if (dataOfLocalStorage) {
            setFieldValue(values.personalDetails = dataOfLocalStorage.personalDetails)
            setFieldValue(values.experienced = dataOfLocalStorage.experienced)
            setFieldValue(values.cadidateCategory = dataOfLocalStorage.cadidateCategory)
            setFieldValue(values.personalSkills = dataOfLocalStorage.personalSkills)
            setFieldValue(values.selfDescription = dataOfLocalStorage.selfDescription)
            setFieldValue(values.pointers = dataOfLocalStorage.pointers)
            setFieldValue(values.selectedField = dataOfLocalStorage.selectedField)
            setFieldValue(values.selectedSkills = dataOfLocalStorage.selectedSkills)
            setFieldValue(values.status = dataOfLocalStorage.status)

        }


    }, [])
    //CONNECTING LOCAL STORAGE ENDED



    //FDRMIK STARTED
    const initialValues = {
        personalDetails: {
            name: '',
            email: '',
            contactNumber: '',
            gender: '',
            city: '',
            state: '',
            zipCode: '',
            DOB: ''
        },

        cadidateCategory: '',
        experienced: [{ orgName: '', startDate: '', endDate: '', position: '' }],
        personalSkills: {
            field: '',
            skills: []
        },
        selfDescription: '',
        status: {
            personalDetails: { isValidationFired: 0, pointer: true },
            workExperience: { isValidationFired: 0, pointer: false },
            personalSkills: { isValidationFired: 0, pointer: false },
            selfDescription: { isValidationFired: 0, pointer: false },
        },
        isFormSubmitted: false,
        selectedField: '',
        selectedSkills: [],

    }
    var RegisteredUser = [];
    if (localStorage.getItem('RegisteredUser')) {
        RegisteredUser = JSON.parse(localStorage.getItem('RegisteredUser'));
    }
    const { values, setFieldValue, handleChange, handleSubmit, errors, validateForm, touched } = useFormik({
        initialValues,
        validationSchema: FormValidation,
        onSubmit: (value, action) => {
            setFieldValue(values.isFormSubmitted = true)
            setFieldValue(values.selfDescription.isValidationFired = (values.selfDescription.isValidationFired + 1))
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
            action.resetForm()
            localStorage.removeItem('Data')

        }
    })
    //FDRMIK ENDED


    //EVENT HANDLERS STARTED

    const handleNext = async (step) => {
        if (step === 'personalDetails') {
            await validateForm()
            setFieldValue(values.status.personalDetails.isValidationFired = (values.status.personalDetails.isValidationFired + 1))
        }

    }


    //EVENT HANDLERS ENDED

    const database = JSON.parse(localStorage.getItem('Data'))

    //LOGS STARTED
    // console.log(dataOfLocalStorage,"LocalStorage")
    console.log(values, "Values")
    console.log(database, "Database")
    console.log(errors, "Errors")
    //LOGS ENDED


    return (
        <div>
            <MyContext.Provider value={{ values, setFieldValue, handleChange, handleSubmit, errors, validateForm, handleNext, database, touched }}>
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