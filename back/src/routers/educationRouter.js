import { Router } from "express";
import { educationService } from "../services/educationService";
import { login_required } from "../middlewares/login_required";

const educationRouter = Router();

educationRouter.get('/educations/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await educationService.getEducationsByUserId({ userId })
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});


educationRouter.post('/educations/:userId', login_required, async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    const title = req.body.title;
    const description = req.body.description;
    const educationState = (req.body.educationState) ? req.body.educationState : "X";
    console.log(educationState);


    const result = await educationService.addEducation({userId, title, description, educationState});

    res.status(200).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }

});

educationRouter.put('/educations/:userId', login_required, async (req, res, next) => {
  try {
    const educationId = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const educationState = (req.body.educationState) ? req.body.educationState : "이력 없음";

    const result = await educationService.setEducation({ educationId, toUpdate: { title, description, educationState} });

    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});


educationRouter.delete('/educations/:userId', async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const educationId = req.body.id;
    const result = await educationService.deleteEducation({ educationId });
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { educationRouter };