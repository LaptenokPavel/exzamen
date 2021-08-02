import s from "./App.module.css";
import React, {ChangeEvent} from "react";
import {Button} from "./Button";

export type CounterPropsType = {
    data: number
    setData: (data:number)=>void
    startValue: number
    finishValue: number

}

export function CounterCheck(props:CounterPropsType) {
    const changeUp = (e: any) => {
            let value = props.setData(e.currentTarget.value);
if (props.data === 0)
    alert("jjjjjj")
    }
        return (
            <div className={s.tablo}>
                <div>
                    <div className={s.displayCheck}>
                        <div>
                            max value:
                        </div>
                        <div>
                            <input className={s.input}
                                   type="number"
                                   onChange={changeUp}
                                   value={props.data}

                            />
                        </div>
                        <div>
                            start value:
                        </div>
                        <div>
                            <input className={s.input} type="number"
                                   />
                        </div>
                    </div>

                </div>
                <div className={s.button}>
                    <Button

                        name={'set'}
                    />
                </div>
            </div>
        )

}

