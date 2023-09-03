import BurrowSchema from "./BurrowSchema.js";

export const addBurrow = (obj) => {
  return BurrowSchema(obj).save();
};

// all burrow transaction for admin user only
export const getBurrows = () => {
  return BurrowSchema.find();
};
// all burrow transaction for individual user of their own
export const getBurrowbyUserId = (userId) => {
  return BurrowSchema.find({ userId });
};

export const updateBurrow = (_id, data) => {
  return BurrowSchema.findByIdAndUpdate(_id, data);
};

export const deleteBurrow = (_id) => {
  return BurrowSchema.findByIdAndDelete(_id);
};
