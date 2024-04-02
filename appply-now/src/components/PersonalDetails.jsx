import React, { useContext } from 'react'
import { MyContext } from '../context/ContextAPI'

function PersonalDetails() {
    const { values, setFieldValue, handleChange } = useContext(MyContext)

    return (
        <>
            Hi
        </>
    )
}

export default PersonalDetails