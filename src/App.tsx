import React, {ChangeEvent, useState} from 'react';
import {CounterCheck} from "./CounterCheck";
import {Counter} from "./Counter";
import s from "./App.module.css";


function App() {

    let [startValue, setStartValue] = useState<number>(0);
    let [finishValue, setFinishValue] = useState<number>(0);

    let [startValueCounter, setStartValueCounter] = useState<number>(0);
    let [finishValueCounter, setFinishValueCounter] = useState<number>(5);

    const onClick = () => (
        startValueCounter = startValue,
            finishValueCounter = finishValue,
            setStartValueCounter(startValueCounter),
            setFinishValueCounter(finishValueCounter)
    )


    const changeUp = (e: any) => {
        setFinishValue(e.currentTarget.value)
    }
    const changeDown = (e: any) => {
        setStartValue(e.currentTarget.value)
    }

    const incButton = () => (setStartValueCounter(startValueCounter++))
    const resetButton = () => (setStartValueCounter(0))

    return (
        <div className={s.counter}>
            <div>
                <CounterCheck
                    startValue={startValue}
                    finishValue={finishValue}
                    changeUp={changeUp}
                    changeDown={changeDown}
                    onClick={onClick}
                />
            </div>
            <div>
                <Counter
                    startValueCounter={startValueCounter}
                    finishValueCounter={finishValueCounter}
                    incButton={incButton}
                    resetButton={resetButton}
                />
            </div>

        </div>
    )
}

export default App;