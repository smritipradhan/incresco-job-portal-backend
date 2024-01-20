import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "A Job must have Id"],
  },
  jobRole: {
    type: String,
    required: [true, "A Job must have Job Role"],
  },
  location: {
    type: String,
    required: [true, "A Job must have Location"],
  },
  company: {
    type: String,
    required: [true, "A Job must have Company"],
  },
  datePosted: {
    type: String,
    required: [true, "A Job must have Date Posted"],
  },
  salaryRange: {
    type: String,
    required: [true, "A Job must have Salary Range"],
  },
  skills: {
    type: String,
    required: [true, "A Job must have Skills"],
  },
  experience: {
    type: String,
    required: [true, "A Job must have Experience"],
  },
  education: {
    type: String,
    required: [true, "A Job must have Education"],
  },
  image: {
    type: String,
  },
});

export const Job = mongoose.model("Job", jobSchema);
