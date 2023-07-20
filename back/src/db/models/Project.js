import { ProjectModel } from "../schemas/project";
import { ObjectTypeHandler } from "../typeHandler";

class Project {
  static async create(newProject) {
    const createdNewProject = await ProjectModel.create(newProject);
    return createdNewProject;
  }

  static async findByUserId(userId) {
    const Projects = await ProjectModel.find({ userId: userId });
    return Projects;
  }

  static async findById(id) {
    const Project = await ProjectModel.findOne({ _id : ObjectTypeHandler(id) });
    return Project;
  }

  static async findByTitleDescription(userId, title, description) {
    const Project = await ProjectModel.findOne({ userId, title, description});
    return Project;
  }

  static async update(id, updateField) {
    const filter = { _id: ObjectTypeHandler(id) };
    const update = { $set: updateField };
    const option = { returnOriginal: false };

    const updatedProject = await ProjectModel.findOneAndUpdate(
        filter,
        update,
        option
    );
    return updatedProject;
  }

  static async findByIdAndRemove(id) {
    const filter = { _id: ObjectTypeHandler(id) };
    const deletedProject = await ProjectModel.findOneAndDelete(filter);
    return deletedProject;
  }
}

export { Project };