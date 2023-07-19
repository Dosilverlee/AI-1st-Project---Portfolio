import { projectService } from "../services/projectService";

const getProjectByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await projectService.getProjectByUserId({ userId })
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
}

const addProject = async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    const title = req.body.title;
    const description = req.body.description;

    const result = await projectService.addProject({userId, title, description})

    res.status(201).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }
}

const setProject = async (req, res, next) => {
  console.log(req.body);
  try {
    const userId = req.params.userId;
    const projectId = req.params.projectId;
    const title = req.body.title;
    const description = req.body.description;
    const result = await projectService.setProject({ projectId, toUpdate: { title, description } });

    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
}

const deleteProject = async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const projectId = req.params.projectId;
    const result = await projectService.deleteProject({ projectId });
    res.status(204).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
}

export const projectController = {
  getProjectByUserId,
  addProject,
  setProject,
  deleteProject
};