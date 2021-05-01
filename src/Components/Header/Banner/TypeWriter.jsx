import React from 'react';
import Typewriter from 'typewriter-effect';
import "./TypeWriter.css"

const TypeWriter = () => {
    return (
        <div className="type" style={{fontSize:"2rem",fontFamily:`Original Surfer ,cursive`,display:"inline-block"}}>
            <Typewriter 
                options={{
                    strings: ['I Love To Develop....', 'I Love To Programming....'],
                    autoStart: true,
                    loop: true,
                    
                }}
            />
        </div>
    );
};

export default TypeWriter;