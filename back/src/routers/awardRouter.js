import { Router } from "express";
import { awardService } from "../services/awardService";
import { login_required } from "../middlewares/login_required";

const awardRouter = Router();

awardRouter.get('/awards/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await awardService.getAwardByUserId({ userId })
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});


awardRouter.post('/awards/:userId', async (req, res, next) => {
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

});

awardRouter.put('/awards/:userId', login_required, async (req, res, next) => {
  try {
    const awardId = req.body.id;
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
});


awardRouter.delete('/awards/:userId', async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const awardId = req.body.id;
    const result = await awardService.deleteAward({ awardId });
    res.status(204).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { awardRouter };