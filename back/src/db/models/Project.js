import { ProjectModel } from "../schemas/project";
import { Types } from "mongoose";
const { ObjectId } = Types;

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
    const Project = await ProjectModel.findOne(ObjectId(id));
    return Project;
  }

  static async update(id, updateField) {
    const filter = { _id: ObjectId(id) };
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
    const filter = { _id: ObjectId(id) };
    const deletedProject = await ProjectModel.findOneAndDelete(filter);
    return deletedProject;
  }
}

export { Project };
