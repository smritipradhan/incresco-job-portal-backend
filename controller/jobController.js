import { Job } from "../models/jobModel.js";

export const getAll = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).send({
      message: "success",
      data: {
        jobs,
      },
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};

export const getById = async (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};

export const create = async (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};

export const update = async (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};

export const deleteTest = (req, res) => {
  try {
    res.status(200).send({
      message: "success",
    });
  } catch (err) {
    res.status(400).send({
      message: "failed",
    });
  }
};
