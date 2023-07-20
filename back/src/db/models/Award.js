import { AwardModel } from "../schemas/award";
import { ObjectTypeHandler } from "../typeHandler";

class Award {
  static async create(newAward) {
    const createdNewAward = await AwardModel.create(newAward);
    return createdNewAward;
  }

  static async findByUserId(userId) {
    const awards = await AwardModel.find({ userId: userId });
    return awards;
  }

  static async findById(id) {
    const award = await AwardModel.findOne({ _id : ObjectTypeHandler(id) });
    return award;
  }

  static async findByTitleDescription(userId, title, description) {
    const award = await AwardModel.findOne({ userId, title, description});
    return award;
  }

  static async update(id, updateField) {
    const filter = { _id: ObjectTypeHandler(id) };
    const update = { $set: updateField };
    const option = { returnOriginal: false };

    const updatedAward = await AwardModel.findOneAndUpdate(
        filter,
        update,
        option
    );
    return updatedAward;
  }

  static async findByIdAndRemove(id) {
    const filter = { _id: ObjectTypeHandler(id) };
    const deletedAward = await AwardModel.findOneAndDelete(filter);
    return deletedAward;
  }
}

export { Award };
