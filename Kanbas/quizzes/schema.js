import mongoose from "mongoose";

const answersSchema = new mongoose.Schema(
    {
        value: String,
        isCorrect: Boolean,
    },
    { collection: "answers" },
)


const questionsSchema = new mongoose.Schema(
    {
        title: String,
        points: Number,
        question: String,
        questionType: String,
        answers: [answersSchema],
    },
    { collection: "questions" },

)


const quizzesSchema = new mongoose.Schema(
  {
    cid: String,
    title: String,
    description: String,
    assignedTo: String,
    isPublished: Boolean,
    type: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz",
      },
      points: Number,
      assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes",
      },
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
