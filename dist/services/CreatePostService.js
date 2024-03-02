"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePostService = void 0;
const prisma_1 = require("../database/prisma");
const CreatePostService = ({ title, categoryId }) => {
    const post = prisma_1.prisma.todo.create({
        data: {
            title: title,
            categoryId: categoryId
        }
    });
    return post;
};
exports.CreatePostService = CreatePostService;
