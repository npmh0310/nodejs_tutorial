const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const courseSchema = new Schema(
  {
    name: { type: String, default: "" },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    videoId: {
      type: String,
    },
    slug: {
      type: String,
      slug: "name",
      unique: true, //* giúp tạo duy nhất 1 slug trong trường hợp có 2 name giống nhau
    },
  },
  { timestamps: true } //* tao createAt vs updateAt
);

// Nếu mà trong collection chưa có thì nó sẽ tự tạo ra 1 collection dựa theo tên của cái ở trong ngoặc ""

module.exports = mongoose.model("courses", courseSchema);
