import React, { useContext } from 'react'
import { MyContext } from '../context/ContextAPI'

function SelfDescription() {
    const { values, setFieldValue, handleChange } = useContext(MyContext)
    
    return (
        <div>SelfDescription</div>
    )
}

export default SelfDescription