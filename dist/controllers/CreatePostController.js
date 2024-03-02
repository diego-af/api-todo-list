"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostController = void 0;
const CreatePostService_1 = require("../services/CreatePostService");
const postSchema_1 = require("../schemas/postSchema");
const CreatePostController = async (request, response) => {
    const { title, categoryId } = request.body;
    const error = postSchema_1.postSchema.safeParse({ title, categoryId });
    if (!error.success) {
        return response.status(400).json({ message: error.error.issues[0].message });
    }
    const post = await (0, CreatePostService_1.CreatePostService)({ title, categoryId });
    if (!post) {
        return response.status(400).json({ message: "Post not created" });
    }
    response.status(201).json({ message: "Post successfully created", data: post });
};
exports.CreatePostController = CreatePostController;
