import s from "./App.module.css";
import React, {useState} from "react";
import {Button} from "./Button";


type CounterType = {
    startValueCounter: number
    finishValueCounter: number
    inc:boolean
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
                    <Button value={'inc'}
                            onClick={props.incButton}
                            disabled={props.inc}
                    />

                </div>
                <div>
                    <button
                        className={s.button1}
                        onClick={() => {
                            props.resetButton()
                        }}
                    >reset
                    </button>
                </div>
            </div>
        </div>
    )
}


