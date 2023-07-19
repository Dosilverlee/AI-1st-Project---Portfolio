import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { projectController } from "../controller/projectController";

const projectRouter = Router();

projectRouter.get('/projects/:userId', projectController.getProjectByUserId);
projectRouter.post('/projects/:userId', login_required, projectController.addProject);
projectRouter.put('/projects/:userId/:projectId', login_required, projectController.setProject);
projectRouter.delete('/projects/:userId/:projectId', login_required, projectController.deleteProject);

export { projectRouter };