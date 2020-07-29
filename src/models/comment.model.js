const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentShema = new Schema({
  comment: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
    autopopulate: true,
  },
});

CommentShema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("comment", CommentShema);
