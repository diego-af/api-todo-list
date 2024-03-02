"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterByWordController = void 0;
const FilterByWordService_1 = require("../services/FilterByWordService");
const FilterByWordController = async (request, response) => {
    const { word } = request.params;
    if (!word) {
        return response.status(400).json({ message: "Word not found" });
    }
    const postFiltered = await (0, FilterByWordService_1.FilterByWordService)({ word });
    if (!postFiltered) {
        return response.status(404).json({ message: "Post not found" });
    }
    return response.status(200).json({ message: "Post filtered successfully", data: postFiltered });
};
exports.FilterByWordController = FilterByWordController;
