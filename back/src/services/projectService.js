import { Project } from "../db/models/Project"; 

class projectService {
  // 이력 추가
  static async addProject({ userId, title, description }) {
    const projectData = await Project.findByUserId(userId);
    if (projectData.length > 1) {
      const errorMessage =
        "이미 등록된 프로젝트이력입니다.";
      return { errorMessage };
    }

    const newProject = { userId, title, description };

    // db에 저장
    const createdNewProject = await Project.create(newProject);

    return createdNewProject;
  }

  // 수상 이력 가져오기
  static async getProjectByUserId({ userId }) {
    // userID로 수상이력 가져오기
    const projectData = await Project.findByUserId(userId);
    if (projectData.length === 0) {
      return [];
    }

    // 모든 수상 이력을 배열로 변환
    const projectDataResult = projectData.map(project => ({
      id: project._id,
      userId: project.userId,
      title: project.title,
      description: project.description,
    }));

    return projectDataResult;
  }

  // 수상 이력 수정하기
  static async setProject({ id, toUpdate }) {
    let projectData = await Project.findById(id);

    if (projectData === 0) {
      const errorMessage = "자격 이력이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const updatedProject = await Project.update(id, toUpdate);
    return updatedProject;
  }

  // 수상 이력 삭제하기
  static async deleteProject({ id }) {
    let projectData = await Project.findById(id);
  
    if (projectData === 0) {
      throw new Error("삭제할 이력이 없습니다.");
    }
    const deletedProject = await Project.findByIdAndRemove(id);
    return deletedProject;
  }
}

export { projectService };
