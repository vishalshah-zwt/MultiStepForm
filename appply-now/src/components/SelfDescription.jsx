import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../context/ContextAPI'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from 'react-draft-wysiwyg';
function SelfDescription() {
    const { values, setFieldValue, handleChange, validateForm, errors, database, handleSubmit, activeState, setActiveState, handleReset, backToFirstPage } = useContext(MyContext)




    //EVENT HANDLERS STARTED

    /* const handlePrevious = () => {
        setFieldValue(values.status.personalSkills.pointer = false)
        setFieldValue(values.status.workExperience.pointer = true)
        setActiveState(1)
        localStorage.setItem('activeState', JSON.stringify(activeState))
        localStorage.setItem('Data', JSON.stringify(values))
    } */

    const handlePrevious = () => {
        setFieldValue(values.status.selfDescription.pointer = false)
        setFieldValue(values.status.personalSkills.pointer = true)
        setActiveState(2)
        localStorage.setItem('activeState', JSON.stringify(2))
        localStorage.setItem('Data', JSON.stringify(values))
    }

    const handleCustomSubmit = (e) => {
        setFieldValue(values.status.selfDescription.isValidationFired = (values.status.selfDescription.isValidationFired + 1))

    }

    const handleCustomEditorChange = (e) => {
        setFieldValue('selfDescription', e?.blocks[0]?.text)
    }
    //EVENT HANDLERS ENDED 
    return (
        <>
            {
                (values.status.selfDescription.pointer) ?
                    <div className='WorkExperienceContainer container  my-16 mx-auto'>

                        <div className='selfDescriptionContainer  container mx-auto w-[80%] flex justify-center align-center'>
                            <form onSubmit={handleSubmit} className='w-[60%] border'>
                                <div className=' w-[100%] border'>
                                    <p className='font-medium mb-2'>
                                        Self Description:
                                    </p>
                                    {/*  <TextareaAutosize
                                        className=' w-[100%] border'
                                        minRows={3}
                                        maxRows={6}
                                        placeholder="From here I am Starting My Self Description..."
                                        value={values.selfDescription}
                                        onChange={handleChange}
                                        name='selfDescription'
                                    /> */}
                                    <Editor
                                        value={values?.selfDescription}
                                        name='selfDescription'
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onChange={handleCustomEditorChange}
                                    // onEditorStateChange={() => this.state.editorState.getCurrentContent().getPlainText()}
                                    />
                                </div>
                                {
                                    (values.status.selfDescription.isValidationFired && errors?.selfDescription) ?
                                        <div className='text-red-500 mb-4'>
                                            Required
                                        </div>
                                        : null
                                }
                            </form>
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
                                onClick={() => { handleCustomSubmit(); handleSubmit() }}
                                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Submit
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

export default SelfDescription