import { AwardModel } from "../schemas/award";

class Award {
  static async create({ newAward }) {
    const createdNewAward = await AwardModel.create(newAward);
    return createdNewAward;
  }

  static async findByUserId({ userId }) {
    const award = await AwardModel.findOne({ userId });
    return award;
  }

  static async update({ userId, updateField }) {
    const filter = { userId: userId };
    const update = { $set: updateField };
    const option = { returnOriginal: false };
  
    const updatedAward = await AwardModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedAward;
  }  
}

export { Award };
