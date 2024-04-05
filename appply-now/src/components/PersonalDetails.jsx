import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/ContextAPI'
import { validateYupSchema } from 'formik'
import FormValidation from '../schema/FormValidation'

function PersonalDetails() {
    const { values, setFieldValue, handleChange, handleSubmit, errors, validateForm , handleNext , database ,touched} = useContext(MyContext)
   
    useEffect(() => {
        if (values.status.personalDetails.isValidationFired) {
            if (!Object.keys(errors).includes('personalDetails')) {
                setFieldValue(values.status.personalDetails.pointer = false)
                setFieldValue(values.status.workExperience.pointer = true)
                localStorage.setItem('Data',JSON.stringify(values))
                
            }
        }
    }, [values.status.personalDetails.isValidationFired])
      
    return (
        <>
            {
                ( values.status.personalDetails.pointer) ?
                    <div className='MasterContainer container  my-16 mx-auto '>
                        <div className='Navbar'>
                            <nav className="bg-white border-gray-200 dark:bg-gray-900 flex items-center justify-center my-8 ">
                                <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
                                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                        </svg>
                                    </button>
                                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Personal Details</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Work Experience</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Personal Skills</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Self Description</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className='formContainer'>


                            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                                <div className="nameContainer mb-5">
                                    <label
                                        for="personalDetails.name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name='personalDetails.name'
                                        value={values.personalDetails.name}
                                        onChange={handleChange}
                                        
                                    />
                                </div>
                                {
                                    (values.status.personalDetails.isValidationFired && errors?.personalDetails?.name ) ?
                                    <div className='text-green-500 mb-4'>
                                        Required
                                    </div>
                                    :null
                                }

                                <div className="emailContainer mb-5">
                                    <label
                                        for="personalDetails.email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name='personalDetails.email'
                                        value={values.personalDetails.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {
                                    (values.status.personalDetails.isValidationFired &&  errors?.personalDetails?.email ) ?
                                    <div className='text-green-500 mb-4'>
                                        Required
                                    </div>
                                    :null
                                }

                                <div className="contactNumberContainer mb-5">
                                    <label
                                        for="personalDetails.contactNumber"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name='personalDetails.contactNumber'
                                        value={values.personalDetails.contactNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                {
                                    (values.status.personalDetails.isValidationFired &&  errors?.personalDetails?.contactNumber ) ?
                                    <div className='text-green-500 mb-4'>
                                        Required
                                    </div>
                                    :null
                                }

                                {/* RADIO BUTTON FOR GENDER STARTED*/}
                                <div className='GenderContainer mb-5'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Gender:
                                    </label>
                                    <div className="flex items-center mb-2">
                                        <input
                                            id="default-radio-1"
                                            type="radio"
                                            name='personalDetails.gender'
                                            value='Male'
                                            checked={(values.personalDetails.gender === 'Male') ? true : false}
                                            onChange={(e) => { setFieldValue(values.personalDetails.gender = 'Male') }}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="default-radio-1"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input
                                            type="radio"
                                            name='personalDetails.gender'
                                            value='Female'
                                            checked={(values.personalDetails.gender === 'Female') ? true : false}
                                            onChange={(e) => { setFieldValue(values.personalDetails.gender = 'Female') }}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="default-radio-2"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Female
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input
                                            type="radio"
                                            name='personalDetails.gender'
                                            value='Other'
                                            checked={(values.personalDetails.gender === 'Other') ? true : false}
                                            onChange={(e) => { setFieldValue(values.personalDetails.gender = 'Other') }}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="default-radio-2"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Other
                                        </label>
                                    </div>
                                </div>
                                {
                                    (values.status.personalDetails.isValidationFired && errors?.personalDetails?.gender ) ?
                                    <div className='text-green-500 mb-4'>
                                        Required
                                    </div>
                                    :null
                                }
                                {/* RADIO BUTTON FOR GENDER ENDED*/}

                                <div className="DOBContainer mb-5">
                                    <label
                                        for="personalDetails.contactNumber"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        DOB:
                                    </label>
                                    <input
                                        type="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name='personalDetails.DOB'
                                        value={values.personalDetails.DOB}
                                        onChange={handleChange}
                                    />
                                </div>
                                {
                                    (values.status.personalDetails.isValidationFired && errors?.personalDetails?.DOB ) ?
                                    <div className='text-green-500 mb-4'>
                                        Required
                                    </div>
                                    :null
                                }

                                <div className='ButtonContainer'>
                                    <button
                                        type="button"
                                        onClick={()=>handleNext('personalDetails')}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Next
                                    </button>
                                </div>
                                
                            </form>

                        </div>


                    </div>
                    :
                    null
            }
        </>
    )
}

export default PersonalDetails