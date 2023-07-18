import { Router } from "express";
import { certificateService } from "../services/certificateService";
import { login_required } from "../middlewares/login_required";

const certificateRouter = Router();

certificateRouter.get('/certificates/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await certificateService.getCertificateByUserId({ userId })
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});


certificateRouter.post('/certificates/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId; 
    const title = req.body.title;
    const description = req.body.description;
    const date = (req.body.date) ? req.body.date : "이력 없음";
    const institute = (req.body.institute) ? req.body.institute : "이력 없음";

    const result = await certificateService.addCertificate({userId, title, description, date, institute})

    res.status(201).json({result})
  } catch(e) {
    console.log(e);
    next(e);
  }

});

certificateRouter.put('/certificates/:userId', login_required, async (req, res, next) => {
  console.log(req.body);
  try {
    const certificateId = req.body.id;
    const title = req.body.title;
    const description = req.body.description;
    const date = (req.body.date) ? req.body.date : "이력 없음";
    const institute = (req.body.institute) ? req.body.institute : "이력 없음";

    const result = await certificateService.setCertificate({ certificateId, toUpdate: { title, description, date, institute } });

    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
});


certificateRouter.delete('/certificates/:userId/:certificateId', login_required, async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const { userId, certificateId } = req.params
    const result = await certificateService.deleteCertificate({ certificateId });
    res.status(204).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

export { certificateRouter };