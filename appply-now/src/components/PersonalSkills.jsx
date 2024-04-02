import React from 'react'
import { MyContext } from '../context/ContextAPI'
import { useContext } from 'react'

function PersonalSkills() {
    const { values, setFieldValue, handleChange } = useContext(MyContext)
    
    return (
        <div>PersonalSkills</div>
    )
}

export default PersonalSkills