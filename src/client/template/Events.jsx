import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios';
import EventsList from '../component/EventsList';

export default function Events() {
 const [events, setEvents] = useState([]);

 const getEvents = async() => {
     const response = await axios.get("events")
     
     if (response && response.data) setEvents(response.data); 
     console.log(events)
    }
    
 useEffect(() => {
    getEvents()
 }, [])


    return (
        <>
            <h2 className="event__title">Upcomming Events!</h2>
            <div className="event">

            {(events.length == 0) ? 'loading' : events.map(event=><EventsList key={event.id} data={event}/>)}
            </div>
        </>
    )
}
