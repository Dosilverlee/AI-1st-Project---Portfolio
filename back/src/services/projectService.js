import { Project } from "../db/models/Project"; 

class projectService {
  // 프로젝트 이력 추가
  static async addProject({ userId, title, description }) {
    const projectData = await Project.findByTitleDescription(userId, title, description);
    if (projectData) {
      const errorMessage =
        "이미 등록된 프로젝트이력입니다.";
      return { errorMessage };
    }

    const newProject = { userId, title, description };

    // db에 저장
    const createdNewProject = await Project.create(newProject);

    return createdNewProject;
  }

  // 프로젝트 이력 가져오기
  static async getProjectByUserId({ userId }) {
    // userID로 프로젝트 이력 가져오기
    const projectData = await Project.findByUserId(userId);
    if (projectData.length === 0) {
      return [];
    }

    // 모든 프로젝트 이력을 배열로 변환
    const projectDataResult = projectData.map(project => ({
      id: project._id,
      userId: project.userId,
      title: project.title,
      description: project.description,
    }));

    return projectDataResult;
  }

  // 프로젝트 이력 수정하기
  static async setProject({ id, toUpdate }) {
    let projectData = await Project.findById(id);

    if (projectData === 0) {
      const errorMessage = "자격 이력이 없습니다. 다시 한 번 확인해 주세요.";
      return { errorMessage };
    }

    const updatedProject = await Project.update(projectData.id, toUpdate);
    return updatedProject;
  }

  // 프로젝트 이력 삭제하기
  static async deleteProject({ id }) {
    let projectData = await Project.findById(id);
  
    if (projectData.length === 0) {
      throw new Error("삭제할 이력이 없습니다.");
    }
    const deletedProject = await Project.findByIdAndRemove(certificateData.id);
    return deletedProject;
  }
}

export { projectService };
