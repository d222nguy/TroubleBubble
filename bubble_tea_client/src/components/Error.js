import React from 'react'

export default function Error({error}){
    return(
        <div>
            <div className="alert alert-danger">
            <strong>{error}</strong>
            </div>
        </div>
    )
}