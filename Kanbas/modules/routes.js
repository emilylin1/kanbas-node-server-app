import * as dao from "./dao.js";

function ModuleRoutes(app) {
    const createModule = async (req, res) => {
        const module = {...req.body, course: req.params.courseId};
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

    // app.put("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params;
    //     const moduleIndex = db.modules.findIndex(
    //         (m) => m._id === mid);
    //     db.modules[moduleIndex] = {
    //         ...db.modules[moduleIndex],
    //         ...req.body
    //     };
    //     res.sendStatus(204);
    // });
    // app.delete("/api/modules/:mid", (req, res) => {
    //     const { mid } = req.params;
    //     db.modules = db.modules.filter((m) => m._id !== mid);
    //     res.sendStatus(200);
    // });
    // app.post("/api/courses/:cid/modules", (req, res) => {
    //     const { cid } = req.params;
    //     const newModule = {
    //         ...req.body,
    //         course: cid,
    //         _id: new Date().getTime().toString(),
    //     };
    //     db.modules.push(newModule);
    //     res.send(newModule);
    // });
    // app.get("/api/courses/:cid/modules", (req, res) => {
    //     const { cid } = req.params;
    //     const modules = db.modules
    //         .filter((m) => m.course === cid);
    //     res.send(modules);
    // });
}
export default ModuleRoutes;