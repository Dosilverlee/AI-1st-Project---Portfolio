import { Router } from "express";
import { projectService } from "../services/projectService";
import { login_required } from "../middlewares/login_required";

const projectRouter = Router();

projectRouter.get('/projects/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await projectService.getProjectByUserId({ userId })
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});


projectRouter.post('/projects/:userId', login_required, async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    const title = req.body.title;
    const description = req.body.description;

    const result = await projectService.addProject({userId, title, description})

    res.status(200).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }

});

projectRouter.put('/projects/:userId', login_required, async (req, res, next) => {
  console.log(req.body);
  try {
    const projectId = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const result = await projectService.setProject({ projectId, toUpdate: { title, description } });

    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});


projectRouter.delete('/projects/:userId', login_required, async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const projectId = req.body.id;
    const result = await projectService.deleteProject({ projectId });
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { projectRouter };