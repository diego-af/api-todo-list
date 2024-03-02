"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchemaBody = exports.updateSchemaParams = void 0;
const zod_1 = __importDefault(require("zod"));
const updateSchemaParams = zod_1.default.object({
    id: zod_1.default.string({
        required_error: "id is required",
        invalid_type_error: "id not exists"
    })
});
exports.updateSchemaParams = updateSchemaParams;
const updateSchemaBody = zod_1.default.object({
    title: zod_1.default.string({
        required_error: "the title is required",
        invalid_type_error: "title isn`t a string"
    }),
    completed: zod_1.default.boolean({
        required_error: "completed is required",
        invalid_type_error: "completed isn`t a boolean"
    })
});
exports.updateSchemaBody = updateSchemaBody;
