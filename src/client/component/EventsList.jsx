import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

export default function EventsList({name, author, description, dates}) {
        const columns = [
            { field: 'name', headerName: 'Name', width: 120 },
        ]
        dates.map(date =>(
         columns.push ({ field: `${date.date}`, headerName: `${date.date}`, width: 100 })
         
        )) 
        
        const rows = [
            
        ]
    return (
        <>
        <div className="event__ctn">
                <h3 className='event__name'>{name}</h3>
                <p className='event__author'>{author}</p>
                <p className='event__description'>{description}</p>
                <DataGrid
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                />
        </div>
        </>
    )
}
