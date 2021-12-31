import Child2 from './Child2';
import React, { useState, useEffect } from 'react';

const Child1 = () => {
    const [count, setCount] = useState(0);
    const [click, setClick] = useState(-1);

    const addCount = () => {
        setCount(count + 1);
    };

    const minCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const resetCount = () => {
        if (count > 0) {
            setCount(0);
        }
    };

    useEffect(() => {
        const clickCounter = () => {
            if (click < 6) {
                const newClick = click + 1;
                setClick(newClick);
                if (newClick === 5) {
                    alert('You have update 5 times');
                    setClick(0);
                }
            }
        }
        clickCounter();
    }, [count]);

    return (
        <>
        <h3>Counter</h3>
        <div>value is <span className='oddeven'>{count % 2 === 0 ? 'Even' : 'Odd'}</span></div>
        <h2>{count}</h2>
        <button onClick={addCount}>ADD</button>
        <button onClick={minCount}>MIN</button>
        <button onClick={resetCount}>RESET</button>
        <Child2 count={count} />
        </>
    );
};

export default Child1;