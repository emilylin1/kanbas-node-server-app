import model from "./model.js";

export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
};
export const findQuizzesForCourse = (cid) =>
  model.find({ cid: cid });

export const findQuizByQuizId = (qid) =>
  model.findone({ _id: qid });
  
export const updateQuiz = (qid, quiz) =>
  model.updateOne({ _id: qid }, { $set: quiz });

export const deleteQuiz = (qid) => model.deleteOne({ _id: qid });
