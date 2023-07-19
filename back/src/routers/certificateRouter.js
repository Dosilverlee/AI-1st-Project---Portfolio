import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { certificateController } from "../controller/certificateController";

const certificateRouter = Router();

certificateRouter.get('/certificates/:userId', certificateController.getCertificateByUserId);
certificateRouter.post('/certificates/:userId', login_required, certificateController.addCertificate);
certificateRouter.put('/certificates/:userId/:certificateId', login_required, certificateController.setCertificate);
certificateRouter.delete('/certificates/:userId/:certificateId', login_required, certificateController.deleteCertificate);

export { certificateRouter };