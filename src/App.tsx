import React, {useState} from 'react';
import s from'./App.module.css';
import {Counter} from "./Counter";
import {CounterCheck} from "./CounterCheck";

function App() {
    let startValue = 0;
    let finishValue = 5;

    let [data, setData] = useState<number>(startValue);


    return (
        <div className={s.counter}>
            <div><CounterCheck
                data={data}
                setData={setData}
                startValue={startValue}
                finishValue={finishValue}
            />
            </div>
            <div><Counter
                data={data}
                setData={setData}
                startValue={startValue}
                finishValue={finishValue}
            /></div>

        </div>
    )
}

export default App;