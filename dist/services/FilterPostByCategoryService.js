"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterPostByCategoryService = void 0;
const prisma_1 = require("../database/prisma");
const FilterPostByCategoryService = async ({ categoryId }) => {
    const postFilteredByCategoryId = await prisma_1.prisma.todo.findMany({
        where: {
            categoryId: categoryId
        }
    });
    return postFilteredByCategoryId;
};
exports.FilterPostByCategoryService = FilterPostByCategoryService;
