import { Router } from "express";
import { educationService } from "../services/educationService";
import { login_required } from "../middlewares/login_required";

const educationRouter = Router();

educationRouter.get('/educations/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await educationService.getEducationsByUserId({ userId })
    console.log(result);
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});


educationRouter.post('/educations/:userId', login_required, async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const userId = req.params.userId; 
    const graduation = (req.body.graduation) ? req.body.graduation : 0;
    
    const result = await educationService.addEducation({userId, title, description, graduation});

    res.status(200).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }

});

educationRouter.put('/educations/:userId', login_required, async (req, res, next) => {
  try {
    const educationId = req.params.id;
    const { title, description } = req.body;
    const graduation = (req.body.graduation) ? req.body.graduation : 0;

    const result = await educationService.setEducation({ educationId, toUpdate: { title, description, graduation} });

    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});


educationRouter.delete('/educations/:userId', async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const educationId = req.parmas.id;
    const result = await educationService.deleteEducation({ educationId });
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { educationRouter };