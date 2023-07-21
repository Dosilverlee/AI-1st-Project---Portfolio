import { projectService } from "../services/projectService";
import { logger } from "../winstonLogger";

const getProjectByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await projectService.getProjectByUserId({ userId })
    logger.info("getProjectByUserId");
    res.status(200).json(result)
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const addProject = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { title, description } = req.body;
    const result = await projectService.addProject({userId, title, description})
    logger.info("addProject");
    res.status(201).json({result})
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const setProject = async (req, res, next) => {
  try {
    const { userId, projectId} = req.params;
    const { title, description } = req.body;
    const result = await projectService.setProject({ projectId, toUpdate: { title, description } });
    logger.info("setProject");
    res.status(200).json(result)
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const deleteProject = async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const projectId = req.params.projectId;
    const result = await projectService.deleteProject({ projectId });
    logger.info("deleteProject");
    res.status(204).json(result)
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

export const projectController = {
  getProjectByUserId,
  addProject,
  setProject,
  deleteProject
};