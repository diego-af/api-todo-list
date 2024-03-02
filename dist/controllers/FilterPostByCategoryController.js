"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterPostByCategoryController = void 0;
const FilterPostByCategoryService_1 = require("../services/FilterPostByCategoryService");
const FilterPostByCategoryController = async (request, response) => {
    const { categoryId } = request.params;
    const postFilteredById = await (0, FilterPostByCategoryService_1.FilterPostByCategoryService)({ categoryId });
    if (!postFilteredById) {
        return response.status(404).json({ message: "Not possible apply filter" });
    }
    return response.status(200).json({ message: "Success filtered", data: postFilteredById });
};
exports.FilterPostByCategoryController = FilterPostByCategoryController;
