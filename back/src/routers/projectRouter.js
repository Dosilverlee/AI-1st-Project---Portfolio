import { Router } from "express";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.get('/project/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const result = await projectService.getProjectByUserId()
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

projectRouter.post('/project/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
  
    const result = await projectService.addProject(userId, title, description)
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

projectRouter.put('/project/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updateTitle = req.body.title;
    const updateDescription = req.body.description;
    const updateField = { updateTitle, updateDescription };
  
    const result = await projectService.setProject({ id : userId, toUpdate: updateField })
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

projectRouter.delete('/project/:id', async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const result = await projectService.deleteProject()
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { projectRouter };