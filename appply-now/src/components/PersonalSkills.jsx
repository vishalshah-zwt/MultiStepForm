import React, { useEffect, useState } from 'react'
import { MyContext } from '../context/ContextAPI'
import { useContext } from 'react'
import Select from 'react-select'
const skills = require('../localdata/skills.json')

function PersonalSkills() {
    const { values, setFieldValue, handleChange, validateForm, errors, database } = useContext(MyContext)

    //OPTIONS FOR FIELD STARTED
    const optionsForField = [
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Arts', label: 'Arts' },
        { value: 'Commerce', label: 'Commerce' },
    ];
    //OPTIONS FOR FIELD ENDED

    //OPTIONS FOR SKILLS STARTED
    const [optionsForSkills, setOptionsForSkills] = useState([])
   /*  const [selectedField, setSelectedField] = useState();
    const [selectedSkills, setSelectedSkills] = useState([]); */
    //OPTIONS FOR SKILLS ENDED


    //EVENT HANDLERS STARTED
    const handlePrevious = () => {
        setFieldValue(values.status.personalSkills.pointer = false)
        setFieldValue(values.status.workExperience.pointer = true)
    }
    const handleNext = () => {
        validateForm();
        setFieldValue(values.status.personalSkills.isValidationFired = (values.status.personalSkills.isValidationFired + 1))

    }

    var skillsOption = [];
    const handleField = (e) => {
        setFieldValue(values.selectedSkills = [])
        setFieldValue(values.personalSkills.field = e.value)
        setFieldValue(values.selectedField = e)
        let field = e.value


        skills[field].map((items) => {
            return skillsOption.push({ value: items, label: items })
        })
        setOptionsForSkills(skillsOption)
        // setOptionsForSkills(values.selectedSkills ='')
        
    }

    const handleSkills = (e) => {
        console.log(e)
        const skills = []
        e.map((items) => {
            skills.push(items.value)
        })
        setFieldValue(values.personalSkills.skills = (skills))
        // setSelectedSkills(e)
        setFieldValue(values.selectedSkills = e)
    }
    //EVENT HANDLERS ENDED

    useEffect(() => {
        if (values.status.personalSkills.isValidationFired) {
            if (!Object.keys(errors).includes('personalSkills')) {
                setFieldValue(values.status.personalSkills.pointer = false)
                setFieldValue(values.status.selfDescription.pointer = true)
                localStorage.setItem('Data', JSON.stringify(values))
            }
        }
    }, [values.status.personalSkills.isValidationFired])


    useEffect(() => {
/* 
        if (dataOfLocalStorage) {
            set
     
        } */


    }, [])
    
    return (
        <>
            {
                values.status.personalSkills.pointer ?
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
                                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Work Experience</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Personal Skills</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Self Description</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className='formContainer my-4 flex gap-4'>
                            <div className=' w-[30%]'>
                                <p
                                    className='font-medium'>
                                    Enter Your Field
                                </p>
                                <Select
                                    value={values.selectedField}
                                    onChange={(e) => handleField(e)}
                                    options={optionsForField}
                                />
                            </div>
                            {
                                (values.status.personalSkills.isValidationFired && errors?.personalSkills?.field) ?
                                    <div className='text-green-500 mb-4'>
                                        Required
                                    </div>
                                    : null
                            }
                            <div className=' w-[30%]'>
                                <p
                                    className='font-medium'>
                                    Enter Your Skills
                                </p>
                                <Select
                                    value={values.selectedSkills}
                                    onChange={(e) => handleSkills(e)}
                                    isMulti
                                    isOptionDisabled={(option) => (values.selectedSkills).length >= 5}
                                    options={optionsForSkills}
                                />
                            </div>
                            {
                                (values.status.personalSkills.isValidationFired && errors?.personalSkills?.skills) ?
                                    <div className='text-green-500 mb-4'>
                                        Required
                                    </div>
                                    : null
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

export default PersonalSkills