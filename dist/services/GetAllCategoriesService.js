"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesService = void 0;
const prisma_1 = require("../database/prisma");
const GetAllCategoriesService = async () => {
    const categories = prisma_1.prisma.category.findMany();
    return categories;
};
exports.GetAllCategoriesService = GetAllCategoriesService;
