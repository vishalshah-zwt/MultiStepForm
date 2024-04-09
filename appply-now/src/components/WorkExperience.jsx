import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/ContextAPI'

function WorkExperience() {
    const { values, setFieldValue, handleChange, handleSubmit, validateForm, errors, activeState, setActiveState, dataOfLocalStorage, handleReset, backToFirstPage } = useContext(MyContext)



    //EVENT HANDLERS STARTED
    const handleNext = async () => {
        const error = await validateForm()
        if (Object.keys(error).length === 0) {
            setFieldValue(values.status.workExperience.pointer = false)
            setFieldValue(values.status.personalSkills.pointer = true)
            setFieldValue(values.status.workExperience.isValidationFired = values.status.workExperience.isValidationFired + 1)
            localStorage.setItem('Data', JSON.stringify(values))
            setActiveState(2)
            localStorage.setItem('activeState', JSON.stringify(2))
        }
        setFieldValue(values.status.workExperience.isValidationFired = (values.status.workExperience.isValidationFired + 1))
    }

    const handlePrevious = () => {
        setFieldValue(values.status.workExperience.pointer = false)
        setFieldValue(values.status.personalDetails.pointer = true)
        setActiveState(0)
        localStorage.setItem('activeState', JSON.stringify(0))
        localStorage.setItem('Data', JSON.stringify(values))
    }

    const handleExperience = (e) => {
        setFieldValue("cadidateCategory", e.target.value)

    }

    const handleExperienceCount = (e) => {
        setFieldValue(values.status.workExperience.isValidationFired = values.status.workExperience.isValidationFired + 1)
        if (e.target.value === 'Add') {
            if (!Object.keys(errors).includes('experienced')) {
                setFieldValue(values.experienced.push({ orgName: '', startDate: '', endDate: '', position: '' }))
            }
        }
        else {
            if (values.experienced?.length < 2) {
                setFieldValue(values.experienced = [{ orgName: '', startDate: '', endDate: '', position: '' }])
            }
            else {
                setFieldValue(values.experienced.pop())
            }
        }

    }


    return (

        <>
            {
                (values.status.workExperience.pointer) ?

                    <div className='WorkExperienceContainer container  my-16 mx-auto'>

                        <div>
                            <a href=""></a>
                            <a href=""></a><a href=""></a><a href=""></a><a href=""></a>
                        </div>


                        <div className='WorkExperienceContainer '>

                            <div className='ExperienceContainer'>
                                <div className="flex items-center mb-2">
                                    <input
                                        id="fresher"
                                        type="radio"
                                        name='cadidateCategory'
                                        value='Fresher'
                                        checked={values.cadidateCategory === "Fresher"}
                                        onChange={(e) => handleExperience(e)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="fresher"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Fresher
                                    </label>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input
                                        id='experienced'
                                        type="radio"
                                        name='cadidateCategory'
                                        value='Experienced'
                                        checked={(values.cadidateCategory == "Experienced")}
                                        onChange={(e) => handleExperience(e)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        for="experienced"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Experienced
                                    </label>
                                </div>

                            </div>
                            {
                                values.cadidateCategory === 'Experienced' ?

                                    <div className='ExperienceContainer'>
                                        {
                                            values?.experienced?.map((item, index) => {
                                                console.log('fdf')
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
                                                                name={`experienced[${index}].orgName`}
                                                                value={values?.experienced?.[index]?.orgName}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        {
                                                            (values?.status?.workExperience?.isValidationFired && errors?.experienced?.[index]?.orgName) ?
                                                                <div className='text-red-500 mb-4'>
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
                                                                name={`experienced.${index}.startDate`}
                                                                value={values?.experienced?.[index]?.startDate}
                                                                onChange={handleChange}
                                                            />
                                                            {
                                                                (values.status.workExperience.isValidationFired && errors?.experienced?.[index]?.startDate) ?
                                                                    <div className='text-red-500 mb-4'>
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
                                                                name={`experienced.${index}.endDate`}
                                                                value={values?.experienced?.[index]?.endDate}
                                                                onChange={handleChange}
                                                            />
                                                            {
                                                                (values.status.workExperience.isValidationFired && errors?.experienced?.[index]?.endDate) ?
                                                                    <div className='text-red-500 mb-4'>
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
                                                                name={`experienced.${index}.position`}
                                                                value={values?.experienced?.[index]?.position}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        {
                                                            (values.status.workExperience.isValidationFired && errors?.experienced?.[index]?.position) ?
                                                                <div className='text-red-500 mb-4'>
                                                                    Required
                                                                </div>
                                                                : null
                                                        }
                                                    </div>
                                                </div>
                                            })
                                        }
                                        <div className='ExperienceAddORRemoveButtonsContainer  flex justify-center'>
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
                            (errors?.cadidateCategory) ?
                                <div className='text-red-500 mb-4'>
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
                            <button
                                type="button"
                                onClick={backToFirstPage}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Reset Form
                            </button>
                        </div>

                    </div>
                    :
                    null
            }
        </>
    )
}

export default WorkExperience
export {

}