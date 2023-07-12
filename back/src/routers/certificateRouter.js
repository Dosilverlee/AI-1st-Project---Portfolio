import { Router } from "express";
import { certificateService } from "../services/certificateService";

const certificateRouter = Router();

certificateRouter.get('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId

    const result = await certificateService.getCertificateByUserId(userId)
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

certificateRouter.post('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const title = req.body.title;
    const description = req.body.description;
  
    const result = await certificateService.addCertificate(userId, title, description)
  
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

certificateRouter.put('/:userId', async (req, res, next) => {
  try {
    const userId = req.params.userId
    const updateTitle = req.body.title
    const updateDescription = req.body.description
    const updateField = { updateTitle, updateDescription }
  
    const result = await certificateService.setCertificate({ title, toUpdate: updateField })
  
    res.status(200).json(data)
  } catch(e) {
    console.log(e);
    next(e);
  }

});

certificateRouter.delete('/:userId', async (req, res, next) => {
  try {
    const result = await certificateService.deleteCertificate()

    res.status(200).json(data)
  } catch(e) {
    console.log(e);
    next(e);
  }  

});

certificateRouter.get('/', async (req, res, next) => {
  try {
    res.send('certificate입니다.')
  } catch(e) {
    console.log(e);
    next(e);
  }
});

export { certificateRouter };