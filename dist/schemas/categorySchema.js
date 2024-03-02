"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaCategory = void 0;
const zod_1 = __importDefault(require("zod"));
const schemaCategory = zod_1.default.object({
    name: zod_1.default.string({
        required_error: "name is required",
        invalid_type_error: "Name category isn´t a string"
    })
});
exports.schemaCategory = schemaCategory;
