import { Router } from "express";
import { educationService } from "../services/educationService";
import { login_required } from "../middlewares/login_required";

const educationRouter = Router();

educationRouter.get('/educations/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await educationService.getEducationByUserId({ userId })
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

    const result = await educationService.addEducation({userId, title, description})

    res.status(200).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }

});

educationRouter.put('/educations/:userId/:educationId', login_required, async (req, res, next) => {
  console.log(req.body);
  try {
    const userId = req.params.userId;
    const educationId = req.params.educationId;
    const title = req.body.title;
    const description = req.body.description;
    const result = await educationService.setEducation({ educationId, toUpdate: { title, description } });

    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});


educationRouter.delete('/educations/:userId/:educationId', login_required, async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const educationId = req.params.educationId;
    const result = await educationService.deleteEducation({ educationId });
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { educationRouter };
