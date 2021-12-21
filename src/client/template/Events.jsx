import React, { useState, useEffect } from 'react';
import { axios } from '../component/axios';
import EventsList from '../component/EventsList';

export default function Events() {
 const [events, setEvents] = useState([]);

 const noEvents = !events || (events && events.length === 0)

 const getEvents = async() => {
     const response = await axios.get("events")
     
     if (response && response.data) setEvents(response.data); 
    }
    
    console.log(events[0].name)
 useEffect(() => {
    getEvents()
 }, [])


    return (
        <>
        <div className="events">
            <h2 className="event__title">Upcomming Events!</h2>
            {events.map(object => {
                <EventsList name={object.name} description={object.description} author={object.author} />
            })}
        </div>
        </>
    )
}
