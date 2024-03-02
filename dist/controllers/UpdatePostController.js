"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostController = void 0;
const UpdatePostService_1 = require("../services/UpdatePostService");
const updateSchema_1 = require("../schemas/updateSchema");
const UpdatePostController = async (request, response) => {
    const { id } = request.params;
    const error = updateSchema_1.updateSchemaParams.safeParse({ id });
    if (!error.success) {
        return response.status(400).json({ message: error.error.issues[0].message });
    }
    const { title, completed } = request.body;
    const errorBody = updateSchema_1.updateSchemaBody.safeParse({ title, completed });
    if (!errorBody.success) {
        return response.status(400).json({ message: errorBody.error.issues[0].message });
    }
    const post = await (0, UpdatePostService_1.UpdatePostService)({ id, title, completed });
    if (!post) {
        return response.status(500).json({ message: "Not possible to update" });
    }
    return response.status(200).json({ message: "Post updated successfully", data: post });
};
exports.UpdatePostController = UpdatePostController;
