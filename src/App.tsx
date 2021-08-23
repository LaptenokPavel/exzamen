import React, {ChangeEvent, useEffect, useState} from 'react';
import {CounterCheck} from "./CounterCheck";
import {Counter} from "./Counter";
import s from "./App.module.css";


function App() {

    let [startValue, setStartValue] = useState<number>(0);
    let [finishValue, setFinishValue] = useState<number>(0);

    useEffect(()=>{
        let valueAsString = localStorage.getItem('valueStart')
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('valueStart', JSON.stringify(startValue))
    }, [startValue])


    useEffect(()=>{
        let valueAsString = localStorage.getItem('valueFinish')
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setFinishValue(newValue)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('valueFinish', JSON.stringify(finishValue))
    }, [finishValue])

    let [startValueCounter, setStartValueCounter] = useState<number>(0);

    let [finishValueCounter, setFinishValueCounter] = useState<number>(0);


    useEffect(()=>{
        let valueAsString = localStorage.getItem('valueCounterStart')
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setStartValueCounter(newValue)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('valueCounterStart', JSON.stringify(startValueCounter))
    }, [startValueCounter])


    useEffect(()=>{
        let valueAsString = localStorage.getItem('valueCounterFinish')
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setFinishValueCounter(newValue)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('valueCounterFinish', JSON.stringify(finishValueCounter))
    }, [finishValueCounter])


    let [inc, setInc] = useState(false)
    let [reset, setReset] = useState(false)
    let [set, setSet] = useState(false)


    const onClick = () => (
        startValueCounter = startValue,
            finishValueCounter = finishValue,
            setStartValueCounter(startValueCounter),
            setFinishValueCounter(finishValueCounter)
    )


    const changeUp = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFinishValue(+e.currentTarget.value)
    }
    const changeDown = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const incButton = () => {
        setStartValueCounter(startValueCounter++)
    }

    const resetButton = () => (setStartValueCounter(startValue))


    if (startValueCounter === finishValueCounter) {
         inc = true
    }

    if (startValue < 0 || startValue >= finishValue) {
         set = true
    }


    return (
        <div className={s.counter}>
            <div>
                <CounterCheck
                    startValue={startValue}
                    finishValue={finishValue}
                    set={set}
                    changeUp={changeUp}
                    changeDown={changeDown}
                    onClick={onClick}
                />
            </div>
            <div>
                <Counter
                    startValue={startValue}
                    finishValue={finishValue}
                    startValueCounter={startValueCounter}
                    finishValueCounter={finishValueCounter}
                    inc={inc}
                    reset={reset}
                    incButton={incButton}
                    resetButton={resetButton}
                />
            </div>

        </div>
    )
}

export default App;