import { Router } from "express";
import { certificateService } from "../services/certificateService";

const certificateRouter = Router();

certificateRouter.get('certificates/:id', async (req, res, next) => {
  try {
    const userId = req.params.id
    const result = await certificateService.getCertificateByUserId(userId)
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

certificateRouter.post('certificates/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
  
    const result = await certificateService.addCertificate(userId, title, description)
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

certificateRouter.put('certificates/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updateTitle = req.body.title;
    const updateDescription = req.body.description;
    const updateField = { updateTitle, updateDescription };
  
    const result = await certificateService.setCertificate({ id : userId, toUpdate: updateField })
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

certificateRouter.delete('certificates/:id', async (req, res, next) => {
  try {
    // 클라이언트가 요청한 _id값 받아오기
    const result = await certificateService.deleteCertificate()
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }  

});

export { certificateRouter };