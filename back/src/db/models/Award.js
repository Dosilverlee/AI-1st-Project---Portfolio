import { AwardModel } from "../schemas/award";
import { Types } from "mongoose";
const { ObjectId } = Types;

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
    const award = await AwardModel.findOne(ObjectId(id));
    return award;
  }

  static async findByTitleDescription(title, description) {
    const award = await AwardModel.findOne({ title, description});
    return award;
  }

  static async update(id, updateField) {
    const filter = { _id: ObjectId(id) };
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
    const filter = { _id: ObjectId(id) };
    const deletedAward = await AwardModel.findOneAndDelete(filter);
    return deletedAward;
  }
}

export { Award };
