import model from "./model.js";

export const createQuiz = (quiz) => {
    delete quiz._id;
    return model.create(quiz);
};
export const findQuizzesForCourse = (cid) =>
    model.find({ cid: cid });

export const findQuizByQuizId = (qid) =>
    model.findOne({ _id: qid });

export const updateQuiz = (qid, quiz) =>
    model.updateOne({ _id: qid }, { $set: quiz });

export const updateQuestion = (qid, questionId, question) => {
    return model.updateOne(
        { _id: qid, "questions._id": questionId },
        { $set: { "questions.$.title": question.title } }
    )
};


export const deleteQuiz = (qid) => model.deleteOne({ _id: qid });
