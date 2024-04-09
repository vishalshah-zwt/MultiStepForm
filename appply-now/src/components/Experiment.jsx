import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/ContextAPI'

function Experiment() {
    const { values, setFieldValue, handleChange, handleSubmit, validateForm, errors } = useContext(MyContext)




    //EVENT HANDLERS STARTED
    const handleNext = () => {
        validateForm();
        setFieldValue(values.status.workExperience.isValidationFired = (values.status.workExperience.isValidationFired + 1))
    }

    const handlePrevious = () => {
        setFieldValue(values.status.workExperience.pointer = false)
        setFieldValue(values.status.personalDetails.pointer = true)
    }

    const [experience, setExperience] = useState([])
    const handleExperience = (e) => {

        if (e.target.value === 'Fresher') {
            setFieldValue(values.experiment = e.target.value)
        }
        else {

            setFieldValue(values.experiment = [{ orgName: '', startDate: '', endDate: '', position: '' }])
        }
    }

    const handleExperienceCount = (e) => {
        if (e.target.value === 'Add') {
            setFieldValue(values.workExperience.experience.push({ orgName: '', startDate: '', endDate: '', position: '' }))
            setFieldValue(values.experiment.push({ orgName: '', startDate: '', endDate: '', position: '' }))
        }
        else {
            if (values.experiment?.length < 2) {
                setFieldValue(values.experiment = '')
            }
            else {

            }
            setFieldValue(values.experiment.pop())
        }
    }

    useEffect(() => {


        if (values.status.workExperience.isValidationFired > 0) {
            if (!Object.keys(errors).includes('workExperience')) {
                setFieldValue(values.status.workExperience.pointer = false)
                setFieldValue(values.status.personalSkills.pointer = true)
                localStorage.setItem('Data', JSON.stringify(values))
            }
        }
    }, [values.status.workExperience.isValidationFired])
    //EVENT HANDLERS ENDED


    return (

        <>
            {

                <div className='WorkExperienceContainer container  my-16 mx-auto'>



                    <div className='WorkExperienceContainer '>

                        <div className='ExperienceContainer'>
                            <div className="flex items-center mb-2">
                                <input
                                    id="default-radio-1"
                                    type="radio"
                                    name='experiment'
                                    value='Fresher'
                                    checked={(values?.experiment == "Fresher") ? true : false}
                                    onChange={(e) => handleExperience(e)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="default-radio-1"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Fresher
                                </label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    name='experiment'
                                    value='Experienced'
                                    checked={(values.experiment?.[0]?.orgName?.length >= 0) ? true : false}
                                    onChange={(e) => handleExperience(e)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    for="default-radio-2"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Experienced
                                </label>
                            </div>

                        </div>
                        {
                            (values.experiment !== 'Fresher' && values.experiment?.length > 0) ?


                                <div className='ExperienceContainer'>
                                    {
                                        values.experiment.map((item, index) => {
                                            return <div className='ExperienceCountContainer'>
                                                <div className='ExperienceCount'>
                                                    <div className='organizationNameContainer flex mx-4 my-4 align-center justify-center inline'>
                                                        <label for="personalDetails.name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white  my-2.5 mx-4">
                                                            Organization Name:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30%]"
                                                            placeholder="Organization Name"
                                                            name="workExperience.experience[0].orgName"
                                                            value={values?.workExperience.experience[0]?.orgName}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    {
                                                        (values.status.workExperience.isValidationFired && errors?.workExperience?.experience[0]?.orgName) ?
                                                            <div className='text-green-500 mb-4'>
                                                                Required
                                                            </div>
                                                            : null
                                                    }
                                                    <div className='dateContainer flex mx-4 my-4 align-center justify-center inline'>
                                                        <label for="personalDetails.name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white  my-2.5 mx-4">
                                                            Start Date:
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30%]"
                                                            name="workExperience.experience[0].startDate"
                                                            value={values?.workExperience.experience[0]?.startDate}
                                                            onChange={handleChange}
                                                        />
                                                        {
                                                            (values.status.workExperience.isValidationFired && errors?.workExperience?.experience[0]?.startDate) ?
                                                                <div className='text-green-500 mb-4'>
                                                                    Required
                                                                </div>
                                                                : null
                                                        }
                                                        <label for="personalDetails.name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white  my-2.5 mx-4">
                                                            End Date:
                                                        </label>
                                                        <input
                                                            type="date"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30%]"
                                                            name="workExperience.experience[0].endDate"
                                                            value={values?.workExperience.experience[0]?.endDate}
                                                            onChange={handleChange}
                                                        />
                                                        {
                                                            (values.status.workExperience.isValidationFired && errors?.workExperience?.experience[0]?.endDate) ?
                                                                <div className='text-green-500 mb-4'>
                                                                    Required
                                                                </div>
                                                                : null
                                                        }
                                                    </div>
                                                    <div className='positionContainer flex mx-4 my-4 align-center justify-center inline'>
                                                        <label for="personalDetails.name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white  my-2.5 mx-4">
                                                            Position:
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30%]"
                                                            placeholder="Position"
                                                            name="workExperience.experience[0].position"
                                                            value={values?.workExperience.experience[0]?.position}
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                    {
                                                        (values.status.workExperience.isValidationFired && errors?.workExperience?.experience[0]?.position) ?
                                                            <div className='text-green-500 mb-4'>
                                                                Required
                                                            </div>
                                                            : null
                                                    }
                                                </div>
                                            </div>
                                        })
                                    }
                                    <div className='ExperienceAddORRemoveButtonsContainer border flex justify-center'>
                                        <button
                                            type="button"
                                            value='Add'
                                            onClick={(e) => handleExperienceCount(e)}
                                            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            Add More
                                        </button>
                                        <button
                                            type="button"
                                            value='Remove'
                                            onClick={(e) => handleExperienceCount(e)}
                                            className=" text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            Remove
                                        </button>
                                    </div>

                                </div>
                                :
                                null
                        }
                    </div>
                    {
                        (values.status.workExperience.isValidationFired && errors?.workExperience?.fresher) ?
                            <div className='text-green-500 mb-4'>
                                Please Choose Either Fresher or Experienced
                            </div>
                            : null
                    }
                    <div className='buttonContainer'>
                        <button
                            type="button"
                            onClick={handlePrevious}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            onClick={handleNext}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Next
                        </button>
                    </div>

                </div>


            }
        </>
    )
}

export default Experiment