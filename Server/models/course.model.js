const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  c_img: String,
  c_name: { type: String, required },
  c_detail: { type: String, required },
  video: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Video', default: null }
  ],
  content: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Content', default: null }
  ],
  quiz: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', default: null }],
  quiz_result: [
    {
      quiz_name: { type: String, required: true },
      marks: { type: Number, default: 0 }
    }
  ]
});

module.exports = mongoose.model('Course', courseSchema);