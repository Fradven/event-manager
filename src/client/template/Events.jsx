import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios';
import EventsList from '../component/EventsList';

export default function Events() {
 const [events, setEvents] = useState([]);
 const [attendees, setAttendees] = useState([]);

 const getEvents = async() => {
     const response = await axios.get("events")
     const resAttendees = await axios.get("attendees")
     
     if (response && response.data) setEvents(response.data); 
     if (resAttendees && resAttendees.data) setAttendees(resAttendees.data); 
    }
    
 useEffect(() => {
    getEvents()
 }, [])


    return (
        <>
            <h2 className="event__title">Upcomming Events!</h2>
            <div className="event">

            {(events.length == 0) ? 'loading' : events.map(event=>
            <EventsList key={event.id} 
                        name={event.name} 
                        author={event.author} 
                        description={event.description} 
                        dates={event.dates}
            />)}
            </div>
        </>
    )
}
