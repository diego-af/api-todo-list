"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const postSchema = zod_1.default.object({
    title: zod_1.default.string({
        required_error: "The name is required",
        invalid_type_error: "Title isn`t a string"
    })
});
exports.postSchema = postSchema;
