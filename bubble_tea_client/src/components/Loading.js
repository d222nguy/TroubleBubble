import React from 'react'

export default function Loading(){
    return(
        <div>
            <div className="spinner-border text-success" role="status" style = {{height: '100px', width: '100px', marginTop: '100px'}}>
                <span className="sr-only">Retrieving our menu...</span>
            </div>
        </div>

    )
}