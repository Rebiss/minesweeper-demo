import React, { useRef } from 'react';
import './Min.css';

export const Min = () => {
    const grid = useRef(null),
        flagsLeft = useRef(null),
        result = useRef(null);

    return (
        <>
            <div className='game-center'>
                <div className="container">
                    <div>Flags: <span ref={flagsLeft} id='flags-left'/> </div>
                    <div ref={grid}  className="grid" />
                    <div rf={result} id="result" />
                    
                </div> 
            </div>
        </>
    )
}