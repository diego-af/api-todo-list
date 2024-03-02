"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
const prisma_1 = require("../database/prisma");
const CreateCategoryService = async ({ name }) => {
    const category = await prisma_1.prisma.category.create({
        data: {
            name: name
        }
    });
    return category;
};
exports.CreateCategoryService = CreateCategoryService;
