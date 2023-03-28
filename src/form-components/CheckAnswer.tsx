import React, { useState } from "react";
import Form from "react-bootstrap/Form";
/**
 * The CheckAnswer component allows a user to enter an answer to a
 * short answer question, and then displays whether they got it correct or incorrect.
 * The component takes in a parameter representing the expectedAnswer.
 * You will need a state to handle the user’s given answer
 * The user’s given answer should initially be the empty string
 * When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
 */
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formCheckAnswer">
                {" "}
                <Form.Label>Name:</Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />{" "}
            </Form.Group>

            <div>
                The response is {userAnswer === expectedAnswer ? "✔️" : "❌"}.
            </div>
        </div>
    );
}
