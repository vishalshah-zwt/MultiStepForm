import React, { useContext, useEffect } from 'react'
import { MyContext } from '../context/ContextAPI'
import TextareaAutosize from 'react-textarea-autosize';
function SelfDescription() {
    const { values, setFieldValue, handleChange, validateForm, errors ,database , handleSubmit } = useContext(MyContext)




    //EVENT HANDLERS STARTED

    const handlePrevious = () => {
        setFieldValue(values.status.selfDescription.pointer = false)
        setFieldValue(values.status.personalSkills.pointer = true)
    }

    const handleCustomSubmit = (e) =>{
        // console.log(values.status.selfDescription.isValidationFired,"&&&&&")
        setFieldValue(values.status.selfDescription.isValidationFired = ( values.status.selfDescription.isValidationFired + 1 ) ) 
    }
 
    //EVENT HANDLERS ENDED 
    return (
        <>
            {
                (values.status.selfDescription.pointer) ?
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
                                                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Personal Skills</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" >Self Description</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className='selfDescriptionContainer  container mx-auto w-[80%] flex justify-center align-center'>
                            <form onSubmit={handleSubmit} className='w-[60%] border'>
                            <div className=' w-[100%] border'>
                                <p className='font-medium mb-2'>
                                    Self Description:
                                </p>
                                <TextareaAutosize
                                    className=' w-[100%] border'
                                    minRows={3}
                                    maxRows={6}
                                    placeholder="From here I am Starting My Self Description..."
                                    value={values.selfDescription}
                                    onChange={handleChange}
                                    name='selfDescription'
                                />
                            </div>
                            {
                                ( values.status.selfDescription.isValidationFired && errors?.selfDescription) ?
                                    <div className='text-green-500 mb-4'>
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
                                type="submit" 
                                onClick={handleCustomSubmit}
                                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Submit
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