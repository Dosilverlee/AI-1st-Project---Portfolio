import { certificateService } from "../services/certificateService";
import { logger } from "../winstonLogger";

const getCertificateByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId
    const result = await certificateService.getCertificateByUserId({ userId })
    logger.info("getCertificateByUserId");
    res.status(200).json(result)
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const addCertificate = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { title, description } = req.body;
    const date = (req.body.date) ? req.body.date : "이력 없음";
    const institute = (req.body.institute) ? req.body.institute : "이력 없음";
    const result = await certificateService.addCertificate({userId, title, description, date, institute})
    logger.info("addCertificate");
    res.status(201).json({result})
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const setCertificate = async (req, res, next) => {
  try {
    const { userId, certificateId } = req.params;
    const { title, description } = req.body;
    const date = (req.body.date) ? req.body.date : "이력 없음";
    const institute = (req.body.institute) ? req.body.institute : "이력 없음";
    const result = await certificateService.setCertificate({ certificateId, toUpdate: { title, description, date, institute } });
    logger.info("setCertificate");
    res.status(200).json(result)
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

const deleteCertificate = async (req, res, next) => {
  try {
    const certificateId = req.params.certificateId;
    const result = await certificateService.deleteCertificate({ certificateId });
    logger.info("deleteCertificate");
    res.status(204).json(result)
  } catch(e) {
    logger.error(e);
    next(e);
  }
}

export const certificateController = {
  getCertificateByUserId,
  addCertificate,
  setCertificate,
  deleteCertificate
};