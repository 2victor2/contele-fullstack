'use strict'

const { StatusCodes } = require('http-status-codes');
const { httpErrorHandler } = require("../../common/handlers");
const { deletePostService } = require('../../services');

const deletePostHandler = async (req, res, next) => {
    try{

        const {
            post_id
        } = req.query;

        const {
            deletedPost
        } = await deletePostService({
            post_id
        })

        return res.status(StatusCodes.OK).send({deletedPost})
    }catch(error){
        return httpErrorHandler({ req, res, error })
    }
}

module.exports = {
    deletePostHandler
}