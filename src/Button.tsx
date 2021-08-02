import s from "./App.module.css";
import React from "react";

export type ButtonType = {
    onClick?: () => void
    onClickReset?: () => void
    data?: number
    startValue?: number
    finishValue?: number
    name?: string
}
export const Button = (props: ButtonType) => {

    return (
        <div >
            <button disabled={props.data === props.finishValue}
                    className={s.button1}
                    onClick={props.onClick}>{props.name}
            </button>
        </div>
    )
}