import React, { useEffect, useState } from 'react'
import { MyContext } from '../context/ContextAPI'
import { useContext } from 'react'
import Select from 'react-select'
const skills = require('../localdata/skills').Skills

function PersonalSkills() {
    const { values, setFieldValue, handleChange, validateForm, errors, database, setActiveState, dataOfLocalStorage, activeState, handleReset, backToFirstPage } = useContext(MyContext)

    //OPTIONS  STARTED
    const optionsForField = [
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Arts', label: 'Arts' },
        { value: 'Commerce', label: 'Commerce' },
    ];

    const [optionsForSkills, setOptionsForSkills] = useState([])
    //OPTIONS ENDED





    /*   useEffect(()=>{
          setFieldValue(values.selectedSkills = [])
          setFieldValue(values.personalSkills.skills = [])
          setFieldValue(values.personalSkills.field = e.value)
          setFieldValue(values.selectedField = e)
          let field = e.value
  
  
          skills[field].map((items) => {
              return skillsOption.push({ value: items, label: items })
          })
          setOptionsForSkills(skillsOption)
      },[]) */
    //EVENT HANDLERS STARTED

    const handleNext = async () => {
        const error = await validateForm()
        if (Object.keys(error).length === 0) {
            setFieldValue(values.status.personalSkills.pointer = false)
            setFieldValue(values.status.selfDescription.pointer = true)
            localStorage.setItem('Data', JSON.stringify(values))
            setActiveState(3)
            localStorage.setItem('activeState', JSON.stringify(3))
        }
        setFieldValue(values.status.personalSkills.isValidationFired = (values.status.personalSkills.isValidationFired + 1))
    }
    const handlePrevious = () => {
        setFieldValue(values.status.personalSkills.pointer = false)
        setFieldValue(values.status.workExperience.pointer = true)
        setActiveState(1)
        localStorage.setItem('activeState', JSON.stringify(1))
        localStorage.setItem('Data', JSON.stringify(values))
    }


    var skillsOption = [];
    const handleField = (e) => {
        setFieldValue(values.selectedSkills = [])
        setFieldValue(values.personalSkills.skills = [])
        setFieldValue(values.personalSkills.field = e.value)
        setFieldValue(values.selectedField = e)

    }

    const handleSkills = (e) => {
        console.log(e)
        const skills = []
        e.map((items) => {
            skills.push(items.value)
        })
        setFieldValue(values.personalSkills.skills = (skills))
        setFieldValue(values.selectedSkills = e)
    }
    //EVENT HANDLERS ENDED





    return (
        <>
            {
                values.status.personalSkills.pointer ?
                    <div className='WorkExperienceContainer container  my-16 mx-auto'>
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
                                ((values.status.personalSkills.isValidationFired > 0) && errors?.personalSkills?.field) ?
                                    <div className='text-green-500 mb-4'>
                                        Required
                                    </div>
                                    : null
                            }
                            {
                                    console.log(values.selectedField.label,"************")
                            }
                            {
                                ( (values?.selectedField?.label !== undefined)  && (values?.selectedField?.label !== 'Finance')) ?

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
                                            options={skills[values.selectedField.label]}
                                        />
                                    </div>
                                    :
                                    null
                            }
                            {
                                ((values.status.personalSkills.isValidationFired > 0) && errors?.personalSkills?.skills) ?
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

export default PersonalSkills