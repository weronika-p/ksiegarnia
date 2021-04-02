import React from 'react';

export default function ErrorComponent({errorCode, errorMessage}) {
    return(
        <>
        <h1>{errorCode}</h1>
        <h2>{errorMessage}</h2>
        </>
    )
}