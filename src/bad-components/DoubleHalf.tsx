import React, { useState } from "react";
import { Button } from "react-bootstrap";
/**
 * 
 *Fix DoubleHalf
The DoubleHalf component provides two buttons. 
One doubles the value, the other halves the value.

Currently, the component is commented out because it is broken and crashes your application. 
Uncomment the component’s instantiation in src/App.tsx, and then fix the Component 
so that it works correctly.

You must NOT add or remove components; you can only modify the existing components. 
Hint: You are free to delete files if they serve no purpose, though…
 */
function Doubler({ double }: { double: () => void }): JSX.Element {
    return <Button onClick={double}>Double</Button>;
}

function Halver({ half }: { half: () => void }): JSX.Element {
    return <Button onClick={half}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [number, setNumber] = useState(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{number}</span>
            </div>
            <Doubler
                double={() => {
                    setNumber(number * 2);
                }}
            ></Doubler>
            <Halver
                half={() => {
                    setNumber(number * 0.5);
                }}
            ></Halver>
        </div>
    );
}
