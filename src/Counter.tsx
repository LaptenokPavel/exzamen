import s from "./App.module.css";
import React from "react";
import {Button} from "./Button";

export type CounterPropsType = {
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
                <Button onClick={incButton}
                       data={props.data}
                       finishValue={props.finishValue}
                       name={'inc'}
            />
                <Button onClick={resetButton}
                        data={props.data}
                        startValue={props.startValue}
                        name={'reset'}
                />
            </div>


        </div>
    )
}



