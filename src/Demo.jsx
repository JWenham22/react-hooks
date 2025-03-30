import { useEffect, useState } from 'react';

const Demo = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // The code we want to run
        console.log("The count is:", count);

        // Optional return function
        return () => {
            console.log('I am being cleaned up!');
        };
    }, [count]); // The dependency array 

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Subtract</button>
        </div>
    );
};

export default Demo;