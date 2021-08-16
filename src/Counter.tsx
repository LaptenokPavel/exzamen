import s from "./App.module.css";
import React, {useState} from "react";


type CounterType = {
    startValueCounter: number
    finishValueCounter: number
    incButton: () => void
    resetButton: () => void
}

export function Counter(props: CounterType) {
    return (
        <div className={s.tablo}>
            <div className={
                props.startValueCounter == props.finishValueCounter ? s.displayEnd : s.display}>
                <div className={s.number}>
                    {props.startValueCounter}</div>
            </div>
            <div className={s.button}>
                <div>
                    <button
                        className={s.button1}
                        onClick={()=>{props.incButton()}}
                        disabled={props.startValueCounter == props.finishValueCounter}
                    >ins
                    </button>
                </div>
                <div>
                    <button
                        className={s.button1}
                        onClick={()=>{props.resetButton()}}
                    >reset
                    </button>
                </div>
            </div>
        </div>
    )
}



