import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { educationController } from "../controller/educationController";

const educationRouter = Router();

educationRouter.get('/educations/:userId', educationController.getEducationsByUserId);
educationRouter.post('/educations/:userId', login_required, educationController.addEducation);
educationRouter.put('/educations/:userId/:educationId', login_required, educationController.setEducation);
educationRouter.delete('/educations/:userId/:educationId', login_required, educationController.deleteEducation);

export { educationRouter };