import { Types } from "mongoose";
const { ObjectId } = Types;

/**
 * @param {String} element - String을 입력하면 ObjectId을 반환
 */
function ObjectTypeHandler(element) {
  ObjectId(element)
}

export { ObjectTypeHandler };