"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueReference = void 0;
const apartment_1 = __importDefault(require("../models/apartment"));
const generateUniqueReference = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let isUnique = false;
        let reference = 0;
        while (!isUnique) {
            reference = Math.floor(1000 + Math.random() * 9000); // 1000–9999
            const existing = yield apartment_1.default.findOne({ reference });
            if (!existing)
                isUnique = true;
        }
        return reference;
    }
    catch (error) {
        console.error("Error generating unique reference:", error);
        throw new Error("Failed to generate unique reference.");
    }
});
exports.generateUniqueReference = generateUniqueReference;
