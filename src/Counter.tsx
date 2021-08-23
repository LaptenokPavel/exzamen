import s from "./App.module.css";
import React, {useState} from "react";
import {Button} from "./Button";


type CounterType = {
    startValue: number
    finishValue: number
    startValueCounter: number
    finishValueCounter: number
    inc: boolean
    reset: boolean
    incButton: () => void
    resetButton: () => void
}

export function Counter(props: CounterType) {

    return (
        <div className={s.tablo}>


            <div>
                <input
                    value={(props.startValue < 0 || props.startValue >= props.finishValue) ? 'Error' : props.startValueCounter}
                    className={
                        (props.startValue < 0 || props.startValue >= props.finishValue) ? s.displayEnd : s.display}
                />
            </div>
            <div className={s.button}>
                <div>
                    <Button value={'inc'}
                            onClick={props.incButton}
                            disabled={props.inc}
                    />
                </div>
                <div>
                    <Button value={'reset'}
                            onClick={props.resetButton}
                            disabled={props.reset}/>
                </div>
            </div>
        </div>
    )
}

