import React, { useContext, useState } from 'react'
import { MyContext } from '../context/ContextAPI'

function WorkExperience() {
    const { values, setFieldValue, handleChange, handleSubmit } = useContext(MyContext)

    const [experienceFlag, setexperienceFlag] = useState();

    //EVENT HANDLERS STARTED
    const handleNext = () => {
        setFieldValue(values.pointers.workExperience = false)
        setFieldValue(values.pointers.personalSkills = true)
    }

    const handlePrevious = () => {
        setFieldValue(values.pointers.workExperience = false)
        setFieldValue(values.pointers.personalDetails = true)
    }

    const handleExperience = (e) => {
        if (e.target.value === 'Experience') return setexperienceFlag(true)
        else return setexperienceFlag(false)
    }

    const handleExperienceCount = (e) => {
        setFieldValue(values.workExperience.experience.push({ orgName: '', startDate: '', endDate: '', position: '' }))
    }
    //EVENT HANDLERS ENDED

    return (

        <>
            {
                values.pointers.workExperience ?
                    <div className='WorkExperienceContainer container  my-16 mx-auto'>
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
                                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Personal Details</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Work Experience</a>
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


                        <div className='WorkExperienceContainer '>

                            <div className='Fresher'>
                                <input
                                    type='button'
                                    value='Fresher'
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    onClick={(e) => handleExperience(e)}
                                />
                            </div>

                            <div className='Experience'>
                                <input
                                    type='button'
                                    value='Experience'
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                    onClick={(e) => handleExperience(e)}
                                />
                            </div>
                            {
                                experienceFlag ?
                                    <div className='ExperienceContainer'>

                                        <div className='ExperienceCountContainer'>

                                            <div className='ExperienceCount'>
                                                <div className='organizationNameContainer flex mx-4 my-4 align-center justify-center inline'>
                                                    <label for="personalDetails.name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white  my-2.5 mx-4">
                                                        Organization Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30%]"
                                                        placeholder="TechCompany"
                                                        name="workExperience.experience[0].orgName"
                                                        value={values?.workExperience.experience[0]?.orgName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
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
                                            </div>

                                            {
                                                values?.workExperience.length > 1 ?

                                                    <>

                                                        {values?.workExperience?.slice(0).map((val) => {

                                                            <div className='ExperienceCount'>
                                                                <div className='OrganizationName flex mx-4 my-4 align-center justify-center inline'>
                                                                    <label for="personalDetails.name" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white  my-2.5 mx-4">
                                                                        Organization Name:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[30%]"
                                                                        placeholder="TechCompany"
                                                                        name="workExperience.experience[0].orgName"
                                                                        value={values?.workExperience.experience[0]?.orgName}
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                                <div className='Date flex mx-4 my-4 align-center justify-center inline'>
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
                                                                </div>
                                                                <div className='Position flex mx-4 my-4 align-center justify-center inline'>
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
                                                            </div>
                                                        })
                                                        }
                                                    </>
                                                    :
                                                    null
                                            }

                                        </div>

                                        <button
                                            type="button"
                                            onClick={handleExperienceCount}
                                            className="text-white mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                        >
                                            Add More
                                        </button>

                                    </div>
                                    :
                                    null
                            }
                        </div>
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
                    :
                    null
            }
        </>
    )
}

export default WorkExperience