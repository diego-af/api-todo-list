"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterByWordService = void 0;
const prisma_1 = require("../database/prisma");
const FilterByWordService = async ({ word: word }) => {
    const postFiltered = await prisma_1.prisma.todo.findMany({
        where: {
            title: {
                startsWith: word
            }
        }
    });
    return postFiltered;
};
exports.FilterByWordService = FilterByWordService;
