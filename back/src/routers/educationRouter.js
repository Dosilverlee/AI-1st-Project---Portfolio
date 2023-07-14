import is from "@sindresorhus/is";
import { Router } from "express";
import { educationService } from "../services/educationService";

const educationRouter = Router();

//학력 불러오기
educationRouter.get("/:userId", async (req, res, next)=> {
    try {
        if (is.emptyObject(req.body)) {
          throw new Error(
            "headers의 Content-Type을 application/json으로 설정해주세요"
          );
        }

        //console.log(req.body);
        const userId = req.params.userId;
        
        const currentEducationInfo = await educationService.getEducationById({ userId });

        if (currentEducationInfo.errorMessage){
            throw new Error(currentEducationInfo.errorMessage);
        }

        res.status(200).json(currentEducationInfo);
    }catch(error){
        next(error);
    }
});

//학력 내역 추가
educationRouter.post("/:userId", async (req, res, next)=> {
    try{
        console.log(req.body);
        const user_id = req.params.userId;
        const id = req.body.id;
        const title = req.body.title;
        const description = req.body.description;

        const education = await educationService.addEducation(id, user_id, title, description)
        res.status(200).json(education);
        
    }catch(error){
        next(error);
    }
})


//학력 내역 수정
educationRouter.put("/:userId", async (req, res, next) => {
    try{
        const user_id = req.params.userId;
        const title = req.body.title ?? null;
        const description = req.body.description ?? null;

        const toUpdate = {user_id, title, description};

        const updatedEducation = await educationService.setEducation({ user_id, toUpdate });
        
        if (updatedEducation.errorMessage){
            throw new Error(updatedEducation.errorMessage);
        }
        res.status(200).json(updatedEducation);
    }catch(error){
        next(error);
    }
});

//학력 내역 삭제
educationRouter.delete("/:userId", async (req, res, next) => {
    try{
        const user_id = req.params.userId;
        const deletedEducation = await educationService.deletedEducation({ user_id });
        res.status(200).json(deletedEducation);
    }catch(error){
        next(error);
    }
})

export { educationRouter };