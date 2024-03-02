"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPostByIdService = void 0;
const prisma_1 = require("../database/prisma");
const GetPostByIdService = async ({ id: id }) => {
    const post = await prisma_1.prisma.todo.findUnique({
        where: {
            id: id
        }
    });
    return post;
};
exports.GetPostByIdService = GetPostByIdService;
