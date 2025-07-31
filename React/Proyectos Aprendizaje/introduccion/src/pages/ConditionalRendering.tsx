import React, { useState } from 'react';
import Button from '../components/PickButton.tsx';
export default function ConditionalRendering() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="App App-header">
            <p> {counter} </p>
            <div className="--grid --2cols --g30">
                <Button onClick={() => setCounter(counter + 1)} name={"+"} icon={""} />
                <Button onClick={() => { if (counter > 0) setCounter(counter - 1) }} name={"-"} icon={""} />
            </div>
            {counter === 1 ? <p> Con un operador ternario me renderizo si el contador es 1 </p> : <p>Como el contador no es 1, este mensaje se renderiza</p>}
            {counter === 2 && <p> Con un AND me renderizo si el contador es 2 </p>}
        </div>
    );
}