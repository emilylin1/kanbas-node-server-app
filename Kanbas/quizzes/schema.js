import mongoose from "mongoose";

const answersSchema = new mongoose.Schema(
  {
    value: String,
    isCorrect: Boolean,
  },
  { collection: "answers" },
);

const questionsSchema = new mongoose.Schema(
  {
    title: String,
    points: Number,
    question: String,
    questionType: String,
    answers: [answersSchema],
  },
  { collection: "questions" },
);

const quizzesSchema = new mongoose.Schema(
  {
    cid: String,
    title: String,
    description: String,
    isPublished: Boolean,
    type: String,
    points: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtOnce: Boolean,
    webcamRequired: Boolean,
    lockQuestions: Boolean,
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    questions: [questionsSchema],
  },
  { collection: "quizzes" },
);
export default quizzesSchema;
