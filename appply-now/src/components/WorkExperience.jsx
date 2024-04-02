import React, { useContext } from 'react'
import { MyContext } from '../context/ContextAPI'

function WorkExperience() {
    const { values, setFieldValue, handleChange } = useContext(MyContext)
    
    return (
        <div>WorkExperience</div>
    )
}

export default WorkExperience