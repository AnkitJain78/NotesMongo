const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
      unique: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
  }
);

const Note = mongoose.model("Notes", schema);
module.exports = Note;