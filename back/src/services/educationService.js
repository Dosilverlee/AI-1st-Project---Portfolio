import { Education } from "../db"; // from을 폴더(db) 로 설정 시, 디폴트로 index.js 로부터 import함.

class educationService { //학력 내역 추가
    static async addEducation({userId, title, description}){
        const education = await Education.findById({ userId });
        if (education){
            const errorMessage = "중복된 학력 내역이 있습니다.";
            return { errorMessage };
        }
    
        const newEducation = {id, userId, title, description};
        const createdNewEducation = await Education.create({ newEducation });
        createdNewEducation.errorMessage = null; //문제 없이 DB 저장되었으므로 에러X
        return createdNewEducation;
    }

    //학력 내역 가져오기
    static async getEducationById({ userId }){
        const educationData = await Education.findById({ userId }); //userId가 userId인 education
        if(!educationData){
            const errorMessage = "학력 내역이 없습니다." 
            return { errorMessage };
        }

        const id = educationData._id; //id가져오기
        const userIdData = educationData.id;
        const title = educationData.title;
        const description = educationData.description;

        const EducationDataSet ={
            id,
            userId: userIdData,
            title,
            description,
            errorMessage: null,
        };
        return EducationDataSet;
    }
    
    //학력 내역 수정
    static async setEducation({ id, toUpdate }){

        let education = await Education.findById({ _id: id});

        if(!education){
            const errorMessage = "학력 내역이 없습니다. 다시 한 번 확인해주세요.";
            return { errorMessage };
        }

        //업데이트 대상에 title이 있다면, 업데이트 진행
        if (toUpdate.title){
            const newValue = toUpdate.title;
            education = await Education.update({ userId: id, fieldToUpdate: newValue });
        }

        //업데이트 대상에 description이 있다면, 업데이트 진행
        if (toUpdate.description){
            const newValue = toUpdate.description;
            education = await Education.update({ userId: id, fieldToUpdate: newValue });
        }

        return education;

    }
    static async deleteEducation({ id }){
        const educationData = await Education.findOne({ _id: userId});
        if(!educationData){
            const errorMessage = "삭제하려는 내역이 없습니다.";
            return { errorMessage };
        }
        await educationService.remove();
        return;
    }
}

export { educationService };