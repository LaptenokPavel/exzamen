import s from "./App.module.css";
import React from "react";

export type ButtonType = {
value:string
    onClick: () => void
    disabled: boolean
}


export const Button = (props: ButtonType) => {
const onClickButton = () => {
    props.onClick()
}

    return (
<div>
    <button className={s.button1}
    onClick={onClickButton}
    disabled={props.disabled}
    >
        {props.value}
</button>
       </div>
    )
}