import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

/**
 * edit mode one for each 
 * The ChooseTeam component provides a list of buttons representing people, and a list of people representing a team. 
 * 
 * Clicking a button adds the given person to the team on the right,if they are not already there.
 * 
 *  Currently, the component is broken and partially out, because its click handlers are not coded correctly to properly update state.
 *  Fix the click handler functions so that the component works correctly. 

You must not add or remove components; you can only modify the existing components.



#basically:
all it is, is updating state with an array
             we have a list of people, when we click on button "add", person gets moved to team array (if they are not there)
              => currently state of team array is not being updated when person is added
                => need to create usestate, and make it so that when "add" is clicked, the respective name gets added to "team"
                => declare usestate for team array and for person in parent, update team array in child
                => make choosemember add persone to team if not their, will take in any function with array and return void
                => function will add person selected to end of the array ( need to make copy of array, cant mutate original)
             If user clicks "clear team", the state of team changes to be an empty list

 */
const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember() {
        /*
        if (!team.includes(newMember)) {
            team.push(newMember);
        }
        */
    }

    function clearTeam() {
        /*
        team = [];
        */
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button onClick={chooseMember} size="sm">
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={clearTeam}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
