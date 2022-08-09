"use strict";
const { StatusCodes } = require("http-status-codes");
const { httpErrorHandler } = require("../../common/handlers");
const { createUserService } = require("../../services");

const createUserHandler = async (req, res, next) => {
  try {
    const { user_email, user_password, full_name } = req.body;

    const created_user = await createUserService({
      user_email,
      user_password,
      full_name,
    });

    return res.status(StatusCodes.CREATED).send(created_user);
  } catch (error) {
    return httpErrorHandler({ req, res, error });
  }
};

module.exports = {
  createUserHandler,
};
