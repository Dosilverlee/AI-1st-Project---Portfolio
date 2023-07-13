import { Router } from "express";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    // href="event.target.id"
    const result = await projectService.getProjectByUserId()
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

projectRouter.post('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    // href="event.target.id"
    const title = req.body.title;
    const description = req.body.description;
  
    const result = await projectService.addProject(userId, title, description)
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

projectRouter.put('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const updateTitle = req.body.title
    const updateDescription = req.body.description
    const updateField = { updateTitle, updateDescription }
  
    const result = await projectService.setProject({ _id : userId, toUpdate: updateField })
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

projectRouter.delete('/:userId'), async (req, res, next) => {
  try {
    const result = await projectService.deleteProject()
    // href="event.target.id"
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

};

projectRouter.get('/', async (req, res, next) => {
  try {
    res.send('project입니다.')
  } catch(e) {
    console.log(e);
    next(e);
  }
})

export { projectRouter };