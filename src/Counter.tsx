import s from "./App.module.css";
import React from "react";

type CounterPropsType = {
    data: number
    setData: (data: number) => void
    startValue: number
    finishValue: number

}

export function Counter(props: CounterPropsType) {

    const incButton = () => (props.setData(props.data + 1))
    const resetButton = () => (props.setData(props.startValue))

    return (
        <div className={s.tablo}>
            <div className={
                props.data === props.finishValue ? s.displayEnd : s.display}>
                <div className={s.number}>{props.data}</div>
            </div>

            <div className={s.button}>
                <button disabled={props.data === props.finishValue}
                        className={s.button1}
                        onClick={incButton}>inc
                </button>
                <button disabled={props.data === props.startValue}
                        className={s.button1}
                        onClick={resetButton}>reset
                </button>
            </div>
        </div>
    )
}


