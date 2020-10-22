import React, { useState, useEffect} from 'react'

const Pipeline = () => {
    const [PipelineNumber, setPipelineNumber] = useState('24')
    const [Bullet, setBullet] = useState('');

    useEffect(() => {
        let number;
        number = (PipelineNumber / 100) * 70;
        setBullet(number);
  });

    return (
        <div>
            <h1>De pipeline: {PipelineNumber}</h1>
            <h1>De bullet: {Bullet}</h1>
        </div>
    );
};

export default Pipeline;