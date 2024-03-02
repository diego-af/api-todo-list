"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllCategoriesController = void 0;
const GetAllCategoriesService_1 = require("../services/GetAllCategoriesService");
const GetAllCategoriesController = async (request, response) => {
    const categories = await (0, GetAllCategoriesService_1.GetAllCategoriesService)();
    if (!categories) {
        return response.status(404).json({ message: "Categories not found" });
    }
    return response.status(200).json({ message: "Categories found", data: categories });
};
exports.GetAllCategoriesController = GetAllCategoriesController;
