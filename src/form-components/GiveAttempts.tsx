import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
/**
The GiveAttempts component simulates a user taking a quiz with a limited number of attempts,
but also provides a way for them to gain as many attempts as they want via a numeric input box.

You will need a state to represent the number of attempts the user has left, 
and another state to represent the number of attempts they are requesting.

The initial number of attempts left should be 3.
The number of attempts left should be visible.

There should be a numeric input box where the user can specify their requested number of attempts.
There should be two buttons, one labeled use that decreases the attempts by one 

and one labeled gain that increases the attempts by the amount in the input box.

If the user attempts to request an invalid amount (e.g., the empty string "") 
that cannot be parsed as an integer, then do not change their number of attempts.
When the user is out of attempts, the use button should be disabled
    × You can use attempts (49 ms)                                                                                                     
    √ You can gain arbitrary attempts (76 ms)                                                                                          
    × Cannot gain blank amounts (59 ms) 
 */

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("0");
    const attemptsWanted = parseInt(requestedAttempts) || 0;
    console.log(requestedAttempts);
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                <Form.Group controlId="formMovieReleased">
                    <Form.Label>Request:</Form.Label>
                    <Form.Control
                        type="number"
                        value={requestedAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setRequestedAttempts(event.target.value)}
                    />
                </Form.Group>
                <span>you have</span>
                {/* <div>{attemptsLeft}</div> */}
            </div>
            <div>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft == 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        setAttemptsLeft(attemptsLeft + attemptsWanted)
                    }
                >
                    gain
                </Button>
                <h4>attempts are: {attemptsLeft}</h4>
            </div>
        </div>
    );
}
