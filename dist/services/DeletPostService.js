"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletPostService = void 0;
const prisma_1 = require("../database/prisma");
const DeletPostService = async ({ id }) => {
    const post = await prisma_1.prisma.todo.delete({
        where: {
            id
        }
    });
    return post;
};
exports.DeletPostService = DeletPostService;
