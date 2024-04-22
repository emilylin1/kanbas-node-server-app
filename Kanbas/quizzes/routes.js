import * as dao from "./dao.js";

function QuizRoutes(app) {


  const createQuiz = async (req, res) => {
    const quiz = { ...req.body, course: req.params.cid };
    const result = await dao.createQuiz(quiz);
    res.json(result);
  };

  const findQuizzesForCourse = async (req, res) => {
    const quizzes = await dao.findQuizzesForCourse(req.params.cid);
    res.json(quizzes);
  };

  const findQuizByQuizId = async (req, res) => {
    const quiz = await dao.findQuizByQuizId(req.params.qid);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuiz(qid, req.body);
    res.json(status);
  };

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.qid);
    res.json(status);
  };

  app.put("/api/quizzes/:qid", updateQuiz);
  app.delete("/api/quizzes/:qid", deleteQuiz);
  app.post("/api/courses/:cid/quizzes", createQuiz);
  app.get("/api/courses/:cid/quizzes", findQuizzesForCourse);
  app.get("/api/quizzes/:qid", findQuizByQuizId);

}
export default QuizRoutes;
