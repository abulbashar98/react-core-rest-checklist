import React, { useState } from 'react';

const Mobile = () => {
    const [percentage, setPercentage] = useState(100)
    const decreasePercentage = () => {
        if (percentage > 0) {
            setPercentage(percentage - 10)
        }
        else {
            return;
        }
    };
    return (
        <div>
            <h3>Battery Percentage: {percentage}</h3>
            <button onClick={decreasePercentage}>Battery Down</button>
        </div>
    );
};

export default Mobile;