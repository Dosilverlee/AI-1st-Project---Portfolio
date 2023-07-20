import { educationService } from "../services/educationService";
import { logger } from "../log/winstonLogger";

const getEducationsByUserId = async (req, res, next) => {
  try {
    logger.info("getEducationsByUserId");
    const userId = req.params.userId
    const result = await educationService.getEducationsByUserId({ userId })
    res.status(200).json(result)
  } catch(e) {
    logger.error("getEducationByUserId 오류");
    console.log(e);
    next(e);
  }
}

const addEducation = async (req, res, next) => {
  try {
    logger.info("addEducation");
    const { title, description } = req.body;
    const userId = req.params.userId; 
    const graduation = (req.body.graduation) ? req.body.graduation : 0;    
    const result = await educationService.addEducation({userId, title, description, graduation});

    res.status(200).json({result})
  } catch(e) {
    logger.error("addEducation 오류");
    console.log(e);
    next(e);
  }
}

const setEducation = async (req, res, next) => {
  try {
    logger.info("setEducation");
    const { userId, educationId } = req.params;
    const { title, description } = req.body;
    const graduation = (req.body.graduation) ? req.body.graduation : 0;
    
    const result = await educationService.setEducation({ educationId, toUpdate: { title, description, graduation} });

    res.status(200).json(result);
  } catch(e) {
    logger.error("setEducation 오류");
    console.log(e);
    next(e);
  }
}

const deleteEducation = async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    logger.info("deleteEducation");
    const educationId = req.params.educationId;
    const result = await educationService.deleteEducation({ educationId });
    res.status(200).json(result)
  } catch(e) {
    logger.error("deleteEducation 오류");
    console.log(e);
    next(e);
  }
}

export const educationController = {
  getEducationsByUserId,
  addEducation,
  setEducation,
  deleteEducation
};