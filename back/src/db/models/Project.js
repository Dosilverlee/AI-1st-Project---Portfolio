import { ProjectModel } from "../schemas/project";

class Project {
  static async create({ newProject }) {
    const createdNewProject = await ProjectModel.create(newProject);
    return createdNewProject;
  }

  static async findByUserId({ userId }) {
    const project = await ProjectModel.findOne({ userId });
    return project;
  }

  static async update({ userId, updateField }) {
    const filter = { userId: userId };
    const update = { $set: updateField };
    const option = { returnOriginal: false };
  
    const updatedProject = await ProjectModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedProject;
  }  
}

export { Project };
