import * as dao from "./dao.js";

function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = { ...req.body, course: req.params.courseId };
    const result = await dao.createModule(module);
    res.json(result);
  };
  const findModulesForCourse = async (req, res) => {
    const modules = await dao.findModulesForCourse(req.params.courseId);
    res.json(modules);
  };
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };

  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
  app.post("/api/courses/:courseId/modules", createModule);
  app.get("/api/courses/:courseId/modules", findModulesForCourse);
}
export default ModuleRoutes;
