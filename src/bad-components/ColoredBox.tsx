import React, { useState } from "react";
import { Button } from "react-bootstrap";
/**
The ColoredBox component provides a single button that cycles through a list of colors, updating a box off to its right.

Currently, the component does not work, since the box always stays the same color when clicked. 
Fix the state so the component works correctly.

You must NOT add or remove components; you can only modify the existing components.

// essentialy, make it so that when user clicks button, color of box changes

THE THING THAT IS BROKEN IS THAT THE STATE OF COLOR INDEX IS NOT BEING UPDATED CORRECTLY WITH 
SIBLING COMPONENT COLOR PREVIEW, color preview can not acess the value of color.
 */
export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

// child component
// { double }: { double: () => void
function ChangeColor({ getIndex }: { getIndex: () => void }): JSX.Element {
    // const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    // this one will change the color value
    // console.log(COLORS[0], COLORS[1], COLORS[2]);
    // console.log(colorIndex);
    return <Button onClick={getIndex}>Next Color</Button>;
}
// child component
function ColorPreview({ newIndex }: { newIndex: number }): JSX.Element {
    // this one will take care of changing the color
    // should be colors[colorIndex]
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[newIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

// parent component
export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    getIndex={() => {
                        setColorIndex((1 + colorIndex) % COLORS.length);
                    }}
                ></ChangeColor>
                <ColorPreview newIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
