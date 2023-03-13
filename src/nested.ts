/* eslint-disable indent */
import { Console } from "console";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const copyQuestions: Question[] = [...questions];
    const onlyPublished: Question[] = copyQuestions.filter(
        (element: Question): boolean => element.published == true
    );
    return onlyPublished;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    // console.log("THESE ARE THE QUESTIONS");
    // console.log(questions);
    const copyQuesion: Question[] = [...questions];
    const nonEmptyQuestions: Question[] = copyQuesion.filter(
        (element: Question): boolean =>
            element.body != "" ||
            element.expected != "" ||
            element.options.length != 0
    );
    // console.log("THIS IS THE OUTPUT");
    // console.log(JSON.stringify(nonEmptyQuestions));
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const copyQuestion: Question[] = [...questions];
    // const foundId = copyQuestion.filter(
    //     (element: Question): boolean => element.id == id
    // );
    // if (foundId.length != 0) {
    //     return foundId[0];
    // }
    const foundId: Question | undefined = copyQuestion.find(
        (element: Question): boolean => element.id == id
    );

    if (foundId != null) {
        return foundId;
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const copyQuestions: Question[] = [...questions];

    const noIdMatches: Question[] = copyQuestions.filter(
        (element: Question): boolean => element.id != id
    );

    return noIdMatches;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const copyQuestions: Question[] = [...questions];
    const questionNames: string[] = copyQuestions.map(
        (element: Question): string => element.name
    );

    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const copyQuestions: Question[] = [...questions];
    const sum: number = copyQuestions.reduce(
        (currentTotal: number, element: Question) =>
            (currentTotal += element.points),
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const copyQuestions: Question[] = [...questions];
    const publishedQuestionsSum: number = copyQuestions
        .filter((element: Question): boolean => element.published == true)
        .reduce(
            (currentTotal: number, element: Question) =>
                (currentTotal += element.points),
            0
        );
    return publishedQuestionsSum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
// clonedAddends[clonedAddends.length - 1].toString()
// ? elementN.toString() + "+"
// : elementN.toString()
export function toCSV(questions: Question[]): string {
    const columNames: string =
        "id," + "name," + "options," + "points," + "published" + "\n";
    const copyQuestions: Question[] = [...questions];
    const strToCsv: string = copyQuestions
        .map((elemenetN: Question): string =>
            (JSON.stringify(copyQuestions[copyQuestions.length - 1]) ===
                JSON.stringify(elemenetN)) !=
            true
                ? `${elemenetN.id},${elemenetN.name},${elemenetN.options.length},${elemenetN.points},${elemenetN.published}\n`
                : `${elemenetN.id},${elemenetN.name},${elemenetN.options.length},${elemenetN.points},${elemenetN.published}`
        )
        .join("");
    const outPutCsv: string = columNames + strToCsv;
    // console.log(outPutCsv);

    /**
     * make a sting of just the default id,name,options,points,published with a new line at the end
     * then make a string by maping through each question and returning qustion.id,name,options,points,published in a string followd by a new line
     */
    return outPutCsv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    // for each question theres a answer, so map through questions, and form corresponding answer object
    // questionId: 1, correct: false, text: "", submitted: false

    const copyQuestions: Question[] = [...questions];
    const answers: Answer[] = copyQuestions.map(
        (element: Question): Answer => ({
            questionId: element.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const copyQuestions: Question[] = [...questions];
    const newQuestions: Question[] = copyQuestions.map(
        (elementQ: Question): Question => ({ ...elementQ, published: true })
    );
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copyQuestions: Question[] = [...questions];
    const areEqual: boolean = copyQuestions.every(
        (element: Question): boolean => element.type == copyQuestions[0].type
    );
    return areEqual;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const copyQuestion: Question[] = [...questions];
    const newQuestion: Question = makeBlankQuestion(id, name, type);
    return [...copyQuestion, newQuestion];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const copyQuestions: Question[] = [...questions];
    const newQuestions: Question[] = copyQuestions.map(
        (element: Question): Question =>
            element.id == targetId ? { ...element, name: newName } : element
    );
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const copyQuestions: Question[] = [...questions];
    let newQuestions: Question[] = [];
    const foundQuestion = copyQuestions.find(
        (element: Question): boolean => element.id == targetId
    );
    if (newQuestionType.toLocaleLowerCase() == "multiple_choice_question") {
        newQuestions = copyQuestions.map(
            (element: Question): Question =>
                JSON.stringify(element) == JSON.stringify(foundQuestion)
                    ? { ...element, type: newQuestionType }
                    : element
        );
    } else {
        newQuestions = copyQuestions.map(
            (element: Question): Question =>
                JSON.stringify(element) == JSON.stringify(foundQuestion)
                    ? { ...element, type: newQuestionType, options: [] }
                    : element
        );
    }
    // console.log("THIS IS THE QUESIOOON IN ID");
    // console.log(newQuestions);
    return newQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const deepCopyQuestions: Question[] = questions.map(
        (element: Question): Question => ({
            ...element,
            options: [...element.options]
        })
    );

    const targetIndex: number = questions.findIndex(
        (element: Question): boolean => element.id == targetId
    );
    if (targetOptionIndex == -1) {
        deepCopyQuestions[targetIndex].options = [
            ...deepCopyQuestions[targetIndex].options,
            newOption
        ];
    }
    deepCopyQuestions[targetIndex].options.splice(
        targetOptionIndex,
        1,
        newOption
    );
    // console.log("SO HERE IS COPY IN EDIT OPTION");
    // console.log(JSON.stringify(deepCopyQuestions));
    return deepCopyQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 * question with target id is to be duplicated, then that copied question is to be inserted after the original:
 * 1:obtain index of the one with the target id
 * 2: obtain question that needs to be duplicated: dup = {...questions[index]}
 * 3:make duplicate = duplicateQuestion(newId,dup )
 * 4: insert dup at originalIndex+1 : copyQuestions.splice(1+indexndex, 0, duplicate)
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const copyQuestion: Question[] = [...questions];
    const questionIndex: number = questions.findIndex(
        (element: Question): boolean => element.id == targetId
    );
    const copyOrignal: Question = { ...copyQuestion[questionIndex] };
    const duplicatedQuestion: Question = duplicateQuestion(newId, copyOrignal);
    copyQuestion.splice(1 + questionIndex, 0, duplicatedQuestion);

    return copyQuestion;
}
