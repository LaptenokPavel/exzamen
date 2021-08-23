import s from "./App.module.css";
import React, {useState} from "react";
import {Button} from "./Button";

type CounterCheckType = {
    startValue: number
    finishValue: number
    set:boolean
    changeUp: (e: React.ChangeEvent<HTMLInputElement>) => void
    changeDown: (e: React.ChangeEvent<HTMLInputElement>) => void
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
                            <input className={props.finishValue <= props.startValue ? s.inputred : s.input}
                                   type='number'
                                   onChange={props.changeUp}
                                   value={props.finishValue}
                            />
                        </div>
                        <div>
                            start value:
                        </div>
                        <div>
                            <input className={props.startValue < 0 ||  props.startValue >= props.finishValue? s.inputred : s.input}
                                   type='number'
                                   onChange={props.changeDown}
                                   value={props.startValue}
                            />
                        </div>
                    </div>
                </div>
                <div className={s.button}>
                    <div>
                      <Button
                          value={'set'}
                          onClick={props.onClick}
                          disabled={props.set}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


