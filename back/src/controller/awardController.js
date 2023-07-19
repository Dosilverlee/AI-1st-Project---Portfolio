import { awardService } from "../services/awardService";

const getAwardByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await awardService.getAwardByUserId({ userId })
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
}

const addAward = async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    const title = req.body.title;
    const description = req.body.description;
    const date = (req.body.date) ? req.body.date : "이력 없음";
    const institute = (req.body.institute) ? req.body.institute : "이력 없음";

    const result = await awardService.addAward({userId, title, description, date, institute})
    console.log(result)

    res.status(201).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }
}

const setAward = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const awardId = req.params.awardId;
    const title = req.body.title;
    const description = req.body.description;
    const date = (req.body.date) ? req.body.date : "이력 없음";
    const institute = (req.body.institute) ? req.body.institute : "이력 없음";

    const result = await awardService.setAward({ awardId, toUpdate: { title, description, date, institute } });

    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
}


const deleteAward = async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const awardId = req.params.awardId;
    const result = await awardService.deleteAward({ awardId });
    res.status(204).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
}

export const awardController = {
  getAwardByUserId,
  addAward,
  setAward,
  deleteAward
};