import React, {useState} from 'react';
import './App.module.css';
import {Counter} from "./Counter";



function App() {
    let startValue = 0;
    let finishValue = 5;

    let [data, setData] = useState<number>(startValue);


   return (
       <div>
           <h2>Hello</h2>
           <h3>word!</h3>
           <h4>YO</h4>

<Counter
    data={data}
    setData={setData}
    startValue={startValue}
    finishValue={finishValue}
/>
</div>
    )
}
export default App;