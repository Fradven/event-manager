import { decomposeColor } from '@mui/material'
import React from 'react'

export default function EventsList({data}) {
    
    return (
        <>
        <div className="event__ctn">
            <ul className="event__list">
                <li className='event__name'>{data.name}</li>
                <li className='event__author'>{data.author}</li>
                <li className='event__description'>{data.description}</li>
                <li className='event__dates'></li>
                <li className='event__attendees'></li>
            </ul>
        </div>
        </>
    )
}
