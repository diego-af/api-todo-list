"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryController = void 0;
const CreateCategoryService_1 = require("../services/CreateCategoryService");
const categorySchema_1 = require("../schemas/categorySchema");
const CreateCategoryController = async (request, res) => {
    const { name } = request.body;
    const error = categorySchema_1.schemaCategory.safeParse({ name });
    console.log(error);
    if (!error.success)
        return res.status(400).json({ message: error.error.issues[0].message });
    const category = await (0, CreateCategoryService_1.CreateCategoryService)({ name });
    if (!category) {
        return res.status(400).json({ message: "Category not created" });
    }
    return res.status(201).json({ message: "Category sucessfully created", data: category });
};
exports.CreateCategoryController = CreateCategoryController;
