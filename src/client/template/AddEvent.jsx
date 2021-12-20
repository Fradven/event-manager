import React from 'react'

export default function AddEvent() {
    return (
        <form>
            <label htmlFor="eventName">Event name: </label>
            <input type="text" id="eventName"/>
            <label htmlFor="eventdate">Event date: </label>
        </form>
    )
}
