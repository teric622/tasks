import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * The ShoveBox component provides a button that moves an adjacent box farther away, 
 * by increasing the boxes left margin.

Currently, part of the component’s returned body is commented
 out because it is broken and crashes your application. 
 Uncomment the component’s body in src/ShoveBox.tsx and then 
 fix the Component so that it works correctly.

You must NOT add or remove components; you can only modify the existing components.
 * 
 *  
 */

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    console.log(position);
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({ newPosition }: { newPosition: number }): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: newPosition + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
            </div>
            <MoveableBox newPosition={position}></MoveableBox>
        </div>
    );
}
