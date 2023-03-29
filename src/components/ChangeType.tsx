import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

/**
   provides a way to change the type of a quiz question by pressing a button. 
 * Recall from the Objects task that Quiz Questions can come in either Multiple Choice or Short Answer.
    You will need a single state to handle whether the type is multiple_choice_question or short_answer_question.
    The type of the state should be QuestionType, not string.
    There should be a button labelled Change Type 
    that changes the state from one type to the other.

    When the type is multiple_choice_question, the text Multiple Choice should be visible.
    When the type is short_answer_question, the text Short Answer should be visible.
    The initial type must be short_answer_question.
 *  

    BASICALLY: make button that when clicked changes question type and displays whatever type 
 */
export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "multiple_choice_question"
    );
    const changeQuestion = (): void => {
        console.log("before");
        console.log(questionType);
        setQuestionType(
            questionType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
        console.log("after");
        console.log(questionType);
    };
    return (
        <div>
            <Button id="Change Type" onClick={changeQuestion}>
                Change Type
            </Button>
            <div>
                {questionType == "short_answer_question"
                    ? "Multiple Choice"
                    : "Short Answer"}
            </div>
        </div>
    );
}
