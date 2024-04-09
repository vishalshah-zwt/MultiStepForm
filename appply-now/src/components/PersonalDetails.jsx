import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/ContextAPI'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PersonalDetails() {
    const { values, setFieldValue, handleChange, handleSubmit, errors, validateForm, touched, setActiveState, activeState, handleReset, backToFirstPage } = useContext(MyContext)

    const handleNext = async () => {
        const error = await validateForm()
        if (Object.keys(error).length === 0) {
            setFieldValue(values.status.personalDetails.pointer = false)
            setFieldValue(values.status.workExperience.pointer = true)
            localStorage.setItem('Data', JSON.stringify(values))
            setActiveState(1)
            localStorage.setItem('activeState', JSON.stringify(1))
        }
        setFieldValue(values.status.personalDetails.isValidationFired = (values.status.personalDetails.isValidationFired + 1))
    }



    return (
        <>
            {
                (values.status.personalDetails.pointer) ?
                    <div className='MasterContainer container  my-16 mx-auto '>

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
                                        value={values?.personalDetails?.name}
                                        onChange={handleChange}

                                    />
                                </div>

                                {
                                    (values.status.personalDetails.isValidationFired > 0) && errors?.personalDetails?.name ?
                                        <div className='text-red-500 mb-4'>
                                            {errors?.personalDetails?.name}
                                        </div>
                                        :
                                        null
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
                                        value={values?.personalDetails?.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {
                                    (values.status.personalDetails.isValidationFired > 0) && errors?.personalDetails?.email ?
                                        <div className='text-red-500 mb-4'>
                                            {errors?.personalDetails?.email}
                                        </div>
                                        :
                                        null
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
                                        value={values?.personalDetails?.contactNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                {
                                    (values.status.personalDetails.isValidationFired > 0) && errors?.personalDetails?.contactNumber ?
                                        <div className='text-red-500 mb-4'>
                                            {errors?.personalDetails?.contactNumber}
                                        </div>
                                        :
                                        null
                                }
                                {/* RADIO BUTTON FOR GENDER STARTED*/}
                                <div className='GenderContainer mb-5'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Gender:
                                    </label>
                                    <div className="flex items-center mb-2">
                                        <input
                                            id="male"
                                            type="radio"
                                            name='personalDetails.gender'
                                            value='Male'
                                            checked={(values?.personalDetails?.gender === 'Male') ? true : false}
                                            onChange={(e) => { setFieldValue(values.personalDetails.gender = 'Male') }}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="male"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input
                                            id='female'
                                            type="radio"
                                            name='personalDetails.gender'
                                            value='Female'
                                            checked={(values?.personalDetails?.gender === 'Female') ? true : false}
                                            onChange={(e) => { setFieldValue(values.personalDetails.gender = 'Female') }}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="female"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Female
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <input
                                            id='other'
                                            type="radio"
                                            name='personalDetails.gender'
                                            value='Other'
                                            checked={(values?.personalDetails?.gender === 'Other') ? true : false}
                                            onChange={(e) => { setFieldValue(values.personalDetails.gender = 'Other') }}
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            for="other"
                                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Other
                                        </label>
                                    </div>
                                </div>
                                {
                                    (values.status.personalDetails.isValidationFired > 0) && errors?.personalDetails?.gender ?
                                        <div className='text-red-500 mb-4'>
                                            {errors?.personalDetails?.gender}
                                        </div>
                                        :
                                        null
                                }
                                {/* RADIO BUTTON FOR GENDER ENDED*/}

                                <div className="DOBContainer mb-5">
                                    <label
                                        for="date"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        DOB:
                                    </label>
                                    {/*  <input
                                        id='date'
                                        type="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        name='personalDetails.DOB'
                                        value={values?.personalDetails?.DOB}
                                        onChange={handleChange}
                                    /> */}
                                    <DatePicker
                                        showIcon
                                        selected={values?.personalDetails?.startDate}
                                        onChange={(date) => setFieldValue('personalDetails.startDate', date)}
                                        className='border-2 outline-2'
                                    />

                                    {
                                        values?.status?.personalDetails?.isValidationFired > 0 && errors?.personalDetails?.DOB ?
                                            <div className='text-red-500 mb-4'>
                                                {errors?.personalDetails?.DOB}
                                            </div>
                                            :
                                            null
                                    }

                                    < div className='ButtonContainer'>
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Next
                                        </button>
                                    </div>
                                    <br />
                                    <div className='ButtonContainer'>
                                        <button
                                            type="button"
                                            onClick={backToFirstPage}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Reset Form
                                        </button>
                                    </div>
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