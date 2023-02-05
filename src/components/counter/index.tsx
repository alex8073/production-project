import {useCallback, useState} from "react";
import classes from "./style.module.scss";


export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
            setCount(prev => prev + 1)
        },
        [setCount]
    );

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment} className={classes.btn}>increase</button>
        </>
    )
}
