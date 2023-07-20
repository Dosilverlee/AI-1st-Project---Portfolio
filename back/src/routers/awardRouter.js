import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { awardController } from "../controller/awardController";

const awardRouter = Router();

awardRouter.get('/awards/:userId', awardController.getAwardByUserId);
awardRouter.post('/awards/:userId', awardController.addAward);
awardRouter.put('/awards/:userId/:awardId', awardController.setAward);
awardRouter.delete('/awards/:userId/:awardId', awardController.deleteAward);

export { awardRouter };