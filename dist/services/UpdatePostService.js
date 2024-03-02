"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostService = void 0;
const prisma_1 = require("../database/prisma");
const UpdatePostService = async ({ id, title, completed }) => {
    const post = await prisma_1.prisma.todo.update({
        where: {
            id: id
        },
        data: {
            title: title,
            completed: completed
        }
    });
    return post;
};
exports.UpdatePostService = UpdatePostService;
