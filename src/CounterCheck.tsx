import s from "./App.module.css";
import React, {useState} from "react";

type CounterCheckType = {
    startValue: number
    finishValue: number
    changeUp: (e: any) => void
    changeDown: (e: any) => void
    onClick:() => void
}


export function CounterCheck(props: CounterCheckType) {
    return (
        <div>
            <div className={s.tablo}>
                <div>
                    <div className={s.displayCheck}>
                        <div>
                            max value:
                        </div>
                        <div>
                            <input className={props.finishValue < props.startValue ? s.inputred : s.input}
                                   type="number"
                                   onChange={props.changeUp}
                                   value={props.finishValue}
                            />
                        </div>
                        <div>
                            start value:
                        </div>
                        <div>
                            <input className={props.startValue < 0 ? s.inputred : s.input}
                                   type="number"
                                   onChange={props.changeDown}
                                   value={props.startValue}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.button}>
                    <div>
                        <button
                            className={s.button1}
                            onClick={()=>{props.onClick()}}
                            disabled={props.startValue < 0 || props.startValue >= props.finishValue}>set
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

