import is from "@sindresorhus/is";
import { Router } from "express";
import { educationService } from "../services/educationService";

const educationRouter = Router();

/**
 * @description 특정 유저의 학력들 (복수) 조회하기
 */
educationRouter.get("/education/:userId", async (req, res, next)=> {
    try {
        const userId = req.params.userId;
        const currentEducationInfo = await educationService.getEducationsByUserId(userId);

        if (currentEducationInfo.errorMessage){
            throw new Error(currentEducationInfo.errorMessage);
        }

        res.status(200).json(currentEducationInfo);
    }catch(error){
        console.log(error)
        next(error);
    }
});

//학력 내역 추가
educationRouter.post("/education/:userId", async (req, res, next)=> {
    try{
        // const { params: {userId}, body: {title, description}} = req;
        const {userId} = req.params;
        const {title, description} = req.body;

        const education = await educationService.addEducation({userId, title, description});
        res.status(200).json(education);
        
    }catch(error){
        next(error);
    }
})


//학력 내역 수정
educationRouter.put("/education/:id", async (req, res, next) => {
    try{
        const userId = req.params.id;
        const title = req.body.title ?? null;
        const description = req.body.description ?? null;

        const toUpdate = {title, description};

        const updatedEducation = await educationService.setEducation({ id: userId, toUpdate });
        
        if (updatedEducation.errorMessage){
            throw new Error(updatedEducation.errorMessage);
        }
        res.status(200).json(updatedEducation);
    }catch(error){
        next(error);
    }
});

//학력 내역 삭제
educationRouter.delete("/education/:id", async (req, res, next) => {
    try{
        const userId = req.params.id;
        const deletedEducation = await educationService.deleteEducation({ id: userId });
        res.status(200).json(deletedEducation);
    }catch(error){
        next(error);
    }
})

export { educationRouter };