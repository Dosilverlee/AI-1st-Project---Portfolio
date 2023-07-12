import { Router } from "express";
import { awardService } from "../services/awardService";

const awardRouter = Router();

awardRouter.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId

    const result = await awardService.getAwardByUserId(userId)
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});

awardRouter.post('/:userId', async (req, res, next) => {
  try {
    // const userId = req.params.userId;
    // const title = req.body.title;
    // const description = req.body.description;

    const userId = 1;
    const title = "testtitle";
    const description = "테스트입니다.";
  
    const result = await awardService.addAward(userId, title, description)
  
    res.status(200).json(data)
  } catch(e) {
    console.log(e);
    next(e);
  }
});

awardRouter.put('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const updateTitle = req.body.title
    const updateDescription = req.body.description
    const updateField = { updateTitle, updateDescription }
  
    const result = await awardService.setAward({ title, toUpdate: updateField });
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});

awardRouter.delete('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId

    const result = await awardService.deleteAward()
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});

awardRouter.get('/', async (req, res, next) => {
  try {
    res.send('award입니다.')
  } catch(e) {
    console.log(e);
    next(e);
  }
})

export { awardRouter };