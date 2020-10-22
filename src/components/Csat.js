import React, { useState} from 'react'

const Csat = () => {
    const [CsatNumber, setCsatNumber] = useState('12');
    return (
        <div>
            <h1>CSAT: {CsatNumber}</h1>
        </div>
    );
};

export default Csat;