import React, { useState } from "react";
import { Form } from "react-bootstrap";

/**
 * 
 *
 * 
The ChangeColor component offers the user a bunch of radio buttons labeled with different colors; choosing a radio button updates the text and color of a nearby box of text.

You will need state to represent the chosen color
You are free to make up your own list of colors, but you must have AT LEAST 8 unique colors.
Each color must be represented by a radio button.
There should be a box of text with a data-testid="colored-box" attribute and value.
The box of text should have the same text and backgroundColor style as the currently selected radio button.
HINT: We strongly recommend you use map to render all the color’s Form.Check tags rather than hardcoding each one!

HINT: We recommend you use the inline attribute for the radio buttons
 */

export function ChangeColor(): JSX.Element {
    // child component
    function ColorPreview({ newIndex }: { newIndex: string }): JSX.Element {
        // this one will take care of changing the color
        // should be colors[colorIndex]
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "40px",
                    backgroundColor: newIndex,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                {newIndex}
            </div>
        );
    }

    function updateState(event: React.ChangeEvent<HTMLInputElement>) {
        setResponse(event.target.value);
    }

    function ColorPreview1({ newIndex }: { newIndex: string }): JSX.Element {
        // this one will take care of changing the color
        // should be colors[colorIndex]
        return (
            <div
                style={{
                    width: "50px",
                    height: "40px",
                    backgroundColor: newIndex,
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            >
                {newIndex}
            </div>
        );
    }
    const [response, setResponse] = useState<string>(" ");
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateState}
                id="response-good"
                label={<ColorPreview1 newIndex={"red"}></ColorPreview1>}
                value="red"
                checked={response === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateState}
                id="response-bad"
                label={<ColorPreview1 newIndex={"blue"}></ColorPreview1>}
                value="blue"
                checked={response === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateState}
                id="response-bad"
                label={<ColorPreview1 newIndex={"green"}></ColorPreview1>}
                value="green"
                checked={response === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateState}
                id="response-bad"
                label={<ColorPreview1 newIndex={"orange"}></ColorPreview1>}
                value="orange"
                checked={response === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateState}
                id="response-bad"
                label={<ColorPreview1 newIndex={"purple"}></ColorPreview1>}
                value="purple"
                checked={response === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateState}
                id="response-bad"
                label={<ColorPreview1 newIndex={"cyan"}></ColorPreview1>}
                value="cyan"
                checked={response === "cyan"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateState}
                id="response-bad"
                label={<ColorPreview1 newIndex={"yellow"}></ColorPreview1>}
                value="yellow"
                checked={response === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={updateState}
                id="response-bad"
                label={<ColorPreview1 newIndex={"white"}></ColorPreview1>}
                value="white"
                checked={response === "white"}
            />
            <div>
                You have chosen{" "}
                {<ColorPreview newIndex={response}></ColorPreview>}.
            </div>
        </div>
    );
}
