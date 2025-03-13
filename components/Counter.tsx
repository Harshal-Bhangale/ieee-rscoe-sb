"use client";
import { useEffect, useState } from "react";

interface CounterProps {
    target: number;
}

const Counter: React.FC<CounterProps> = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 4000; // Slower animation (4 seconds)
        const intervalTime = 50; // Update every 50ms
        const step = Math.ceil((target / duration) * intervalTime);

        const interval = setInterval(() => {
            start += step;
            if (start >= target) {
                start = target;
                clearInterval(interval);
            }
            setCount(start);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [target]);

    return <span>{count}+</span>;
};

export default Counter;
