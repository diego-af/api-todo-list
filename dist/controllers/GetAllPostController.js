"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPostController = void 0;
const GetAllPostService_1 = require("../services/GetAllPostService");
const GetAllPostController = async (request, response) => {
    const post = await (0, GetAllPostService_1.GetAllPostService)();
    if (!post) {
        return response.status(404).json({ message: "There are no posts" });
    }
    return response.status(200).json({ message: "Posts found", data: post });
};
exports.GetAllPostController = GetAllPostController;
