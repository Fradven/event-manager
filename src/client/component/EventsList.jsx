import { decomposeColor } from '@mui/material'
import React from 'react'

export default function EventsList(props) {
    const { name, description, author } = props
    return (
        <>
           <ul className='event'>
            <li className='event__name'>{name}</li>
            <li className='event__author'>{author}</li>
            <li className='event__description'>{description}</li>
            <li className='event__dates'></li>
            <li className='event__attendees'></li>
        </ul> 
        </>
    )
}
