import React, { useState } from "react";
import Form from "react-bootstrap/Form";

/**
 * The EditMode component has two states controlled by a switch: 
 * the default state shows text indicating the user’s name and whether they are a student,
 *  and then the alternate state is an editable form for editing the user’s name and whether they are a student.

You will need state to handle the component being in “edit mode”, the user’s name,
 and whether or not the user is a student.

The state of “edit mode” should be controlled by a switch (not a button or checkbox).

Initially, the component is NOT in edit mode, the user’s name is literally the string Your Name
(as in, that exact string, not your actual name), and the user IS a student.
When not in edit mode, the text of the component must include Your Name is a student or Your Name is not a student.

As another example, if the user entered their name as Charles Babbage and said they were NOT a student, 
then the text would be Charles Babbage is not a student.
Whether or not the user is a student should be controlled by a regular checkbox, not a switch or button.

HINT: We said “switch” and we meant it.

HINT: If you can’t figure out why you are failing a test, read the test code. The tests are the most specific form of description.

HINT: If an element is rendered not visible, then a test looking for it will fail. If a test fails, check to see if the elements you have written are rendered in the Javascript.
 * 
    √ There is one checkbox and no textboxes (75 ms)
    √ Initial text should be 'Your Name is a student'. (8 ms)
    √ Can switch into Edit Mode (53 ms)
    × Editing the name and student status changes the text (159 ms)
    × Different name, click student box twice changes the text (123 ms)

 */

export function EditMode(): JSX.Element {
    //state to handle the component being in “edit mode”, the user’s name, and whether or not the user is a student.
    const [inEdit, setInEdit] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    // if its in edit mode, then we render check box for student, form to change name
    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        // if (inEdit == false) {
        //     setUserName("");
        // }
        setInEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div id="switch0" style={{ backgroundColor: "grey" }}>
                <Form.Check
                    type="switch"
                    id="form-switch"
                    // label="Happy?"
                    checked={inEdit}
                    onChange={updateMode}
                />
            </div>
            {inEdit == true && (
                <div>
                    <div>
                        {" "}
                        <Form.Check
                            type="checkbox"
                            id="isStudentCheck"
                            label="Student?"
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </div>
                    <div>
                        <Form.Group controlId="textbox">
                            {" "}
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                // type="text"
                                value={userName}
                                onChange={updateName}
                            />{" "}
                        </Form.Group>
                    </div>
                </div>
            )}
            {!inEdit && (
                <div>
                    {userName}{" "}
                    {isStudent ? " is a Student" : " is not a student"}
                </div>
            )}
            {/* <Button onClick={()=> <h2>KMS</h2> }>
                gain
            </Button> */}
        </div>
    );
}
/**
 * Your Name is a student
 */
