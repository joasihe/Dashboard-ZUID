import React, { useState, useEffect} from 'react'

const Pipeline = (props) => {
    const [Bullet, setBullet] = useState('');

    useEffect(() => {
        let number;
        number = (props.pipeline / 100) * 70;
        setBullet(number);
  });

    return (
        <div>
            <h1>De pipeline: {props.pipeline}</h1>
            <h1>De bullet: {Bullet}</h1>
        </div>
    );
};

export default Pipeline;