"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPostService = void 0;
const prisma_1 = require("../database/prisma");
const GetAllPostService = async () => {
    const todos = await prisma_1.prisma.todo.findMany({
        include: {
            category: true
        }
    });
    return todos;
};
exports.GetAllPostService = GetAllPostService;
