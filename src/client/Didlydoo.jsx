import React, { useState } from 'react'
import Events from './template/Events'
import AddEvent from './template/AddEvent'
import { Button } from '@mui/material'

export default function Didlydoo() {
    const [running, setRunning] = useState(false)

    function runStatus() {
        setRunning(!running)
      }
    
    return (
        <>
        {/* header */}
            <div className="header">
                <h1 className='header__title' >Event Manager</h1> 
                <div className="header_btnctn">
                <Button className='header__btn' onClick={runStatus}>{!running ? "Add New Event" : "cancel" } </Button>
                </div>
            </div>
        {/* main body */}
            <div className='main'>
                {!running ? <Events /> : <AddEvent />}
            </div>
        </>
    )
}