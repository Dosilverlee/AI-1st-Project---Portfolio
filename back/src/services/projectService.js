import { Project } from "../db/models/Project"; 

class projectService {
  // 프로젝트 이력 추가
  static async addProject({ userId, title, description }) {
    const projectData = await Project.findByUserId({ userId });
    if (projectData) {
      const errorMessage =
        "이미 등록된 프로젝트 이력입니다.";
      return { errorMessage };
    }

    const newProject = { id, userId, title, description };

    // db에 저장
    const createdNewProject = await Project.create(newProject);

    return createdNewProject;
  }

  // 프로젝트 이력 가져오기
  static async getProjectByUserId({ userId }) {
    // userID로 수상이력 가져오기
    const projectData = await Project.findByUserId({ userId });
    if (!projectData) {
      const errorMessage =
        "프로젝트 이력 없음";
      return { errorMessage };
    }

    // 반환할 loginuser 객체를 위한 변수 설정
    const id = projectData._id;
    const userIdFromData = projectData.id;
    const title = projectData.title;
    const description = projectData.description;

    const projectDataResult = {
      id,
      userId: userIdFromData,
      title,
      description,
      errorMessage: null,
    };

    return projectDataResult;
  }

  // 프로젝트 이력 수정하기
  static async setProject({ id, toUpdate }) {
    let projectData = await Project.findByUserId({ _id: id });
  
    if (!projectData) {
      const errorMessage = "프로젝트 이력이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }
  
    // 모든 변경사항을 한번에 적용하기 위해 필드를 한번에 업데이트
    const projectResult = await Project.updateOne({ userId: awardData.userId, updateField: toUpdate });
    
    return projectResult;
  }

  static async deleteProject({ id }) {
    const projectData = await Project.findByUserId({ _id: id });

    if (!projectData) {
      const errorMessage =
      "해당 내역이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage }
    }

    await projectData.remove();
    return true;
  }
}

export { projectService };
