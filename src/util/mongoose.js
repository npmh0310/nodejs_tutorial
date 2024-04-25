module.exports = {
  mutipleMongooseToObject: function (mongoosesArray) {
    return mongoosesArray.map((mongoosesArray) => mongoosesArray.toObject());
  },
  mongooseToObject: function (mongoosesArray) {
    return mongoosesArray ? mongoosesArray.toObject() : mongoosesArray;
  },
};
