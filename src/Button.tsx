import s from "./App.module.css";
import React from "react";

export type ButtonType = {
    name: string
    startValue: number
    finishValue:number
    onClick: (name:string)=>void
}


export const Button = (props: ButtonType) => {

    return (
<div></div>
    )
}