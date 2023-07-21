import { educationService } from "../services/educationService";
import { logger } from "../winstonLogger";

const getEducationsByUserId = async (req, res, next) => {
  try {;
    const userId = req.params.userId
    const result = await educationService.getEducationsByUserId({ userId })
    logger.info("getEducationsByUserId")
    res.status(200).json(result)
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const addEducation = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const userId = req.params.userId; 
    const graduation = (req.body.graduation) ? req.body.graduation : 0;    
    const result = await educationService.addEducation({userId, title, description, graduation});
    logger.info("addEducation");
    res.status(200).json({result})
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const setEducation = async (req, res, next) => {
  try {
    const { userId, educationId } = req.params;
    const { title, description } = req.body;
    const graduation = (req.body.graduation) ? req.body.graduation : 0;
    const result = await educationService.setEducation({ educationId, toUpdate: { title, description, graduation} });
    logger.info("setEducation");
    res.status(200).json(result);
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const deleteEducation = async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const educationId = req.params.educationId;
    const result = await educationService.deleteEducation({ educationId });
    logger.info("deleteEducation");
    res.status(200).json(result)
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

export const educationController = {
  getEducationsByUserId,
  addEducation,
  setEducation,
  deleteEducation
};