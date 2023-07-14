import { Router } from "express";
import { awardService } from "../services/awardService";

const awardRouter = Router();

awardRouter.get('/awards/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const result = await awardService.getAwardByUserId(userId)
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

awardRouter.post('/awards/:id', async (req, res, next) => {
  try {
    const userId = req.params.id; 
    const title = req.body.title;
    const description = req.body.description;

    const result = await awardService.addAward({userId, title, description})

    res.status(200).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }

});

awardRouter.put('/awards/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updateTitle = req.body.title;
    const updateDescription = req.body.description;
    const updateField = { updateTitle, updateDescription };
  
    const result = await awardService.setAward({ id : userId, toUpdate: updateField });
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

awardRouter.delete('/awards/:id', async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const result = await awardService.deleteAward()
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { awardRouter };