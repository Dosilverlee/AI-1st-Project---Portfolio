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


awardRouter.post('/awards/:userId', login_required, async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    const title = req.body.title;
    const description = req.body.description;

    const result = await awardService.addAward({userId, title, description})

    res.status(200).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }

});

awardRouter.put('/awards/:userId', login_required, async (req, res, next) => {
  console.log(req.body);
  try {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const result = await awardService.setAward({ id, toUpdate: { title, description } });

    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});


awardRouter.delete('/awards/:userId', login_required, async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const id = req.body.id;
    const result = await awardService.deleteAward({ id });
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { awardRouter };