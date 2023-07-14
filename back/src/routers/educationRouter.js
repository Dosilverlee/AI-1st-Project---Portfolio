import is from "@sindresorhus/is";
import { Router } from "express";
import { educationService } from "../services/educationService";

const educationRouter = Router();


//학력 불러오기
educationRouter.get("/education/:id", async (req, res, next)=> {
    try {
        if (is.emptyObject(req.body)) {
          throw new Error(
            "headers의 Content-Type을 application/json으로 설정해주세요"
          );
        }

        //console.log(req.body);
        const userId = req.params.id;
        
        const currentEducationInfo = await educationService.getEducationById(userId);

        if (currentEducationInfo.errorMessage){
            throw new Error(currentEducationInfo.errorMessage);
        }

        res.status(200).json(currentEducationInfo);
    }catch(error){
        next(error);
    }
});

//학력 내역 추가
educationRouter.post("/education/:id", async (req, res, next)=> {
    try{
        console.log(req.body);
        const userId = req.params.id;
        const title = req.body.title;
        const description = req.body.description;

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