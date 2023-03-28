import React, { useState } from "react";
import { Form } from "react-bootstrap";

/**
 * 
 * 
The MultipleChoiceQuestions component allows a user to select an answer from a list in a dropdown,
 and then displays whether they got it correct or incorrect. The component takes in a parameter 
 representing the expectedAnswer and also a parameter representing the list of options.

You will need a state to represent the user’s currently selected choice.
The initial state of the selected choice is the first element of the options list.
When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
 */
const COLORS = ["red", "blue", "green", "orange", "purple", "yellow"];
const DEFAULT_COLOR = COLORS[0];

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [favorite, setFavorite] = useState<string>(DEFAULT_COLOR);

    // This is the Control
    function updateFavorite(event: React.ChangeEvent<HTMLSelectElement>) {
        setFavorite(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="favoriteColors">
                    <Form.Label>Select an answer</Form.Label>
                    <Form.Select value={favorite} onChange={updateFavorite}>
                        {options.map((answer: string) => (
                            <option key={answer} value={answer}>
                                {answer}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {favorite === expectedAnswer && (
                    <div>
                        <span>✔️</span>
                    </div>
                )}
                {favorite !== expectedAnswer && (
                    <div>
                        <span>❌</span>
                    </div>
                )}
            </div>
        </div>
    );
}
