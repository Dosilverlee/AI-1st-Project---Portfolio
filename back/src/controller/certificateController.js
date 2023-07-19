import { certificateService } from "../services/certificateService";

const getCertificateByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await certificateService.getCertificateByUserId({ userId })
    res.status(200).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
}

const addCertificate = async (req, res, next) => {
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
}

const setCertificate = async (req, res, next) => {
  console.log(req.body);
  try {
    const userId = req.params.userId;
    const certificateId = req.params.certificateId;
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
}

const deleteCertificate = async (req, res, next) => {
  try {
    const certificateId = req.params.certificateId;
    const result = await certificateService.deleteCertificate({ certificateId });
    res.status(204).json(result)
  } catch(e) {
    console.log(e);
    next(e);
  }
}

export const certificateController = {
  getCertificateByUserId,
  addCertificate,
  setCertificate,
  deleteCertificate
};