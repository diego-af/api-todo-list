"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletControllerPost = void 0;
const DeletPostService_1 = require("../services/DeletPostService");
const DeletControllerPost = async (req, res) => {
    const { id } = req.params;
    const postDeleted = await (0, DeletPostService_1.DeletPostService)({ id });
    if (!postDeleted) {
        return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).json({ message: "Post deleted" });
};
exports.DeletControllerPost = DeletControllerPost;
