"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostsByIdController = void 0;
const GetPostByIdService_1 = require("../services/GetPostByIdService");
const GetPostsByIdController = async (request, response) => {
    const { id } = request.params;
    const post = await (0, GetPostByIdService_1.GetPostByIdService)({ id });
    console.log(post);
    if (!post) {
        return response.status(404).json({ message: "Post not found" });
    }
    return response.status(200).json({ message: "Post found", data: post });
};
exports.GetPostsByIdController = GetPostsByIdController;
